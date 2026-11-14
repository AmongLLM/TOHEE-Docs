import { copyFile, lstat, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Marked } from 'marked';

const locales = ['zh-CN', 'en'];
const imageExtensions = new Set(['.gif', '.jpeg', '.jpg', '.png', '.webp']);
const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const defaultSourceRoot = path.resolve(scriptDirectory, '..');
const defaultOutputDir = path.resolve(defaultSourceRoot, 'dist');
const contentDirectoryName = 'content';
const categoryFileName = '_category_.json';

function fail(file, message) {
  throw new Error(file + ': ' + message);
}

function isRecord(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function validateId(value, file, label = 'id') {
  if (typeof value !== 'string' || value.trim() === '' || value !== value.trim()) fail(file, label + ' must be a non-empty string without surrounding whitespace');
  if (value === '.' || value === '..' || /[\\/:*?"<>|\u0000-\u001f]/u.test(value)) fail(file, label + ' must be a safe single path segment');
  return value;
}

function validateArticleId(value, file, label = 'id') {
  validateId(value, file, label);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/u.test(value)) fail(file, label + ' must use lowercase letters, digits, and hyphens');
  return value;
}

function validateCategoryId(value, file, label = 'id') {
  validateId(value, file, label);
  if (!/^[a-z\d][a-z\d._-]*$/iu.test(value)) fail(file, label + ' must use letters, digits, dots, underscores, or hyphens');
  return value;
}

function validateLocalized(value, file, label) {
  if (!isRecord(value)) fail(file, label + ' must contain zh-CN and en strings');
  const result = {};
  for (const locale of locales) {
    if (typeof value[locale] !== 'string' || value[locale].trim() === '') fail(file, label + '.' + locale + ' must be a non-empty string');
    result[locale] = value[locale];
  }
  return result;
}

function validateDocument(metadata, file) {
  if (!isRecord(metadata)) fail(file, 'frontmatter must be a JSON object');
  const { id, kind, category, title, summary, source, order = 0 } = metadata;
  validateArticleId(id, file);
  if (kind !== 'role' && kind !== 'guide') fail(file, 'kind must be one of: role, guide');
  if (kind === 'role') validateCategoryId(category, file, 'category');
  if (typeof source !== 'string' || source.trim() === '') fail(file, 'source must be a non-empty string');
  if (typeof order !== 'number' || !Number.isFinite(order)) fail(file, 'order must be a finite number');

  return {
    id,
    kind,
    ...(kind === 'role' ? { category } : {}),
    title: validateLocalized(title, file, 'title'),
    summary: validateLocalized(summary, file, 'summary'),
    source,
    order,
  };
}

function parseDocument(raw, file) {
  const source = raw.replace(/^\uFEFF/u, '');
  const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/u.exec(source);
  if (!frontmatter) fail(file, 'expected JSON frontmatter between --- lines');

  let metadata;
  try {
    metadata = JSON.parse(frontmatter[1]);
  } catch (error) {
    fail(file, 'invalid JSON frontmatter: ' + error.message);
  }
  metadata = validateDocument(metadata, file);

  const body = source.slice(frontmatter[0].length);
  const zhMarker = '<!-- zh-CN -->';
  const enMarker = '<!-- en -->';
  if (body.split(zhMarker).length !== 2 || body.split(enMarker).length !== 2) {
    fail(file, 'body must contain each exact locale marker once: <!-- zh-CN --> and <!-- en -->');
  }
  const zhPosition = body.indexOf(zhMarker);
  const enPosition = body.indexOf(enMarker);
  if (zhPosition > enPosition) fail(file, '<!-- zh-CN --> must appear before <!-- en -->');

  const zhBody = body.slice(zhPosition + zhMarker.length, enPosition).trim();
  const enBody = body.slice(enPosition + enMarker.length).trim();
  if (!zhBody) fail(file, 'Chinese body must not be empty');
  if (!enBody) fail(file, 'English body must not be empty');

  return { ...metadata, sourcePath: file, body: { 'zh-CN': zhBody, en: enBody } };
}

async function assertDirectory(directory, label) {
  let stats;
  try {
    stats = await lstat(directory);
  } catch (error) {
    if (error.code === 'ENOENT') fail(label, 'directory does not exist');
    throw error;
  }
  if (stats.isSymbolicLink()) fail(label, 'symbolic links are not accepted');
  if (!stats.isDirectory()) fail(label, 'expected a directory');
}

async function readJsonFile(file, label) {
  let stats;
  try {
    stats = await lstat(file);
  } catch (error) {
    if (error.code === 'ENOENT') fail(label, 'file does not exist');
    throw error;
  }
  if (stats.isSymbolicLink()) fail(label, 'symbolic links are not accepted');
  if (!stats.isFile()) fail(label, 'expected a regular file');
  try {
    return JSON.parse(await readFile(file, 'utf8'));
  } catch (error) {
    if (error instanceof SyntaxError) fail(label, 'invalid JSON: ' + error.message);
    throw error;
  }
}

function compareOrdered(left, right) {
  return left.order - right.order || (left.id < right.id ? -1 : left.id > right.id ? 1 : 0);
}

async function readCategoryTree(directory, sourceRoot, seenIds) {
  const relativeDirectory = path.relative(sourceRoot, directory).split(path.sep).join('/');
  await assertDirectory(directory, relativeDirectory || contentDirectoryName);
  const configPath = path.join(directory, categoryFileName);
  const metadata = await readJsonFile(configPath, relativeDirectory + '/' + categoryFileName);
  if (!isRecord(metadata)) fail(relativeDirectory + '/' + categoryFileName, 'category frontmatter must be a JSON object');
  const id = validateCategoryId(metadata.id, relativeDirectory + '/' + categoryFileName);
  if (seenIds.has(id)) fail(relativeDirectory + '/' + categoryFileName, 'duplicate category id "' + id + '"');
  seenIds.add(id);
  const node = {
    id,
    title: validateLocalized(metadata.title, relativeDirectory + '/' + categoryFileName, 'title'),
    order: metadata.order,
    children: [],
    documents: [],
  };
  if (typeof node.order !== 'number' || !Number.isFinite(node.order)) fail(relativeDirectory + '/' + categoryFileName, 'order must be a finite number');

  const entries = await readdir(directory, { withFileTypes: true });
  entries.sort((left, right) => left.name < right.name ? -1 : left.name > right.name ? 1 : 0);
  const files = [];
  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) fail(path.relative(sourceRoot, entryPath).split(path.sep).join('/'), 'symbolic links are not accepted');
    if (entry.name === categoryFileName) continue;
    if (entry.isDirectory()) {
      const child = await readCategoryTree(entryPath, sourceRoot, seenIds);
      node.children.push(child.node);
      files.push(...child.files);
    } else if (entry.isFile() && /\.md$/iu.test(entry.name)) {
      files.push({
        absolutePath: entryPath,
        sourcePath: path.relative(sourceRoot, entryPath).split(path.sep).join('/'),
        navigationId: id,
      });
    } else {
      fail(path.relative(sourceRoot, entryPath).split(path.sep).join('/'), 'content directories may contain only Markdown files, category metadata, and directories');
    }
  }
  node.children.sort(compareOrdered);
  return { node, files };
}

function serializeNavigation(node) {
  return {
    id: node.id,
    title: node.title,
    children: node.children.map(serializeNavigation),
    documents: node.documents,
  };
}

function validateRoster(roster, file) {
  if (!isRecord(roster) || typeof roster.modCommit !== 'string' || roster.modCommit.trim() === '' || !Array.isArray(roster.roles)) {
    fail(file, 'role roster must contain modCommit and a roles array');
  }
  const roles = new Map();
  const ids = new Set();
  const keys = new Set();
  for (const role of roster.roles) {
    if (!isRecord(role)) fail(file, 'each role roster entry must be an object');
    for (const key of ['key', 'id', 'category', 'source']) {
      if (typeof role[key] !== 'string' || role[key].trim() === '') fail(file, 'each role roster entry needs a non-empty ' + key);
    }
    validateArticleId(role.id, file, 'role id');
    validateCategoryId(role.category, file, 'role category');
    if (ids.has(role.id)) fail(file, 'duplicate role id "' + role.id + '"');
    ids.add(role.id);
    if (keys.has(role.key)) fail(file, 'duplicate role key "' + role.key + '"');
    keys.add(role.key);
    roles.set(role.id, role);
  }
  return { modCommit: roster.modCommit, roles };
}

function validateConfig(config, file, categoryNodes) {
  if (!isRecord(config)) fail(file, 'configuration must be a JSON object');
  if (!Array.isArray(config.factions) || !Array.isArray(config.startCards) || !Array.isArray(config.searchScopes)) {
    fail(file, 'configuration must contain factions, startCards, and searchScopes arrays');
  }

  const factions = [];
  const factionIds = new Set();
  for (const faction of config.factions) {
    if (!isRecord(faction)) fail(file, 'each faction must be an object');
    const id = validateCategoryId(faction.id, file, 'faction id');
    if (factionIds.has(id)) fail(file, 'duplicate faction id "' + id + '"');
    factionIds.add(id);
    if (typeof faction.color !== 'string' || !/^#[\da-f]{6}$/iu.test(faction.color)) fail(file, 'faction "' + id + '" color must be #RRGGBB');
    factions.push({ id, title: validateLocalized(faction.title, file, 'faction title'), color: faction.color });
  }

  const startCards = [];
  const cardIds = new Set();
  for (const card of config.startCards) {
    if (!isRecord(card)) fail(file, 'each start card must be an object');
    const id = validateArticleId(card.id, file, 'start card id');
    if (cardIds.has(id)) fail(file, 'duplicate start card id "' + id + '"');
    cardIds.add(id);
    startCards.push({ id, title: validateLocalized(card.title, file, 'start card title'), summary: validateLocalized(card.summary, file, 'start card summary') });
  }

  const searchScopes = [];
  const scopeIds = new Set();
  for (const scope of config.searchScopes) {
    if (!isRecord(scope)) fail(file, 'each search scope must be an object');
    const id = validateCategoryId(scope.id, file, 'search scope id');
    if (id === 'all') fail(file, 'search scope id "all" is reserved for the frontend');
    if (scopeIds.has(id)) fail(file, 'duplicate search scope id "' + id + '"');
    scopeIds.add(id);
    if (!Array.isArray(scope.groups) || scope.groups.length === 0) fail(file, 'search scope "' + id + '" must contain navigation group IDs');
    const groups = [];
    const groupIds = new Set();
    for (const group of scope.groups) {
      const groupId = validateCategoryId(group, file, 'search group id');
      if (!categoryNodes.has(groupId)) fail(file, 'search scope "' + id + '" references unknown navigation group "' + groupId + '"');
      if (groupIds.has(groupId)) fail(file, 'search scope "' + id + '" repeats navigation group "' + groupId + '"');
      groupIds.add(groupId);
      groups.push(groupId);
    }
    searchScopes.push({ id, title: validateLocalized(scope.title, file, 'search scope title'), groups });
  }
  return { factions, startCards, searchScopes };
}

function isSafeUrl(value, image = false) {
  if (typeof value !== 'string') return false;
  const href = value.trim();
  if (!href || /[\\\u0000-\u001f\u007f]/u.test(href) || href.startsWith('//')) return false;

  const compact = href.replace(/[\u0000-\u0020\u007f]/gu, '');
  const scheme = /^([a-z][a-z\d+.-]*):/iu.exec(compact)?.[1]?.toLowerCase();
  if (scheme) return image ? scheme === 'http' || scheme === 'https' : ['http', 'https', 'mailto'].includes(scheme);
  return true;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/gu, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
}

function plainTextFromTokens(tokens) {
  return tokens.map(token => {
    switch (token.type) {
      case 'code':
      case 'codespan':
      case 'escape':
        return token.text;
      case 'html':
        return token.text.replace(/<[^>]*>/gu, ' ');
      case 'image':
        return token.text;
      case 'link':
        return plainTextFromTokens(token.tokens);
      case 'table':
        return [...token.header, ...token.rows.flat()].map(cell => plainTextFromTokens(cell.tokens)).join(' ');
      case 'list':
        return token.items.map(item => plainTextFromTokens(item.tokens)).join(' ');
      case 'text':
        return token.tokens ? plainTextFromTokens(token.tokens) : token.text;
      case 'br':
      case 'hr':
      case 'space':
        return ' ';
      default:
        return token.tokens ? plainTextFromTokens(token.tokens) : '';
    }
  }).join(' ');
}

function plainText(markdown) {
  const tokens = new Marked({ gfm: true }).lexer(markdown);
  return plainTextFromTokens(tokens).replace(/\s+/gu, ' ').trim();
}

function slugBase(text) {
  const slug = text.normalize('NFKC').toLowerCase()
    .replace(/[^\p{L}\p{N}\p{M}_-]+/gu, '-')
    .replace(/-+/gu, '-')
    .replace(/^-|-$/gu, '');
  return slug || 'section';
}

function renderPage(markdown, imageUrls) {
  const headings = [];
  const usedSlugs = new Set();
  const parser = new Marked({ gfm: true });
  const renderer = new parser.Renderer();
  const renderInline = tokens => parser.Parser.parseInline(tokens, { renderer });

  renderer.html = ({ text }) => escapeHtml(text);
  renderer.heading = ({ tokens, depth }) => {
    const text = plainTextFromTokens(tokens).replace(/\s+/gu, ' ').trim();
    const base = slugBase(text);
    let id = base;
    let suffix = 1;
    while (usedSlugs.has(id)) id = base + '-' + suffix++;
    usedSlugs.add(id);
    headings.push({ id, text, level: depth });
    return '<h' + depth + ' id="' + escapeHtml(id) + '">' + renderInline(tokens) + '</h' + depth + '>\n';
  };
  renderer.link = ({ href, title, tokens }) => {
    const text = renderInline(tokens);
    if (!isSafeUrl(href)) return text;
    const titleAttribute = title ? ' title="' + escapeHtml(title) + '"' : '';
    return '<a href="' + escapeHtml(href) + '"' + titleAttribute + ' rel="noopener noreferrer">' + text + '</a>';
  };
  renderer.image = ({ href, title, text }) => {
    if (!isSafeUrl(href, true)) return escapeHtml(text);
    const src = imageUrls.get(href) ?? href;
    const titleAttribute = title ? ' title="' + escapeHtml(title) + '"' : '';
    return '<img src="' + escapeHtml(src) + '" alt="' + escapeHtml(text) + '"' + titleAttribute + '>';
  };

  parser.use({ renderer });
  const html = parser.parse(markdown);
  return { html: String(html), headings };
}

function validateDocsLinks(markdown, document, ids, locale) {
  const tokens = new Marked({ gfm: true }).lexer(markdown);
  new Marked({ gfm: true }).walkTokens(tokens, token => {
    if (token.type !== 'link') return;
    const href = token.href;
    if (!/^[a-z][a-z\d+.-]*:/iu.test(href) && /\.md(?:[?#]|$)/iu.test(href)) {
      fail(document.sourcePath, locale + ' local Markdown links must use /docs/:id: ' + href);
    }
    if (href === '/docs' || href.startsWith('/docs?') || href.startsWith('/docs#')) return;
    if (!href.startsWith('/docs/')) return;

    const match = /^\/docs\/([^/?#]+)(?:[?#].*)?$/u.exec(href);
    if (!match) fail(document.sourcePath, locale + ' local docs link must use /docs/:id: ' + href);
    let targetId;
    try {
      targetId = decodeURIComponent(match[1]);
    } catch {
      fail(document.sourcePath, locale + ' local docs link has invalid URL encoding: ' + href);
    }
    if (!ids.has(targetId)) fail(document.sourcePath, locale + ' local docs link points to unknown document "' + targetId + '": ' + href);
  });
}

function isWithin(directory, candidate) {
  const relative = path.relative(directory, candidate);
  return relative !== '' && relative !== '..' && !relative.startsWith('..' + path.sep) && !path.isAbsolute(relative);
}

function encodeAssetPath(relativePath) {
  return relativePath.split('/').map(segment => encodeURIComponent(segment)).join('/');
}

async function readLocalImage(href, sourcePath, absoluteDocumentPath, sourceRoot, assetContents, version) {
  const suffixIndex = href.search(/[?#]/u);
  const imagePath = suffixIndex < 0 ? href : href.slice(0, suffixIndex);
  const suffix = suffixIndex < 0 ? '' : href.slice(suffixIndex);
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(imagePath);
  } catch {
    fail(sourcePath, 'local image URL has invalid encoding: ' + href);
  }
  if (/[\\\u0000-\u001f\u007f]/u.test(decodedPath)) fail(sourcePath, 'local image URL contains an invalid path: ' + href);

  const assetRoot = path.resolve(sourceRoot, 'assets');
  let assetPath;
  if (decodedPath.startsWith('/assets/')) {
    assetPath = path.resolve(assetRoot, decodedPath.slice('/assets/'.length));
  } else if (decodedPath.startsWith('/')) {
    fail(sourcePath, 'local images must use /assets/... or resolve inside assets/: ' + href);
  } else {
    assetPath = path.resolve(path.dirname(absoluteDocumentPath), decodedPath);
  }
  if (!isWithin(assetRoot, assetPath)) fail(sourcePath, 'local image must resolve inside assets/: ' + href);
  await assertDirectory(assetRoot, 'assets');

  const relativeNativePath = path.relative(assetRoot, assetPath);
  const segments = relativeNativePath.split(path.sep);
  let current = assetRoot;
  let stats;
  for (let index = 0; index < segments.length; index++) {
    current = path.join(current, segments[index]);
    try {
      stats = await lstat(current);
    } catch (error) {
      if (error.code === 'ENOENT') fail(sourcePath, 'local image does not exist: ' + href);
      throw error;
    }
    if (stats.isSymbolicLink()) fail(sourcePath, 'symbolic links are not accepted in assets/');
    if (index < segments.length - 1 && !stats.isDirectory()) fail(sourcePath, 'local image path crosses a non-directory: ' + href);
  }
  if (!stats?.isFile()) fail(sourcePath, 'local image must be a regular file: ' + href);
  const extension = path.extname(assetPath).toLowerCase();
  if (!imageExtensions.has(extension)) fail(sourcePath, 'only PNG, JPEG, WebP, and GIF assets can be published: ' + href);

  const relativeAssetPath = relativeNativePath.split(path.sep).join('/');
  if (!assetContents.has(relativeAssetPath)) assetContents.set(relativeAssetPath, await readFile(assetPath));
  return '/docs/releases/' + version + '/assets/' + encodeAssetPath(relativeAssetPath) + suffix;
}

async function imageUrlsFor(markdown, sourcePath, sourceRoot, assetContents, version) {
  const hrefs = [];
  const tokens = new Marked({ gfm: true }).lexer(markdown);
  new Marked({ gfm: true }).walkTokens(tokens, token => {
    if (token.type === 'image') hrefs.push(token.href);
  });
  const imageUrls = new Map();
  const absoluteDocumentPath = path.resolve(sourceRoot, sourcePath);
  for (const href of new Set(hrefs)) {
    if (!isSafeUrl(href, true)) continue;
    const compact = href.replace(/[\u0000-\u0020\u007f]/gu, '');
    const scheme = /^([a-z][a-z\d+.-]*):/iu.exec(compact)?.[1]?.toLowerCase();
    if (scheme) continue;
    imageUrls.set(href, await readLocalImage(href, sourcePath, absoluteDocumentPath, sourceRoot, assetContents, version));
  }
  return imageUrls;
}

function validateVersion(version) {
  if (typeof version !== 'string' || !/^[a-z\d][a-z\d._-]{0,63}$/iu.test(version) || version === '.' || version === '..') {
    throw new Error('version must be a safe path segment using letters, digits, dots, underscores, or hyphens');
  }
  return version;
}

async function listFiles(directory) {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
  const files = [];
  for (const entry of entries.sort((left, right) => left.name < right.name ? -1 : left.name > right.name ? 1 : 0)) {
    const file = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) fail(file, 'symbolic links are not accepted');
    if (entry.isDirectory()) files.push(...await listFiles(file));
    else if (entry.isFile()) files.push(file);
    else fail(file, 'expected a regular file or directory');
  }
  return files;
}

async function actualOutputFiles(directory) {
  try {
    await assertDirectory(directory, directory);
  } catch (error) {
    if (error.message.endsWith(': directory does not exist')) return [];
    throw error;
  }
  return listFiles(directory);
}

export async function compileDocs({
  sourceRoot = defaultSourceRoot,
  outputDir = defaultOutputDir,
  check = false,
  version = 'preview',
} = {}) {
  const source = path.resolve(sourceRoot);
  const output = path.resolve(outputDir);
  const releaseVersion = validateVersion(version);
  await assertDirectory(source, source);
  const contentRoot = path.resolve(source, contentDirectoryName);
  const contentTree = await readCategoryTree(contentRoot, source, new Set());
  if (contentTree.files.some(file => file.navigationId === contentTree.node.id)) {
    fail(contentDirectoryName, 'articles must be inside a category directory beneath content/');
  }
  const categoryNodes = new Map();
  const collectNodes = node => {
    categoryNodes.set(node.id, node);
    for (const child of node.children) collectNodes(child);
  };
  collectNodes(contentTree.node);
  const configPath = path.join(source, 'docs.config.json');
  const config = validateConfig(await readJsonFile(configPath, configPath), configPath, categoryNodes);
  const rosterPath = path.join(source, 'role-roster.json');
  const { modCommit, roles: roster } = validateRoster(await readJsonFile(rosterPath, rosterPath), rosterPath);
  const roleColorsPath = path.join(source, 'roleColor.json');
  const roleColors = await readJsonFile(roleColorsPath, roleColorsPath);
  if (!isRecord(roleColors)) fail(roleColorsPath, 'role colors must be a JSON object');
  for (const [role, color] of Object.entries(roleColors)) {
    if (typeof color !== 'string' || !/^#[\da-f]{6}$/iu.test(color)) fail(roleColorsPath, 'invalid role color for ' + role + ': ' + color);
  }

  for (const role of roster.values()) {
    if (!config.factions.some(faction => faction.id === role.category)) fail(rosterPath, 'role category has no faction configuration: ' + role.category);
  }

  const rawDocuments = [];
  const documentIds = new Set();
  for (const file of contentTree.files) {
    const document = parseDocument(await readFile(file.absolutePath, 'utf8'), file.sourcePath);
    if (documentIds.has(document.id)) fail(file.sourcePath, 'duplicate document id "' + document.id + '"');
    documentIds.add(document.id);
    if (document.kind === 'role') {
      const role = roster.get(document.id);
      if (!role) fail(file.sourcePath, 'role is not in the TOHEE source roster: ' + document.id);
      if (document.category !== role.category) fail(file.sourcePath, 'role category must be ' + role.category);
      const roleSource = 'https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/' + modCommit + '/' + role.source;
      if (document.source !== roleSource) fail(file.sourcePath, 'role source must match the roster revision: ' + roleSource);
      document.color = roleColors[role.key] ?? (role.category === 'impostor' ? '#ff1919' : '#ffffff');
    } else {
      document.category = file.navigationId;
    }
    document.navigationId = file.navigationId;
    rawDocuments.push(document);
  }

  const documentedRoles = new Set(rawDocuments.filter(document => document.kind === 'role').map(document => document.id));
  const missingRoles = [...roster.keys()].filter(id => !documentedRoles.has(id));
  if (missingRoles.length) fail(rosterPath, 'TOHEE roles missing documentation: ' + missingRoles.join(', '));
  const docsById = new Map(rawDocuments.map(document => [document.id, document]));
  for (const card of config.startCards) {
    const document = docsById.get(card.id);
    if (!document || document.kind !== 'guide') fail(configPath, 'start card must reference an existing guide: ' + card.id);
  }

  for (const document of rawDocuments) {
    for (const locale of locales) validateDocsLinks(document.body[locale], document, documentIds, locale);
    categoryNodes.get(document.navigationId).documents.push(document.id);
  }
  rawDocuments.sort(compareOrdered);
  for (const node of categoryNodes.values()) {
    node.documents.sort((left, right) => compareOrdered(docsById.get(left), docsById.get(right)));
  }

  const assetContents = new Map();
  const expected = new Map();
  const documents = [];
  for (const document of rawDocuments) {
    documents.push({
      id: document.id,
      kind: document.kind,
      category: document.category,
      title: document.title,
      summary: document.summary,
      source: document.source,
      sourcePath: document.sourcePath,
      order: document.order,
      ...(document.color ? { color: document.color } : {}),
      search: Object.fromEntries(locales.map(locale => [
        locale,
        [document.title[locale], document.summary[locale], plainText(document.body[locale])].join(' ').replace(/\s+/gu, ' ').trim(),
      ])),
    });
    for (const locale of locales) {
      const imageUrls = await imageUrlsFor(document.body[locale], document.sourcePath, source, assetContents, releaseVersion);
      const page = renderPage(document.body[locale], imageUrls);
      expected.set(path.join('pages', document.id + '.' + locale + '.json'), JSON.stringify(page, null, 2) + '\n');
    }
  }

  const index = {
    modCommit,
    documents,
    navigation: contentTree.node.children.map(serializeNavigation),
    factions: config.factions,
    startCards: config.startCards,
    searchScopes: config.searchScopes,
  };
  expected.set('index.json', JSON.stringify(index, null, 2) + '\n');
  expected.set('roleColor.json', JSON.stringify(roleColors, null, 2) + '\n');

  const outputPages = path.join(output, 'pages');
  const outputAssets = path.join(output, 'assets');
  if (isWithin(contentRoot, output) || isWithin(path.resolve(source, 'assets'), output)) {
    throw new Error('outputDir must not be inside content/ or assets/');
  }
  if (check) {
    for (const [relativeFile, expectedContents] of expected) {
      let actualContents;
      try {
        actualContents = await readFile(path.join(output, relativeFile), 'utf8');
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
      if (actualContents !== expectedContents) fail(relativeFile, 'generated docs are missing or stale. Run npm run docs:build.');
    }
    const expectedPageFiles = new Set([...expected.keys()].filter(file => file.startsWith('pages' + path.sep)).map(file => path.resolve(output, file)));
    for (const file of await actualOutputFiles(outputPages)) {
      if (!expectedPageFiles.has(path.resolve(file))) fail(path.relative(output, file), 'stale generated file. Run npm run docs:build.');
    }
    const expectedAssetFiles = new Set([...assetContents.keys()].map(file => path.resolve(outputAssets, file)));
    for (const file of await actualOutputFiles(outputAssets)) {
      if (!expectedAssetFiles.has(path.resolve(file))) fail(path.relative(output, file), 'stale generated asset. Run npm run docs:build.');
      const relative = path.relative(outputAssets, file).split(path.sep).join('/');
      const actual = await readFile(file);
      if (!actual.equals(assetContents.get(relative))) fail(path.relative(output, file), 'generated asset is stale. Run npm run docs:build.');
    }
    if ((await actualOutputFiles(outputAssets)).length !== expectedAssetFiles.size) fail('assets', 'generated assets are missing or stale. Run npm run docs:build.');
  } else {
    await mkdir(outputPages, { recursive: true });
    await mkdir(outputAssets, { recursive: true });
    const expectedPageFiles = new Set([...expected.keys()].filter(file => file.startsWith('pages' + path.sep)).map(file => path.resolve(output, file)));
    for (const file of await actualOutputFiles(outputPages)) {
      if (!expectedPageFiles.has(path.resolve(file))) await rm(file);
    }
    const expectedAssetFiles = new Set(assetContents.keys());
    for (const file of await actualOutputFiles(outputAssets)) {
      const relative = path.relative(outputAssets, file).split(path.sep).join('/');
      if (!expectedAssetFiles.has(relative)) await rm(file);
    }
    for (const [relativeFile, contents] of expected) {
      const target = path.join(output, relativeFile);
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, contents, 'utf8');
    }
    for (const relativeFile of assetContents.keys()) {
      const target = path.join(outputAssets, relativeFile);
      await mkdir(path.dirname(target), { recursive: true });
      await copyFile(path.resolve(source, 'assets', relativeFile), target);
    }
  }

  return index;
}

function parseArguments(args) {
  const options = { sourceRoot: defaultSourceRoot, outputDir: defaultOutputDir, check: false, version: 'preview' };
  const seen = new Set();
  for (let index = 0; index < args.length; index++) {
    const argument = args[index];
    if (argument === '--check') {
      if (seen.has(argument)) throw new Error('duplicate argument: ' + argument);
      seen.add(argument);
      options.check = true;
      continue;
    }
    if (!['--source', '--output', '--version'].includes(argument)) throw new Error('unknown argument: ' + argument);
    if (seen.has(argument)) throw new Error('duplicate argument: ' + argument);
    seen.add(argument);
    const value = args[++index];
    if (!value || value.startsWith('--')) throw new Error(argument + ' requires a value');
    if (argument === '--source') options.sourceRoot = value;
    if (argument === '--output') options.outputDir = value;
    if (argument === '--version') options.version = value;
  }
  return options;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const options = parseArguments(process.argv.slice(2));
    const result = await compileDocs(options);
    console.log((options.check ? 'Checked ' : 'Built ') + result.documents.length + ' documentation pages.');
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
