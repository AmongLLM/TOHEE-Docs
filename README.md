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

For a GitHub Pages preview published below a repository path, set `DOCS_PREVIEW_BASE_PATH` to the site's absolute base path with a trailing slash, pass the same value to Angular's `--base-href`, and publish `dist/preview/` contents under that path. For example:

```sh
export DOCS_PREVIEW_BASE_PATH=/TOHEE-Docs/pr-preview/pr-42/
export DOCS_PREVIEW_VERSION="$(git rev-parse HEAD)"
npm run preview:build -- --base-href "$DOCS_PREVIEW_BASE_PATH"
```

The standalone reader uses hash URLs only when the base path is not `/`, so GitHub Pages can open and refresh article links without an SPA rewrite. `DOCS_PREVIEW_VERSION` selects the generated docs version and takes precedence over `VERCEL_GIT_COMMIT_SHA`.

## Build directory and previews on GitHub Pages

The [Pages root](https://amongllm.github.io/TOHEE-Docs/) is a build directory. It shows when the directory was generated, all deployed preview directories, and each preview's build time and source revision. Timestamps retain their ISO values and are converted to the visitor's local time using the browser's time zone, which is displayed on the page. Without JavaScript, the original UTC timestamp remains readable.

[`pages-main.yml`](.github/workflows/pages-main.yml) builds the latest trusted `main` on every push to `main`, or when manually dispatched on `main`. It publishes the documentation reader at [`main/`](https://amongllm.github.io/TOHEE-Docs/main/#/docs). Only that directory is cleaned when main is rebuilt; PR previews are preserved. The preview's recorded revision is the commit actually checked out, including when an earlier run waits in the shared publishing queue.

[`pr-preview-build.yml`](.github/workflows/pr-preview-build.yml) tests and builds the full reader without deployment secrets. [`pr-preview-deploy.yml`](.github/workflows/pr-preview-deploy.yml) runs from the default branch, checks the triggering run and PR through GitHub's API, and publishes only the static artifact. It does not run code from the PR artifact. Fork PRs use the same two-stage flow; GitHub may require a maintainer to approve a new contributor's build first.

The deployment stage rejects any PR that adds, modifies, removes, or renames a path into or out of `.github/workflows/`. It checks both current and previous filenames, requires a complete paginated file list, and checks that the PR did not change during verification. Artifacts must match the build's head SHA and source repository/branch; stale builds are skipped. These checks also apply to preview removal. If the fork repository has already been deleted, verification fails and an existing preview may need manual removal. A PR introducing these workflows cannot preview itself: merge the trusted workflows first, then use a documentation-only PR.

Before enabling previews:

1. Create an independent `gh-pages` branch with an `index.html` and an empty `.nojekyll` file. This branch stores published files, not the application source.
2. In [Settings → Pages](https://github.com/AmongLLM/TOHEE-Docs/settings/pages), choose **Deploy from a branch**, **gh-pages**, **/(root)**.
3. Create a [fine-grained personal access token](https://github.com/settings/personal-access-tokens/new) with resource owner **AmongLLM**, repository access limited to **TOHEE-Docs**, **Contents: Read and write**, and **Pages: Read-only**. Metadata read access is included automatically. Complete organization approval if required. The Pages permission is used to wait for the branch deployment; no Workflows permission is needed.
4. Save it as the repository Actions secret **`PAGES_PREVIEW_TOKEN`** in [Settings → Secrets and variables → Actions](https://github.com/AmongLLM/TOHEE-Docs/settings/secrets/actions). Only the publish step receives it. PR comments and artifact downloads use the automatically supplied `GITHUB_TOKEN` with the permissions declared in the deployment workflow.
5. Merge the workflows into `main`, and ensure the repository's Actions policy allows the pinned actions used by these files. Do not require PR approval for every write to `gh-pages`, unless the token's actor is allowed to perform those deployment writes.

Optionally set the repository Actions **variable** `DOCS_SITE_URL` to the public Cloud origin; the existing default is used when it is absent. No deployment credential goes into a variable, the PR build, or the repository files.

PR preview URLs use `https://amongllm.github.io/TOHEE-Docs/pr-preview/pr-<number>/#/docs`. New commits replace that PR's preview; closing an eligible PR removes it and updates the same bot comment. Both main and PR publishing refresh the root directory, including after removal. Build timestamps for main are recorded immediately after building, and PR timestamps come from GitHub's completed build run. The publishing job writes this metadata after validation; it does not trust a PR-provided timestamp.

Publishing is serialized with GitHub's `concurrency.queue: max`, so different PRs and main builds share the same publishing queue. Preview HTML and JavaScript remain untrusted PR content; do not use this Pages origin for privileged browser state.

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
