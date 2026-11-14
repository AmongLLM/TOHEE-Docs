import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { compileDocs } from '../scripts/build-docs.mjs';

async function createFixture(t, { roles = [], factions = [] } = {}) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'tohee-docs-'));
  const outputDir = path.join(root, 'output');
  t.after(() => rm(root, { recursive: true, force: true }));
  await writeJson(path.join(root, 'content', '_category_.json'), category('library', 'Documentation', '文档', 0));
  await writeJson(path.join(root, 'content', 'guides', '_category_.json'), category('guide', 'Guides', '指南', 1));
  await writeJson(path.join(root, 'role-roster.json'), { modCommit: '1234567890abcdef', roles });
  await writeJson(path.join(root, 'roleColor.json'), {});
  await writeJson(path.join(root, 'docs.config.json'), {
    factions,
    startCards: [card('guide-home')],
    searchScopes: [scope('guide', ['guide'])],
  });
  return { root, outputDir };
}

async function addCategory(root, relativePath, id, order = 1) {
  await writeJson(path.join(root, 'content', relativePath, '_category_.json'), category(id, id, id, order));
}

async function addDocument(root, relativePath, metadata, body) {
  const file = path.join(root, 'content', relativePath);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, '---\n' + JSON.stringify(metadata, null, 2) + '\n---\n' + body, 'utf8');
}

async function writeJson(file, value) {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, JSON.stringify(value, null, 2) + '\n', 'utf8');
}

function category(id, en, zh, order) {
  return { id, title: { 'zh-CN': zh, en }, order };
}

function card(id) {
  return {
    id,
    title: { 'zh-CN': '开始阅读', en: 'Start reading' },
    summary: { 'zh-CN': '进入指南。', en: 'Open a guide.' },
  };
}

function scope(id, groups) {
  return { id, title: { 'zh-CN': '指南', en: 'Guides' }, groups };
}

function guide(id, overrides = {}) {
  return {
    id,
    kind: 'guide',
    category: 'legacy-value-is-ignored',
    title: { 'zh-CN': '中文标题', en: 'English title' },
    summary: { 'zh-CN': '中文摘要', en: 'English summary' },
    source: 'https://example.test/source',
    ...overrides,
  };
}

const localizedBody = '<!-- zh-CN -->\n## 中文正文\n正文\n<!-- en -->\n## English body\nBody';

test('compiles bilingual pages, data-driven navigation, release assets, and safe HTML', async t => {
  const { root, outputDir } = await createFixture(t);
  await addCategory(root, 'guides/installation', 'installation');
  await mkdir(path.join(root, 'assets'), { recursive: true });
  const imageBytes = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  await writeFile(path.join(root, 'assets', 'pixel image.png'), imageBytes);
  const homeBody = '<!-- zh-CN -->\n# 欢迎\n## 重复\n## 重复\n[安装](/docs/guide-installation#overview)\n![示例图](/assets/pixel%20image.png?size=1#caption)\n[危险链接](javascript:alert%281%29)\n<script>alert(1)</script>\n<!-- en -->\n# Welcome\n## Duplicate\n## Duplicate\n![Example](../../assets/pixel%20image.png)\n[unsafe](javascript:alert%281%29)\n<script>alert(1)</script>';
  await addDocument(root, 'guides/home.md', guide('guide-home', { order: 2 }), homeBody);
  await addDocument(root, 'guides/installation/install.md', guide('guide-installation', { order: 1 }), localizedBody);

  const index = await compileDocs({ sourceRoot: root, outputDir, version: 'release-2026.11' });
  assert.equal(index.modCommit, '1234567890abcdef');
  assert.deepEqual(index.documents.map(({ id }) => id), ['guide-installation', 'guide-home']);
  assert.equal(index.documents[0].category, 'installation');
  assert.equal(index.documents[0].sourcePath, 'content/guides/installation/install.md');
  assert.deepEqual(index.navigation[0].documents, ['guide-home']);
  assert.deepEqual(index.navigation[0].children[0].documents, ['guide-installation']);
  assert.deepEqual(index.startCards.map(({ id }) => id), ['guide-home']);
  assert.deepEqual(index.searchScopes, [scope('guide', ['guide'])]);

  const page = JSON.parse(await readFile(path.join(outputDir, 'pages', 'guide-home.zh-CN.json'), 'utf8'));
  assert.deepEqual(page.headings, [
    { id: '欢迎', text: '欢迎', level: 1 },
    { id: '重复', text: '重复', level: 2 },
    { id: '重复-1', text: '重复', level: 2 },
  ]);
  assert.match(page.html, /src="\/docs\/releases\/release-2026\.11\/assets\/pixel%20image\.png\?size=1#caption"/u);
  assert.doesNotMatch(page.html, /href="javascript:/iu);
  assert.match(page.html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/u);
  const builtImage = await readFile(path.join(outputDir, 'assets', 'pixel image.png'));
  assert.deepEqual(builtImage, imageBytes);
  await compileDocs({ sourceRoot: root, outputDir, version: 'release-2026.11', check: true });
});

test('rejects malformed articles and broken links', async t => {
  const { root, outputDir } = await createFixture(t);
  await addDocument(root, 'guides/home.md', guide('Guide-Home'), localizedBody);
  await assert.rejects(compileDocs({ sourceRoot: root, outputDir }), /lowercase letters, digits, and hyphens/u);

  await addDocument(root, 'guides/home.md', guide('guide-home'), '<!-- zh-CN -->\n只有中文');
  await assert.rejects(compileDocs({ sourceRoot: root, outputDir }), /each exact locale marker once/u);

  await addDocument(root, 'guides/home.md', guide('guide-home'), '<!-- zh-CN -->\n[缺失](/docs/missing)\n<!-- en -->\nMissing');
  await assert.rejects(compileDocs({ sourceRoot: root, outputDir }), /points to unknown document "missing"/u);
});

test('validates roster roles separately from navigation groups', async t => {
  const role = { key: 'Sheriff', id: 'role-sheriff', category: 'crewmate', source: 'Roles/Crewmate/Sheriff.cs' };
  const { root, outputDir } = await createFixture(t, {
    roles: [role],
    factions: [{ id: 'crewmate', title: { 'zh-CN': '船员', en: 'Crewmates' }, color: '#8cffff' }],
  });
  await addCategory(root, 'character-reference', 'character-reference');
  await writeJson(path.join(root, 'roleColor.json'), { Sheriff: '#abcdef' });
  const source = 'https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1234567890abcdef/Roles/Crewmate/Sheriff.cs';
  await addDocument(root, 'guides/home.md', guide('guide-home'), localizedBody);
  await addDocument(root, 'character-reference/sheriff.md', guide('role-sheriff', {
    kind: 'role',
    category: 'crewmate',
    source,
  }), localizedBody);
  const config = JSON.parse(await readFile(path.join(root, 'docs.config.json'), 'utf8'));
  config.searchScopes.push(scope('roles', ['character-reference']));
  await writeJson(path.join(root, 'docs.config.json'), config);

  const index = await compileDocs({ sourceRoot: root, outputDir });
  const sheriff = index.documents.find(({ id }) => id === 'role-sheriff');
  assert.equal(sheriff.category, 'crewmate');
  assert.equal(sheriff.sourcePath, 'content/character-reference/sheriff.md');
  assert.equal(sheriff.color, '#abcdef');
  assert.deepEqual(index.navigation.find(({ id }) => id === 'character-reference').documents, ['role-sheriff']);
  assert.deepEqual(JSON.parse(await readFile(path.join(outputDir, 'roleColor.json'), 'utf8')), { Sheriff: '#abcdef' });
});

test('rejects missing role pages, missing category files, and unsupported images', async t => {
  const role = { key: 'Sheriff', id: 'role-sheriff', category: 'crewmate', source: 'Roles/Crewmate/Sheriff.cs' };
  const { root, outputDir } = await createFixture(t, {
    roles: [role],
    factions: [{ id: 'crewmate', title: { 'zh-CN': '船员', en: 'Crewmates' }, color: '#8cffff' }],
  });
  await addDocument(root, 'guides/home.md', guide('guide-home'), localizedBody);
  await assert.rejects(compileDocs({ sourceRoot: root, outputDir }), /roles missing documentation: role-sheriff/u);

  await writeJson(path.join(root, 'role-roster.json'), { modCommit: '1234567890abcdef', roles: [] });
  await writeFile(path.join(root, 'content', 'guides', '_category_.json'), '{');
  await assert.rejects(compileDocs({ sourceRoot: root, outputDir }), /invalid JSON/u);

  await writeJson(path.join(root, 'content', 'guides', '_category_.json'), category('guide', 'Guides', '指南', 1));
  await addDocument(root, 'guides/home.md', guide('guide-home'), '<!-- zh-CN -->\n![bad](/assets/icon.svg)\n<!-- en -->\n![bad](/assets/icon.svg)');
  await mkdir(path.join(root, 'assets'), { recursive: true });
  await writeFile(path.join(root, 'assets', 'icon.svg'), '<svg/>');
  await assert.rejects(compileDocs({ sourceRoot: root, outputDir }), /only PNG, JPEG, WebP, and GIF/u);
});
