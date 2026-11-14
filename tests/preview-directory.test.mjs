import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const builderPath = path.join(repositoryRoot, 'scripts', 'build-preview-directory.mjs');

async function createFixture(t) {
  const temporaryDirectory = await mkdtemp(path.join(os.tmpdir(), 'tohee-preview-directory-'));
  t.after(() => rm(temporaryDirectory, { recursive: true, force: true }));
  return {
    checkoutDirectory: path.join(temporaryDirectory, 'checkout'),
    outputDirectory: path.join(temporaryDirectory, 'output'),
  };
}

async function addPreview(checkoutDirectory, directory, { metadata, index = true } = {}) {
  const previewDirectory = path.join(checkoutDirectory, directory);
  await mkdir(previewDirectory, { recursive: true });
  if (index) await writeFile(path.join(previewDirectory, 'index.html'), '<!doctype html><title>preview</title>', 'utf8');
  if (metadata !== undefined) {
    await writeFile(path.join(previewDirectory, 'preview-info.json'), typeof metadata === 'string' ? metadata : JSON.stringify(metadata), 'utf8');
  }
}

async function buildDirectory(checkoutDirectory, outputDirectory) {
  const result = spawnSync(process.execPath, [builderPath, checkoutDirectory, outputDirectory], {
    encoding: 'utf8',
    env: { ...process.env, GITHUB_REPOSITORY: 'Example/Docs' },
  });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  return readFile(path.join(outputDirectory, 'index.html'), 'utf8');
}

test('lists main first and pull requests in descending numeric order', async (t) => {
  const fixture = await createFixture(t);
  const revision = '0123456789abcdef0123456789abcdef01234567';
  await addPreview(fixture.checkoutDirectory, 'main', {
    metadata: { builtAt: '2026-11-15T02:00:00.000Z', revision },
  });
  await addPreview(fixture.checkoutDirectory, 'pr-preview/pr-4', {
    metadata: { builtAt: '2026-11-15T10:04:00+08:00', revision },
  });
  await addPreview(fixture.checkoutDirectory, 'pr-preview/pr-21', {
    metadata: { builtAt: '2026-11-15T02:21:00Z', revision },
  });
  await addPreview(fixture.checkoutDirectory, 'pr-preview/pr-9', {
    metadata: { builtAt: '2026-11-15T02:09:00Z', revision },
  });

  const html = await buildDirectory(fixture.checkoutDirectory, fixture.outputDirectory);
  const labels = [...html.matchAll(/<span class="preview-kind">([^<]+)<\/span>/gu)].map((match) => match[1]);
  assert.deepEqual(labels, ['main', 'PR #21', 'PR #9', 'PR #4']);
  assert.match(html, /href="\.\/main\/#\/docs"/u);
  assert.match(html, /href="\.\/pr-preview\/pr-21\/#\/docs"/u);
  assert.match(html, /<code>main\/<\/code>/u);
  assert.match(html, /<code>pr-preview\/pr-21\/<\/code>/u);
  assert.match(html, /href="https:\/\/github\.com\/Example\/Docs\/commit\/0123456789abcdef0123456789abcdef01234567"/u);
  assert.match(html, /datetime="2026-11-15T02:04:00\.000Z">2026-11-15T02:04:00\.000Z \(UTC\)<\/time>/u);
  assert.match(html, /timeZoneName: 'shortOffset'/u);
  assert.match(html, /resolvedOptions\(\)\.timeZone/u);
  assert.doesNotMatch(html, /Asia\/Taipei|UTC\+08:00|innerHTML/u);
});

test('shows missing build metadata as unrecorded without inventing preview times', async (t) => {
  const fixture = await createFixture(t);
  await addPreview(fixture.checkoutDirectory, 'main');
  await addPreview(fixture.checkoutDirectory, 'pr-preview/pr-7');

  const html = await buildDirectory(fixture.checkoutDirectory, fixture.outputDirectory);
  assert.equal((html.match(/未记录 \/ <span lang="en">Not recorded<\/span>/gu) ?? []).length, 4);
  assert.equal((html.match(/<time datetime=/gu) ?? []).length, 1);
  assert.doesNotMatch(html, /\/commit\//u);
});

test('omits removed previews and handles a seeded empty output directory', async (t) => {
  const fixture = await createFixture(t);
  await addPreview(fixture.checkoutDirectory, 'pr-preview/pr-88', {
    index: false,
    metadata: { builtAt: '2026-11-15T02:00:00Z', revision: '0123456789abcdef0123456789abcdef01234567' },
  });
  await mkdir(fixture.outputDirectory, { recursive: true });
  await writeFile(path.join(fixture.outputDirectory, 'index.html'), '<!doctype html><title>seed</title>', 'utf8');

  const html = await buildDirectory(fixture.checkoutDirectory, fixture.outputDirectory);
  assert.match(html, /No main or PR previews are currently available/u);
  assert.doesNotMatch(html, /pr-88|PR #88|seed/u);
});

test('does not render untrusted metadata as HTML', async (t) => {
  const fixture = await createFixture(t);
  const injection = '<img src=x onerror=alert(1)>';
  await addPreview(fixture.checkoutDirectory, 'pr-preview/pr-5', {
    metadata: { builtAt: `2026-11-15T02:00:00Z${injection}`, revision: `${'a'.repeat(40)}${injection}` },
  });

  const html = await buildDirectory(fixture.checkoutDirectory, fixture.outputDirectory);
  assert.match(html, /PR #5/u);
  assert.doesNotMatch(html, /<img|onerror=|alert\(1\)/u);
  assert.match(html, /未记录 \/ <span lang="en">Not recorded<\/span>/u);
});
