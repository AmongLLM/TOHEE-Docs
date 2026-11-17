---
{"id":"cloud-tags","kind":"guide","category":"cloud","title":{"zh-CN":"免费玩家标签","en":"Free player tags"},"summary":{"zh-CN":"为绑定的账号设置纯文本标签与颜色，并在模组中刷新显示。","en":"Choose plain tag text and a colour for a linked account, then refresh it in the mod."},"source":"TOHEE Cloud product guidance; maintainer-authored and reviewed 2026-11-13","order":3}
---
<!-- zh-CN -->
## 设置标签

1. 先完成 [游戏账号绑定](/docs/cloud-accounts)。
2. 打开 [玩家标签](/tags)，选择需要编辑的好友代码。
3. 输入标签文字，并使用选色器或 `#RRGGBB` 设置颜色。
4. 查看本地预览，完成安全验证后保存。

自助标签免费使用。默认限制为 1–12 个 Unicode 码点，支持字母（包括汉字）、数字、组合字符和普通空格，不能只有空格。组合字符可能占用多个码点；以编辑器显示的计数和当前长度限制为准。自助标签不支持富文本标签、换行或特殊符号，不能用颜色代码代替文字。

## 修改冷却

首次保存后，每次自助修改之间需要间隔 1 小时。编辑器显示上次修改时间、下次可修改时间和剩余冷却。文字和颜色共用此次修改，不是各有一次独立机会；保存前请一起核对。

已经设置标签时，可以在编辑器中完成安全验证后清空文字和颜色。清空同样受 1 小时冷却限制，也会开始下一次冷却；管理员设置的其他字段不会被清除。

管理员停用该账号的 Cloud 标签配置、关闭本人编辑，或账号被冻结或封禁时，可能无法自行保存。按页面显示的原因处理；反复刷新不会解除限制。

## 在游戏中显示

在 TOHEE 的 Cloud 菜单启用“使用云端标签”，必要时点击刷新云标签，或使用 `/cloud tags refresh`。标签使用与房间分享相互独立，不需要为了显示标签而公开房间码。

网页预览用于检查文字与颜色，实际位置和效果以游戏为准。房主的标签加载设置与缓存也会影响显示；网页保存成功不等于每个房间已经立即刷新。

## 管理字段与本地标签

编辑器中的游戏管理字段是只读信息，普通玩家无法通过自助标签修改开发者、管理员等权限。标签文字本身不会授予管理权限。

Cloud 标签在网页上编辑；房主本地标签与权限通过 `TOHEE-DATA/Tags/` 中的玩家文件编辑，步骤见[本地标签与权限](/docs/guide-local-tags)。`/tags reload` 重载本地标签，`/cloud tags refresh` 刷新云端标签。

<!-- en -->
## Set a tag

1. [Link your game account](/docs/cloud-accounts) first.
2. Open [Player tags](/tags) and select the friend code you want to edit.
3. Enter tag text and choose a colour with the picker or a `#RRGGBB` value.
4. Review the local preview, complete the security check and save.

Self-service tags are free. The default limit is 1–12 Unicode code points, accepting letters (including Chinese characters), numbers, combining marks and ordinary spaces. A tag cannot contain only spaces. A combining sequence may use multiple code points; use the count and current limit displayed in the editor. Self-service tags do not support rich-text tags, line breaks or special symbols; colour codes are not a substitute for text.

## Edit cooldown

After your first save, allow one hour between self-service edits. The editor shows your last edit, next available edit and remaining cooldown. Text and colour share the same edit; they are not separate edit allowances. Review both before saving.

Once a tag is set, you can complete the security check and clear its text and colour in the editor. Clearing follows the same one-hour cooldown and starts a new cooldown; other fields set by an administrator are preserved.

You may be unable to save if an administrator disabled the account's Cloud tag profile or owner editing, or the account is frozen or banned. Follow the displayed reason; refreshing repeatedly does not remove a restriction.

## Display in game

Enable Use cloud tags in the TOHEE Cloud menu. Refresh cloud tags there when needed, or use `/cloud tags refresh`. Tag display is independent of room sharing: you do not need to publish your room code to use a tag.

The website preview helps check text and colour; the game determines the actual placement and appearance. The host's tag-loading settings and cache also affect display. Saving successfully does not mean every room has refreshed immediately.

## Management fields and local tags

Game management fields in the editor are read-only information. Self-service tags cannot change developer, administrator or similar permissions. Tag text itself grants no management permission.

Edit Cloud tags on the website. Hosts edit local tags and permissions in the player files under `TOHEE-DATA/Tags/`; see [Local tags and permissions](/docs/guide-local-tags) for the steps. `/tags reload` reloads local tags, and `/cloud tags refresh` refreshes Cloud tags.
