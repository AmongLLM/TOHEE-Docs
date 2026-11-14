# TOHEE Documentation

Bilingual public documentation for Town of Host: Enhanced-Enhanced (TOHEE) and TOHEE Cloud. Pages are Markdown; `scripts/build-docs.mjs` compiles them into the JSON bundle used by the website.

## Build and check

Use Node.js 24 and npm:

```sh
npm ci
npm test
npm run build
```

The build writes `dist/index.json`, `dist/pages/<id>.<locale>.json`, `dist/roleColor.json`, and `dist/assets/`. The default asset URL version is `preview`. A deployment can provide its own release version:

```sh
node scripts/build-docs.mjs --source . --output dist --version 1.2.3
node scripts/build-docs.mjs --source . --output dist --version 1.2.3 --check
```

`--source` is the repository root. The compiler reads `content/`, `docs.config.json`, `role-roster.json`, and `roleColor.json` from that root. Its single-file implementation is also vendored by TOHEE Cloud; keep changes in sync with that copy.

## Standalone web preview

The repository also builds a standalone Angular documentation reader using the TOHEE Cloud frontend styling. It compiles the current Markdown content before serving or building:

```sh
npm run preview:dev
npm run preview:build
```

The documentation component, search helper, and global styles are shared copies of the Cloud frontend. Keep changes to those files synchronized between the two repositories.

`preview:dev` starts the local reader at `http://127.0.0.1:4200`. `preview:build` writes a production site to `dist/preview/`; the generated `index.html` is at `dist/preview/index.html`. Generated pages and the deployment manifest live in the ignored `preview/.generated/` directory.

To create a Vercel preview, import `AmongLLM/TOHEE-Docs` from GitHub and keep the project root at the repository root. The checked-in `vercel.json` selects the Other framework preset, runs `npm run preview:build`, and serves `dist/preview/`. Pull requests receive Vercel preview deployments; commits to the configured production branch (normally `main`) deploy the main site. This project serves documentation only and does not need Cloud backend services, credentials, or required environment variables.

`DOCS_SITE_URL` optionally changes where non-documentation links in generated articles lead. Set it to an HTTP(S) origin, without a path, query, or fragment. The default is `https://tohee.niko233.top`. The generated manifest points to the `main` source branch, so source links in pull request previews still open `main`.

## Content layout

```text
content/
  _category_.json
  guides/
    _category_.json
    installation/
      _category_.json
      guide-installation.md
  cloud/
    _category_.json
  settings/
    _category_.json
  roles/
    _category_.json
    crewmate/
      _category_.json
      role-example.md
docs.config.json
role-roster.json
roleColor.json
```

Every directory under `content/`, including `content/` itself, needs an `_category_.json` file with a globally unique stable ID, bilingual title, and numeric sort order:

```json
{
  "id": "installation",
  "title": { "zh-CN": "安装与更新", "en": "Installation & updates" },
  "order": 1
}
```

Each Markdown article keeps its stable lowercase ID in JSON frontmatter. Moving the file changes its navigation group but not its `/docs/<id>` URL. `kind` is `guide` or `role`; role `category` must match its roster faction. For guide pages, the compiler derives `category` from the containing navigation directory and ignores the legacy frontmatter category value. Each page has one Chinese and one English body separated by `<!-- zh-CN -->` and `<!-- en -->`.

The `navigation` tree and each node's article IDs are generated from the content directories. `docs.config.json` holds the role faction palette, homepage cards, and search scopes. Scope `groups` list navigation IDs; a consumer matches each listed node and its descendants. The ID `all` is reserved for the frontend's all-results option.

Role articles must match `role-roster.json` one-to-one. The roster pins the TOHEE source commit and implementation path; the compiler checks role IDs, categories, and source links. `roleColor.json` supplies role colors. Missing individual colors use the existing role fallback.

### Images

Place publishable images in the repository-root [`assets/`](assets/) folder. See the [upload and Markdown examples](assets/README.md). Markdown can use `/assets/example.webp` or a relative path that resolves from the article into `assets/`, such as `../../assets/example.webp`. The compiler accepts PNG, JPEG, WebP, and GIF files, copies referenced files into the bundle, and writes image URLs under `/docs/releases/<version>/assets/`. It rejects missing files, paths outside `assets/`, symbolic links, and other image formats. Existing HTTPS image links remain external.

## Contributing

Open a pull request for documentation changes. Add a category by adding its directory metadata and updating the relevant faction or search-scope entry when needed; no per-article navigation list is required.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the article template and review steps. See [SOURCE.md](SOURCE.md) for source revisions and attribution.
