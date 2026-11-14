import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { compileDocs } from './build-docs.mjs';

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const generatedRoot = path.join(repositoryRoot, 'preview', '.generated');
const docsRoot = path.join(generatedRoot, 'docs');
const version = process.env.DOCS_PREVIEW_VERSION?.trim() || process.env.VERCEL_GIT_COMMIT_SHA || 'preview';
const previewBasePath = process.env.DOCS_PREVIEW_BASE_PATH?.trim() || '/';
if (!/^\/(?:[A-Za-z0-9_-][A-Za-z0-9._-]*\/)*$/u.test(previewBasePath)) {
  throw new Error('DOCS_PREVIEW_BASE_PATH must be / or a root-relative path made of safe segments ending in /');
}
const siteUrlValue = process.env.DOCS_SITE_URL?.trim() || 'https://tohee.niko233.top';
let parsedSiteUrl;
try {
  parsedSiteUrl = new URL(siteUrlValue);
} catch {
  throw new Error('DOCS_SITE_URL must be an HTTP(S) origin without a path, query, or fragment');
}

if (!['http:', 'https:'].includes(parsedSiteUrl.protocol)
  || parsedSiteUrl.origin === 'null'
  || parsedSiteUrl.username
  || parsedSiteUrl.password
  || parsedSiteUrl.pathname !== '/'
  || parsedSiteUrl.search
  || parsedSiteUrl.hash) {
  throw new Error('DOCS_SITE_URL must be an HTTP(S) origin without a path, query, or fragment');
}

const siteOrigin = parsedSiteUrl.origin;

await rm(generatedRoot, { recursive: true, force: true });
const releaseDirectory = path.join(docsRoot, 'releases', version);
await compileDocs({
  sourceRoot: repositoryRoot,
  outputDir: releaseDirectory,
  version,
});

for (const fileName of await readdir(path.join(releaseDirectory, 'pages'))) {
  const pagePath = path.join(releaseDirectory, 'pages', fileName);
  const page = JSON.parse(await readFile(pagePath, 'utf8'));
  if (previewBasePath !== '/') {
    page.html = page.html.replace(/(<img\b[^>]*\bsrc=")\/docs\//gu, (_, prefix) => prefix + previewBasePath + 'docs/');
  }
  page.html = page.html.replace(/<a href="(\/(?!\/)[^"]*)"/gu, (anchor, href) => {
    const hrefPath = href.split(/[?#]/u, 1)[0];
    if (hrefPath === '/docs' || hrefPath.startsWith('/docs/')) {
      return previewBasePath === '/' ? anchor : '<a href="' + previewBasePath + '#' + href + '"';
    }
    return '<a href="' + siteOrigin + href + '"';
  });
  const documentId = fileName.replace(/\.(?:en|zh-CN)\.json$/u, '');
  const documentRoute = previewBasePath === '/' ? '/docs/' + documentId : previewBasePath + '#/docs/' + documentId;
  page.html = page.html.replace(/<a href="#([^"]*)"/gu, '<a href="' + documentRoute + '#$1"');
  await writeFile(pagePath, JSON.stringify(page, null, 2) + '\n', 'utf8');
}

await mkdir(docsRoot, { recursive: true });
await writeFile(path.join(docsRoot, 'manifest.json'), JSON.stringify({
  version,
  repositoryUrl: 'https://github.com/AmongLLM/TOHEE-Docs',
  branch: 'main',
}, null, 2) + '\n', 'utf8');

console.log('Generated preview docs version ' + version + ' with Cloud links to ' + siteOrigin);
