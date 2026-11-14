# Contributing

Open a pull request for content, navigation, or compiler changes. Keep documentation bilingual, preserve article IDs, and include the source revision when describing game mechanics or settings.

## Add or update an article

Copy the example under [examples/new-guide-group](examples/new-guide-group) or use this frontmatter shape:

```markdown
---
{
  "id": "guide-example",
  "kind": "guide",
  "title": { "zh-CN": "示例页面", "en": "Example page" },
  "summary": { "zh-CN": "简短中文摘要。", "en": "A short English summary." },
  "source": "https://example.invalid/source",
  "order": 10
}
---
<!-- zh-CN -->
## 说明

中文正文。

<!-- en -->
## Overview

English text.
```

Keep the lowercase article ID stable when changing a title or moving a file. Place the file under the directory whose bilingual category should contain it. Use `[text](/docs/guide-example)` for article links; the compiler checks these links in both languages.

For a role article, set `kind` to `role`, set `category` to its faction ID, and update `role-roster.json` when TOHEE has added or removed an implemented role. Keep the page's `source` URL pinned to the roster's exact commit and source path.

## Add an image

Upload images to the repository-root [`assets/`](assets/) folder and reference them using a path such as `![Cloud room list](/assets/room-list.webp)`. Include the image and article changes in the same PR. See the [image guide](assets/README.md) for supported formats and bilingual examples.

## Add a navigation category

Create a directory beneath `content/`, add `_category_.json` with a globally unique ID, bilingual title, and numeric `order`, then place articles or further category directories inside it. Every directory, including `content/`, requires the metadata file. Articles must be placed in a child category directory.

Update `docs.config.json` if the group belongs in a search scope or if a role faction's name or color changes. Search scope groups refer to navigation IDs and include all descendants in the consuming frontend. The homepage cards must reference existing guide IDs.

## Review checklist

- Both language sections exist and describe the same mechanics.
- The article ID is lowercase letters, digits, and hyphens, and is unchanged unless the URL itself must change.
- Local article links use `/docs/<id>` and target an existing article.
- Role pages match the roster's category, implementation path, and source commit.
- Images are referenced from repository-root `assets/`, are used by the article, and have useful alt text.
- Run `npm test` and `npm run build`.

The compiler escapes raw HTML and rejects unsafe URLs, broken local docs links, malformed metadata, missing translations, and symbolic links in content or assets.
