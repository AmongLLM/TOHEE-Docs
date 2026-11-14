---
{
  "id": "guide-tags",
  "kind": "guide",
  "category": "guide",
  "title": {
    "zh-CN": "玩家标签",
    "en": "Player Tags"
  },
  "summary": {
    "zh-CN": "了解 TOHEE Cloud 网页标签与模组本地标签的区别。",
    "en": "Understand the difference between TOHEE Cloud tags and mod-local tags."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/docs/player-tags.md",
  "order": 9
}
---
<!-- zh-CN -->
## TOHEE Cloud 网页标签

TOHEE Cloud 玩家标签与旧版上游模组标签文件是两种不同功能。Cloud 标签通过网站为已绑定的 Among Us 游戏账号设置纯文本标签和颜色；是否能自行编辑、冷却时间和账号状态由 Cloud 页面显示。标签不是模组管理权限，也不会因为文字看起来像管理员就授予模组权限。

登录并绑定游戏账号后，前往 Cloud 的账号或标签页面编辑标签。玩家标签设置、绑定和其他 Cloud 功能见[TOHEE Cloud 指南](/docs/cloud-overview)。

## 房主本地标签

TOHEE 模组本身还支持房主本地标签、权限配置和 GM 身份。这些设置保存在房主电脑的 `TOHEE-DATA/Tags`，不会与 Cloud 网页标签自动同步。房主可以输入 `/tags reload` 让模组重新读取本地标签。关于当前本地 TXT 格式、权限级别和旧配置变化，请查阅 [TOHEE 本地玩家标签说明](https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/main/docs/player-tags.md)。

旧版上游教程提到的 `MOD_TAGS`、`VIP_TAGS` 目录和旧 MOD/VIP 名单不再代表当前 TOHEE 权限系统；不要按旧教程复制标签文件或授予权限。Cloud 标签和模组本地标签各自维护，使用场景不同。

<!-- en -->
## TOHEE Cloud web tags

TOHEE Cloud player tags and the old upstream mod tag files are different features. Cloud tags let a linked Among Us account set plain-text tag content and a colour on the website. The Cloud page shows whether self-editing is allowed, the cooldown, and account status. A tag is not a mod permission, and text that looks like an administrator label does not grant mod access.

Sign in, link a game account, and open the Cloud account or tag page to edit the tag. See the [TOHEE Cloud guide](/docs/cloud-overview) for tags, account linking, and other Cloud features.

## Host-local mod tags

The TOHEE mod also supports host-local tags, permission settings, and GM status. These are stored on the host's computer under `TOHEE-DATA/Tags` and do not sync automatically with Cloud web tags. The host can enter `/tags reload` to make the mod read local tags again. For the current local TXT format, permission levels, and legacy changes, see [TOHEE host-local player tags](https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/main/docs/player-tags.en.md).

The `MOD_TAGS` and `VIP_TAGS` folders and old MOD/VIP lists mentioned in upstream instructions no longer describe the current TOHEE permission system. Do not copy old tag files or grant permissions using those instructions. Cloud tags and host-local mod tags are maintained separately and serve different purposes.
