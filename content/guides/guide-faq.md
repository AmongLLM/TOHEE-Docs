---
{
  "id": "guide-faq",
  "kind": "guide",
  "category": "guide",
  "title": {
    "zh-CN": "常见问题",
    "en": "Frequently Asked Questions"
  },
  "summary": {
    "zh-CN": "了解房主专属模组、兼容客户端、角色显示和日志获取。",
    "en": "Learn about host-only mods, client compatibility, role display, and logs."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/README.md",
  "order": 11
}
---
<!-- zh-CN -->
## 什么是房主专属模组？

房主专属（host-only）模组由房主运行，其他玩家通常无需安装同一模组即可加入。房主仍需使用兼容的 Among Us 游戏版本；TOHEE 的实际兼容范围以当前发行说明为准。

## 所有人都需要安装 TOHEE 吗？

不需要。只有房主需要在支持的 Windows PC 游戏版本上安装 TOHEE。手机、平板、主机玩家不能安装此 Windows 模组，但可在游戏版本兼容时加入房间。

## 为什么普通玩家看到的基础角色和模组角色不一样？

为兼容原版客户端，房主专属模组可能借用 Among Us 的基础角色能力；基础角色不一定等于 TOHEE 阵营或自定义角色。TOHEE 客户端可通过角色介绍和游戏界面显示更多模组信息。玩家可用 `/m` 查看自己的角色说明，或按 `F1`（标准模式）查看信息。具体显示会依客户端和角色而不同。

## Cloud 标签会授予房主权限吗？

不会。Cloud 网页标签是绑定账号的文字和颜色设置；模组本地权限配置是另一套功能。请见[玩家标签说明](/docs/guide-tags)和[Cloud 指南](/docs/cloud-overview)。

## Game Master（GM）是什么？

旧上游 FAQ 将 GM 描述为自动分配给房主的旁观者角色。当前 TOHEE 的 GM 身份通过房主本地玩家配置中的 `AssignGameMaster` 字段设置；它只设置 GM 身份，不会自动授予管理命令权限。详见[玩家标签说明](/docs/guide-tags)。

## 如何获取日志？

在游戏中输入 `/dump`，或按 `Ctrl` + `F1` 导出模组日志。如果游戏未能导出，请在 Among Us 目录中查看 `BepInEx/LogOutput.log`。提交问题时描述复现步骤和游戏/模组版本；不要公开分享账号密码或令牌。

## 为什么会出现重复角色？

检查该角色的最大数量和出现几率。若最大数量高于 1，或多个玩家都满足分配条件，重复分配可能是选项结果而非错误。

## 为什么加入房间后提示版本不兼容？

房主与加入者必须使用兼容的 Among Us 版本；房主还要使用支持该游戏版本的 TOHEE 发行包。更新游戏后，请从[发行页](https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/releases)查看适配版本。

## 哪里可以找到更具体的帮助？

先查看[故障排查](/docs/guide-troubleshooting)。若问题仍存在，请在 TOHEE 社区反馈并附上相关日志；旧上游 Discord 频道或邀请链接不一定仍有效，请从当前 TOHEE 项目页面查找社区入口。

<!-- en -->
## What is a host-only mod?

A host-only mod runs on the host's client; other players can usually join without installing the same mod. The host still needs an Among Us game version that is compatible with the room. Check current TOHEE release notes for the supported range.

## Does everyone need to install TOHEE?

No. Only the host installs TOHEE on a supported Windows PC version of the game. Players on phones, tablets, and consoles cannot install this Windows mod, but may join when their game version is compatible.

## Why does a vanilla client show a different base role from a TOHEE role?

To work with unmodified clients, a host-only mod may use an Among Us base role for its abilities. The base role is not necessarily the same as the TOHEE faction or custom role. TOHEE clients can show more mod information through role descriptions and the game interface. Players can type `/m` to read their role description or press `F1` in Standard mode. The exact display depends on the client and role.

## Do Cloud tags grant host permissions?

No. A Cloud web tag is a text and colour setting for a linked account; mod-local permission files are a separate system. See [player tags](/docs/guide-tags) and the [Cloud guide](/docs/cloud-overview).

## What is Game Master (GM)?

The old upstream FAQ described GM as an observer role automatically assigned to the host. Current TOHEE configures GM status with the `AssignGameMaster` field in a host-local player file; it sets GM status only and does not grant management commands. See [player tags](/docs/guide-tags).

## How do I get a log?

Enter `/dump` in game or press `Ctrl` + `F1` to export a mod log. If the export does not work, check `BepInEx/LogOutput.log` in the Among Us directory. Include reproduction steps and game/mod versions when reporting an issue; do not share account passwords or tokens publicly.

## Why did the same role appear more than once?

Check the role's maximum count and spawn chance. If the maximum is greater than one or several players meet the assignment rules, duplicates can be the result of the configured options rather than a bug.

## Why does the room say that our versions are incompatible?

The host and joining players need compatible Among Us versions, and the host needs a TOHEE release that supports that game version. After a game update, check the [release page](https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/releases) for a compatible build.

## Where can I get more help?

Start with [troubleshooting](/docs/guide-troubleshooting). If the problem persists, report it to the TOHEE community with relevant logs. Old upstream Discord channels or invite links may no longer work; use the current TOHEE project page to find community links.
