---
{
  "id": "settings-index",
  "kind": "guide",
  "category": "settings",
  "title": {
    "zh-CN": "设置索引",
    "en": "Settings Index"
  },
  "summary": {
    "zh-CN": "按游戏、系统、模组和阵营设置分类查找选项说明。",
    "en": "Find options by game, system, mod, and faction setting groups."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Modules/OptionHolder.cs",
  "order": 100
}
---
<!-- zh-CN -->
## 按菜单查找

- [游戏设置](/docs/settings-game)：Among Us 基础规则，例如地图、会议、移动和任务。
- [系统设置](/docs/settings-system)：房间控制、保护、显示和其他全局模组行为。
- [模组设置](/docs/settings-mod)：模式、分配规则、地图、会议、任务和破坏设置。
- [附加职业设置](/docs/settings-addons)：附加职业的显示方式和分配数量。
- [内鬼设置](/docs/settings-impostors)：内鬼和 Madmate 的阵营信息与互动。
- [中立设置](/docs/settings-neutrals)：中立角色数量范围与共同胜利规则。

当前 TOHEE 菜单将角色选项分到内鬼角色页（Impostor Roles）、船员角色页（Crewmate Roles）、中立角色页（Neutral Roles）等页面。角色名称下展开的项目是该角色专属选项，不属于通用角色说明。选择模式后，菜单会隐藏不适用的选项；详见[游戏模式](/docs/guide-game-modes)。

## 上游设置页面说明

旧 TOHE 上游的八个 `options/Settings` 页面大多是角色目录 HTML，而不是八个独立设置页面。本目录仅整理有实际通用设置内容的部分；旧女巫阵营（Coven）页面列出的通用角色配额、通风和视野选项不在当前 TOHEE 设置标签中，船员页面也没有单独的通用设置段落。不要将旧页面里的角色名单或旧选项直接当作当前客户端行为。

设置名称与范围会随模组版本变化。请以当前游戏中的设置菜单和当前发行说明为准；本文用于解释各组的用途，而非替代游戏内选项。

<!-- en -->
## Browse by menu

- [Game Settings](/docs/settings-game): base Among Us rules such as maps, meetings, movement, and tasks.
- [System Settings](/docs/settings-system): room controls, protections, display, and other global mod behavior.
- [Mod Settings](/docs/settings-mod): mode, assignment, map, meeting, task, and sabotage rules.
- [Add-on Settings](/docs/settings-addons): Add-on display and assignment limits.
- [Impostor Settings](/docs/settings-impostors): Impostor and Madmate information and interactions.
- [Neutral Settings](/docs/settings-neutrals): Neutral counts and faction win-together rules.

Current TOHEE places role options under pages such as Impostor Roles, Crewmate Roles, and Neutral Roles. Items nested under a role name are specific to that role, not general role documentation. The menu hides options that do not apply to the selected mode; see [game modes](/docs/guide-game-modes).

## About the upstream settings pages

Most of the eight old upstream `options/Settings` pages are role-directory HTML, not separate settings pages. This section extracts only the parts that contain general settings. The old Coven page listed global Coven quotas, venting, and vision controls that are not present in current TOHEE settings tabs; the Crewmate page has no separate general settings section. Do not treat old role lists or options as current client behavior.

Names and ranges change between mod versions. Use the settings menu in the current game and the current release notes as the source of truth; these pages explain the purpose of groups rather than replace the in-game options.
