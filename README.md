# TOHEE Documentation

Bilingual public documentation for Town of Host: Enhanced-Enhanced (TOHEE) and TOHEE Cloud. Pages are Markdown; `scripts/build-docs.mjs` compiles them into the JSON bundle used by the website.

## Contributing

### Edit on GitHub

Open the article in [`content/`](content/) and select **Edit this file**. If you cannot write to the repository, GitHub will let you propose the edit from a fork. Save the changes to a branch and open a pull request against `AmongLLM/TOHEE-Docs:main`. For a change that includes several files, such as an article and its screenshots, put all of them in the same branch and pull request.

### Work locally

Install Git, Node.js **24.x**, and npm. Fork the repository, replace `YOUR-USERNAME` with your GitHub username, and run these commands from a terminal. The standalone preview needs no Cloud backend or credentials.

```sh
git clone https://github.com/YOUR-USERNAME/TOHEE-Docs.git
cd TOHEE-Docs
git switch -c docs/update-installation
npm ci
npm run preview:dev
```

Open [http://127.0.0.1:4200/docs](http://127.0.0.1:4200/docs) to review the site. Changes to the Angular frontend are picked up by the dev server. Markdown, the roster, category metadata, and image files are compiled before the server starts. After changing any of these inputs, stop and restart `npm run preview:dev` to refresh the compiled content.

### Check and submit a pull request

From the repository root, run the tests and compile the documentation. Also run `npm run preview:build` when changing the Angular reader, its styles, or preview build scripts.

```sh
npm test
npm run build
```

Review both language sections, links, screenshots, and navigation in the preview. Stage and commit the files you changed, then push the branch with `git push -u origin docs/update-installation` if you used the example branch name. Open a PR against `main` and include the source revision for changes to game mechanics or settings. Generated files in `dist/` and `preview/.generated/` are ignored.

For a PR that can be published, the **PR Preview** bot comment links to the rendered site. Check [the repository's Actions tab](https://github.com/AmongLLM/TOHEE-Docs/actions) if the link is missing. New fork contributors may need a maintainer to approve the build. A PR that changes `.github/workflows/` cannot publish a Pages preview, so use the local reader to check its site output. See [CONTRIBUTING.md](CONTRIBUTING.md) for the article template and review checklist, and [SOURCE.md](SOURCE.md) for source revisions and attribution.

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
      crewmatetohe.md
assets/
docs.config.json
role-roster.json
roleColor.json
```

### Add or update an article

Copy [the example article](examples/new-guide-group/example.md) into the appropriate category under `content/`. Each article starts with **JSON** frontmatter between `---` lines. It needs an `id`, a `kind` (`guide` or `role`), bilingual `title` and `summary`, and a non-empty `source`. `order` is optional and defaults to `0`. Use lowercase letters and digits separated by hyphens for the ID, such as `guide-installation`. The public URL is `/docs/<id>`, so keep the ID when renaming or moving a file.

Write the Chinese body after `<!-- zh-CN -->` and the English body after `<!-- en -->`. Each marker must appear once, in that order. Keep both bodies in the same file. Link to other articles by ID, for example `[Installation](/docs/guide-installation)`. The compiler checks these links in both languages. Check heading links in the rendered preview, since heading anchors can differ between translations.

### Add a category or change navigation

Create a directory under `content/` for a top-level category, or under an existing category for a subcategory. Every directory under `content/`, including the root, requires an `_category_.json` file with a globally unique, stable ID, bilingual title, and numeric `order`. Put articles inside a child category rather than directly in `content/`.

```json
{
  "id": "installation",
  "title": { "zh-CN": "安装与更新", "en": "Installation & updates" },
  "order": 1
}
```

Categories and articles are listed in ascending `order`, with the ID breaking ties. Moving a file changes its navigation group without changing its URL. The compiler derives a guide's category from its directory. Update [`docs.config.json`](docs.config.json) when changing a faction label or color, a homepage card, or a search scope. Homepage cards must reference existing guide IDs. Search-scope `groups` refer to category IDs and include their descendants. The `all` scope is reserved for the reader.

### Update role documentation

Role articles use `kind: role` and a `category` matching the faction in [`role-roster.json`](role-roster.json). The roster records the TOHEE commit and each role's implementation path. A role article must link to that exact source, and the build requires one article per roster entry. When bringing the roster to a new TOHEE revision, update the affected pages and their pinned source links together. [`roleColor.json`](roleColor.json) maps roster keys to display colors. Missing colors use the existing fallback.

### Add an image

Place images in the repository-root [`assets/`](assets/) folder. For `assets/room-list.webp`, use `![Cloud room list](/assets/room-list.webp)` in English and corresponding Chinese alt text in Chinese. PNG, JPEG, WebP, and GIF are supported. Relative paths that resolve inside `assets/` also work, but `/assets/` paths stay valid if the article moves. The build copies referenced local images into the bundle, rejects missing files and symlinks, and leaves external HTTPS images at their original URLs. See the [upload instructions](assets/README.md) for examples.

## Development reference

| Command | Purpose |
| --- | --- |
| `npm ci` | Install the exact dependencies in `package-lock.json`. |
| `npm test` | Run the compiler and Pages directory tests in `tests/`. |
| `npm run build` | Generate the documentation data, then check the generated output. |
| `npm run docs:build` | Generate documentation data with the release version `preview`. |
| `npm run docs:check` | Compare existing generated files with the current source. Run `docs:build` first. |
| `npm run preview:dev` | Generate preview data and start the Angular dev server. |
| `npm run preview:build` | Generate preview data and build the deployable Angular site. |

### Documentation compiler

The build writes `dist/index.json`, `dist/pages/<id>.<locale>.json`, `dist/roleColor.json`, and `dist/assets/`. The default asset URL version is `preview`. A deployment can provide its own release version:

```sh
node scripts/build-docs.mjs --source . --output dist --version 1.2.3
node scripts/build-docs.mjs --source . --output dist --version 1.2.3 --check
```

`--source` is the repository root. The compiler reads `content/`, `assets/`, `docs.config.json`, `role-roster.json`, and `roleColor.json` from that root. `--check` compares the existing output without regenerating it. Validation errors identify the affected file or path. Check for invalid JSON, missing translations or category metadata, duplicate IDs, broken local article links, and missing or unsupported images. Raw HTML is escaped and unsafe URLs are omitted.

### Standalone web preview

[`scripts/build-preview-docs.mjs`](scripts/build-preview-docs.mjs) compiles the local Markdown into `preview/.generated/docs/`. The Angular reader loads `docs/manifest.json` to find the versioned index, pages, and assets under `docs/releases/<version>/`. [`angular.json`](angular.json) bundles that data with the reader in [`preview/src/`](preview/src/) and the static files in [`preview/public/`](preview/public/). The production entry point is `dist/preview/index.html`. The default local routes are `/docs` and `/docs/<id>`.

The standalone reader picks Chinese or English from the browser's language preferences unless a locale was saved. To check both variants in one browser, change the `tohee-locale` local storage value to `zh-CN` or `en` and reload.

### TOHEE Cloud integration

The documentation component, search helper, and global styles under `preview/src/` are shared copies of the Cloud frontend. Keep changes to both copies in sync. If you have a TOHEE Cloud checkout, set `DOCS_SOURCE_DIR` to the absolute path of this repo before running `npm run docs:build` from Cloud's `frontend/` directory. Cloud's frontend dev and build commands also pick up that variable.

Cloud uses a reviewed copy of `scripts/build-docs.mjs` at `backend/docs/build-docs.mjs`. When changing the compiler or output format, coordinate the compiler update with Cloud and keep both projects' `marked` versions aligned. A Cloud deployment with GitHub docs sync enabled pulls changes from its configured branch on a matching webhook push. GitHub Pages and Vercel serve the standalone reader independently.

## Preview deployment

### Build configuration

| Variable | Purpose |
| --- | --- |
| `DOCS_SITE_URL` | Cloud origin for root-relative links outside `/docs`. Defaults to `https://tohee.niko233.top`. Supply an HTTP(S) origin without credentials, a path, a query, or a fragment. |
| `DOCS_PREVIEW_BASE_PATH` | Site base path, with a leading and trailing `/`. Defaults to `/`. For a subpath, pass the same value as Angular's `--base-href`. |
| `DOCS_PREVIEW_VERSION` | Version used for the generated docs release. Defaults to `VERCEL_GIT_COMMIT_SHA` when available, or `preview`. |

The generated manifest points to the `main` source branch, so **Edit this page** links in PR previews still open `main`.

For a GitHub Pages preview published below a repository path, set `DOCS_PREVIEW_BASE_PATH` to the site's absolute base path with a trailing slash, pass the same value to Angular's `--base-href`, and publish `dist/preview/` contents under that path. For example:

```sh
export DOCS_PREVIEW_BASE_PATH=/TOHEE-Docs/pr-preview/pr-42/
export DOCS_PREVIEW_VERSION="$(git rev-parse HEAD)"
npm run preview:build -- --base-href "$DOCS_PREVIEW_BASE_PATH"
```

The standalone reader uses hash URLs, such as `/#/docs/guide-installation`, when deployed under a base path other than `/`. This lets GitHub Pages open and refresh article links without an SPA rewrite.

### Build directory and previews on GitHub Pages

The [Pages root](https://amongllm.github.io/TOHEE-Docs/) is a build directory. It shows when the directory was generated, all deployed preview directories, and each preview's build time and source revision. Timestamps retain their ISO values and are converted to the visitor's local time using the browser's time zone, which is displayed on the page. Without JavaScript, the original UTC timestamp remains readable.

[`pages-main.yml`](.github/workflows/pages-main.yml) builds the latest trusted `main` on every push to `main`, or when manually dispatched on `main`. It publishes the documentation reader at [`main/`](https://amongllm.github.io/TOHEE-Docs/main/#/docs). The main preview and root directory are updated in one `gh-pages` commit and push. Only the main preview directory is cleaned when main is rebuilt; PR previews are preserved. The preview's recorded revision is the commit actually checked out, including when an earlier run waits in the shared publishing queue.

[`pr-preview-build.yml`](.github/workflows/pr-preview-build.yml) tests and builds the full reader without deployment secrets. [`pr-preview-deploy.yml`](.github/workflows/pr-preview-deploy.yml) runs from the default branch, checks the triggering run and PR through GitHub's API, and publishes only the static artifact. It does not run code from the PR artifact. Fork PRs use the same two-stage flow; GitHub may require a maintainer to approve a new contributor's build first.

The deployment stage rejects any PR that adds, modifies, removes, or renames a path into or out of `.github/workflows/`. It checks both current and previous filenames, requires a complete paginated file list, and checks that the PR did not change during verification. Artifacts must match the build's head SHA and source repository/branch; stale builds are skipped. These checks also apply to preview removal. If the fork repository has already been deleted, verification fails and an existing preview may need manual removal. A PR introducing these workflows cannot preview itself: merge the trusted workflows first, then use a documentation-only PR.

Before enabling previews:

1. Create an independent `gh-pages` branch with an `index.html` and an empty `.nojekyll` file. This branch stores published files, not the application source.
2. In [Settings → Pages](https://github.com/AmongLLM/TOHEE-Docs/settings/pages), choose **Deploy from a branch**, **gh-pages**, **/(root)**.
3. Create a [fine-grained personal access token](https://github.com/settings/personal-access-tokens/new) with resource owner **AmongLLM**, repository access limited to **TOHEE-Docs**, **Contents: Read and write**, and **Pages: Read-only**. Metadata read access is included automatically. Complete organization approval if required. The Pages permission is used to wait for the branch deployment; no Workflows permission is needed.
4. Save it as the repository Actions secret **`PAGES_PREVIEW_TOKEN`** in [Settings → Secrets and variables → Actions](https://github.com/AmongLLM/TOHEE-Docs/settings/secrets/actions). The main publishing job uses it to check out and push `gh-pages`; PR publishing uses it in the deployment actions. PR comments and artifact downloads use the automatically supplied `GITHUB_TOKEN` with the permissions declared in the deployment workflow.
5. Merge the workflows into `main`, and ensure the repository's Actions policy allows the pinned actions used by these files. Do not require PR approval for every write to `gh-pages`, unless the token's actor is allowed to perform those deployment writes.

Optionally set the repository Actions **variable** `DOCS_SITE_URL` to the public Cloud origin; the existing default is used when it is absent. No deployment credential goes into a variable, the PR build, or the repository files.

PR preview URLs use `https://amongllm.github.io/TOHEE-Docs/pr-preview/pr-<number>/#/docs`. New commits replace that PR's preview; closing an eligible PR removes it and updates the same bot comment. Both main and PR publishing refresh the root directory, including after removal. Build timestamps for main are recorded immediately after building, and PR timestamps come from GitHub's completed build run. The publishing job writes this metadata after validation; it does not trust a PR-provided timestamp.

Publishing is serialized with GitHub's `concurrency.queue: max`, so different PRs and main builds share the same publishing queue. Commits created by the workflows use the public `github-actions[bot]` Git identity; the configured token still authenticates the push. Preview HTML and JavaScript remain untrusted PR content; do not use this Pages origin for privileged browser state.

### Vercel

Import `AmongLLM/TOHEE-Docs` as a Vercel project with the repository root as the project root. [`vercel.json`](vercel.json) runs `npm run preview:build`, serves `dist/preview/`, and rewrites `/docs` and `/docs/<id>` to the reader's `index.html`. No Cloud backend or credentials are required. Set `DOCS_SITE_URL` if the public Cloud origin differs from the default.
