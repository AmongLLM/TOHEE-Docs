import { copyFile, mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
if (args.length !== 2) {
  throw new Error('Usage: node scripts/build-preview-directory.mjs <gh-pages-checkout-dir> <output-dir>');
}

const [checkoutDirectory, outputDirectory] = args.map((directory) => path.resolve(directory));
const repository = process.env.GITHUB_REPOSITORY?.trim() || 'AmongLLM/TOHEE-Docs';
if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/u.test(repository)) {
  throw new Error('GITHUB_REPOSITORY must use the owner/repository format');
}

const mainDirectory = path.join(checkoutDirectory, 'main');
const pullRequestsDirectory = path.join(checkoutDirectory, 'pr-preview');
const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const fontSourceDirectory = path.resolve(scriptDirectory, '..', 'preview', 'public', 'fonts');
const generatedAt = new Date().toISOString();
const isoTimestampPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-](?:0\d|1\d|2[0-3]):[0-5]\d)$/u;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/gu, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

function renderUtcTime(isoTimestamp) {
  const utcTimestamp = new Date(isoTimestamp).toISOString();
  return `<time datetime="${escapeHtml(utcTimestamp)}">${escapeHtml(utcTimestamp)} (UTC)</time>`;
}

async function isFile(filePath) {
  try {
    return (await stat(filePath)).isFile();
  } catch (error) {
    if (error.code === 'ENOENT') return false;
    throw error;
  }
}

async function readPreviewMetadata(directory) {
  let contents;
  try {
    contents = await readFile(path.join(directory, 'preview-info.json'), 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }

  let metadata;
  try {
    metadata = JSON.parse(contents);
  } catch {
    return null;
  }

  if (metadata === null
    || typeof metadata !== 'object'
    || typeof metadata.builtAt !== 'string'
    || !isoTimestampPattern.test(metadata.builtAt)
    || !Number.isFinite(Date.parse(metadata.builtAt))
    || typeof metadata.revision !== 'string'
    || !/^[0-9a-f]{40}$/iu.test(metadata.revision)) {
    return null;
  }

  return { builtAt: metadata.builtAt, revision: metadata.revision };
}

async function renderPreviewRow({ label, directory, href, sourceDirectoryPath }) {
  const metadata = await readPreviewMetadata(sourceDirectoryPath);
  const buildTime = metadata
    ? renderUtcTime(metadata.builtAt)
    : '<span class="unrecorded">未记录 / <span lang="en">Not recorded</span></span>';
  const revision = metadata
    ? `<a href="https://github.com/${escapeHtml(repository)}/commit/${escapeHtml(metadata.revision)}"><code>${escapeHtml(metadata.revision.slice(0, 7))}</code></a>`
    : '<span class="unrecorded">未记录 / <span lang="en">Not recorded</span></span>';

  return `          <tr>
            <th scope="row">
              <span class="preview-kind">${escapeHtml(label)}</span>
              <a class="preview-directory" href="${escapeHtml(href)}"><code>${escapeHtml(directory)}</code></a>
            </th>
            <td><span class="mobile-label">构建生成时间 / <span lang="en">Build generated</span></span>${buildTime}</td>
            <td><span class="mobile-label">源码提交 / <span lang="en">Source commit</span></span>${revision}</td>
          </tr>`;
}

async function renderDirectoryPage(previews) {
  const generatedTime = renderUtcTime(generatedAt);
  const rows = [];
  if (await isFile(path.join(mainDirectory, 'index.html'))) {
    rows.push(await renderPreviewRow({
      label: 'main',
      directory: 'main/',
      href: './main/#/docs',
      sourceDirectoryPath: mainDirectory,
    }));
  }

  for (const preview of previews) {
    rows.push(await renderPreviewRow({
      label: `PR #${preview.number}`,
      directory: `pr-preview/${preview.directoryName}/`,
      href: `./pr-preview/${preview.directoryName}/#/docs`,
      sourceDirectoryPath: path.join(pullRequestsDirectory, preview.directoryName),
    }));
  }

  const tableContents = rows.length > 0
    ? rows.join('\n')
    : `          <tr><td class="empty-state" colspan="3">当前没有可用的 main 或 PR 预览 / <span lang="en">No main or PR previews are currently available.</span></td></tr>`;

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="dark light">
  <title>TOHEE Docs 预览目录 / Preview Directory</title>
  <style>
    @font-face {
      font-family: "IBM Plex Sans";
      src: url("./fonts/ibm-plex-sans-latin.woff2") format("woff2");
      font-style: normal;
      font-weight: 100 700;
      font-display: swap;
    }

    @font-face {
      font-family: "IBM Plex Mono";
      src: url("./fonts/ibm-plex-mono-latin.woff2") format("woff2");
      font-style: normal;
      font-weight: 400 600;
      font-display: swap;
    }

    :root {
      color-scheme: dark light;
      --page: #19181f;
      --surface: #211f28;
      --surface-raised: #292631;
      --text: #f0edf5;
      --muted: #b7b1c1;
      --border: #403b4a;
      --accent: #c9b7f4;
      --focus: #f5d778;
    }

    @media (prefers-color-scheme: light) {
      :root {
        --page: #f7f6fa;
        --surface: #ffffff;
        --surface-raised: #efedf4;
        --text: #24212c;
        --muted: #5c5667;
        --border: #d7d2df;
        --accent: #5e438e;
        --focus: #825c00;
      }
    }

    * {
      box-sizing: border-box;
    }

    body {
      min-inline-size: 0;
      margin: 0;
      background: var(--page);
      color: var(--text);
      font-family: "IBM Plex Sans", "Noto Sans CJK TC", "Microsoft JhengHei", sans-serif;
      line-height: 1.6;
    }

    main {
      inline-size: min(100%, 76rem);
      margin-inline: auto;
      padding: clamp(2rem, 6vw, 5rem) clamp(1rem, 4vw, 3rem);
    }

    h1 {
      margin: 0;
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      font-weight: 600;
      letter-spacing: -0.035em;
      line-height: 1.2;
    }

    h1 span {
      display: block;
      margin-block-start: 0.35rem;
      color: var(--muted);
      font-size: 0.56em;
      font-weight: 400;
      letter-spacing: 0;
    }

    .directory-time {
      margin-block: 1.5rem 2.25rem;
      color: var(--muted);
    }

    .directory-time time {
      color: var(--text);
      font-family: "IBM Plex Mono", ui-monospace, monospace;
      font-size: 0.94em;
    }

    .table-scroll {
      max-inline-size: 100%;
      container-type: inline-size;
      overflow-x: auto;
      overflow-y: hidden;
      overscroll-behavior-inline: contain;
      border: 1px solid var(--border);
      border-radius: 0.4rem;
      background: var(--surface);
    }

    table {
      inline-size: 100%;
      min-inline-size: 46rem;
      border-collapse: collapse;
      text-align: start;
    }

    caption {
      padding: 0.8rem 1rem;
      background: var(--surface-raised);
      color: var(--text);
      font-size: 0.95rem;
      font-weight: 600;
      text-align: start;
    }

    th,
    td {
      padding: 0.85rem 1rem;
      border-block-start: 1px solid var(--border);
      text-align: start;
      vertical-align: top;
      white-space: nowrap;
    }

    thead th {
      background: var(--surface-raised);
      color: var(--muted);
      font-size: 0.82rem;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    tbody th {
      inline-size: 42%;
      font-weight: 500;
    }

    .preview-kind {
      display: block;
      margin-block-end: 0.15rem;
      color: var(--text);
    }

    .preview-directory,
    a:any-link {
      color: var(--accent);
      text-decoration-thickness: 0.08em;
      text-underline-offset: 0.2em;
    }

    a:any-link:hover {
      text-decoration-thickness: 0.13em;
    }

    code,
    td time {
      font-family: "IBM Plex Mono", ui-monospace, monospace;
      font-size: 0.92em;
    }

    .unrecorded,
    .empty-state {
      color: var(--muted);
    }

    .empty-state {
      padding-block: 1.5rem;
      text-align: center;
      white-space: normal;
    }

    .mobile-label {
      display: none;
    }

    @container (inline-size < 42rem) {
      table, tbody, tbody tr, tbody th, tbody td, caption {
        display: block;
      }

      table {
        min-inline-size: 0;
      }

      thead {
        display: none;
      }

      tbody th {
        inline-size: auto;
        padding-block-end: 0.5rem;
        white-space: normal;
        overflow-wrap: anywhere;
      }

      tbody td {
        border-block-start: 0;
        padding-block: 0.3rem;
        white-space: normal;
        overflow-wrap: anywhere;
      }

      tbody td:last-child {
        padding-block-end: 1rem;
      }

      .mobile-label {
        display: block;
        margin-block-end: 0.15rem;
        color: var(--muted);
        font-size: 0.75rem;
      }
    }

    :where(.table-scroll, a:any-link):focus-visible {
      outline: 3px solid var(--focus);
      outline-offset: 3px;
    }

    @media (forced-colors: active) {
      :where(.table-scroll, a:any-link):focus-visible {
        outline-color: Highlight;
      }
    }
  </style>
</head>
<body>
  <main>
    <header>
      <h1>TOHEE Docs <span lang="en">预览目录 / Preview Directory</span></h1>
      <p class="directory-time">目录生成时间 / <span lang="en">Directory generated</span>: ${generatedTime}</p>
      <p class="local-time-zone">显示时区 / <span lang="en">Display time zone</span>: <code id="local-time-zone">UTC</code></p>
    </header>

    <div class="table-scroll" tabindex="0" role="region" aria-labelledby="preview-table-caption">
      <table>
        <caption id="preview-table-caption">构建预览 / <span lang="en">Build previews</span></caption>
        <thead>
          <tr>
            <th scope="col">预览目录 / <span lang="en">Preview directory</span></th>
            <th scope="col">构建生成时间 / <span lang="en">Build generated</span></th>
            <th scope="col">源码提交 / <span lang="en">Source commit</span></th>
          </tr>
        </thead>
        <tbody>
${tableContents}
        </tbody>
      </table>
    </div>
  </main>
  <script>
    const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localTimeFormatter = new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23',
      timeZoneName: 'shortOffset',
    });

    for (const element of document.querySelectorAll('time[datetime]')) {
      element.textContent = localTimeFormatter.format(new Date(element.dateTime));
    }
    document.getElementById('local-time-zone').textContent = localTimeZone;
  </script>
</body>
</html>
`;
}

let pullRequestEntries = [];
try {
  pullRequestEntries = await readdir(pullRequestsDirectory, { withFileTypes: true });
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

const previews = [];
for (const entry of pullRequestEntries) {
  const match = /^pr-([1-9]\d*)$/u.exec(entry.name);
  if (!entry.isDirectory() || !match) continue;

  const previewDirectory = path.join(pullRequestsDirectory, entry.name);
  if (!await isFile(path.join(previewDirectory, 'index.html'))) continue;
  previews.push({ number: Number(match[1]), directoryName: entry.name });
}
previews.sort((left, right) => right.number - left.number);

await mkdir(outputDirectory, { recursive: true });
await mkdir(path.join(outputDirectory, 'fonts'), { recursive: true });
await Promise.all([
  copyFile(path.join(fontSourceDirectory, 'ibm-plex-sans-latin.woff2'), path.join(outputDirectory, 'fonts', 'ibm-plex-sans-latin.woff2')),
  copyFile(path.join(fontSourceDirectory, 'ibm-plex-mono-latin.woff2'), path.join(outputDirectory, 'fonts', 'ibm-plex-mono-latin.woff2')),
  copyFile(path.join(fontSourceDirectory, 'OFL-IBM-Plex-Sans.txt'), path.join(outputDirectory, 'fonts', 'OFL-IBM-Plex-Sans.txt')),
  copyFile(path.join(fontSourceDirectory, 'OFL-IBM-Plex-Mono.txt'), path.join(outputDirectory, 'fonts', 'OFL-IBM-Plex-Mono.txt')),
]);
await writeFile(path.join(outputDirectory, 'index.html'), await renderDirectoryPage(previews), 'utf8');

console.log(`Generated preview directory with ${previews.length + (await isFile(path.join(mainDirectory, 'index.html')) ? 1 : 0)} previews.`);
