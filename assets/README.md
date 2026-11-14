# 文档图片 / Documentation images

在 GitHub 打开这个目录，选择 **Add file → Upload files** 上传文档图片。把图片和引用它的 Markdown 放在同一个 PR 中。支持 PNG、JPEG、WebP 和 GIF，也可以按用途建子目录。

Open this directory on GitHub and choose **Add file → Upload files**. Include the image and the Markdown that references it in the same pull request. PNG, JPEG, WebP, and GIF are supported. You can also organize images in subfolders.

例如，上传 `assets/room-list.webp` 后，在文章的中文和英文正文各自使用对应的替代文字。

For example, after uploading `assets/room-list.webp`, use alt text in the language of each article section.

```markdown
![Cloud 房间列表](/assets/room-list.webp)
![Cloud room list](/assets/room-list.webp)
```

`/assets/` 路径从仓库根目录开始，移动文章后仍然有效。Paths beginning with `/assets/` start at the repository root and still work when an article moves.
