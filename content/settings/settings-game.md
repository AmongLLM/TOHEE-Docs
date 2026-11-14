---
{
  "id": "settings-game",
  "kind": "guide",
  "category": "settings",
  "title": {
    "zh-CN": "游戏设置",
    "en": "Game Settings"
  },
  "summary": {
    "zh-CN": "调整 Among Us 的基础规则，如地图、速度、视野、会议和任务。",
    "en": "Adjust base Among Us rules such as maps, speed, vision, meetings, and tasks."
  },
  "source": "https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Patches/GameSettingMenuPatch.cs",
  "order": 101
}
---
<!-- zh-CN -->
## 这些设置控制什么？

**游戏设置（Game Settings）** 页面控制 Among Us 本身的基础规则。更改后会影响该槽位中的整局游戏，而不只影响某个角色。

| 设置组 | 常见用途 |
| --- | --- |
| 地图和内鬼数量 | 选择地图，并指定房间基础的内鬼（Impostor）数量。 |
| 会议和投票 | 调整紧急会议次数、冷却、讨论时间、投票时间和匿名投票。 |
| 移动与视野 | 调整玩家速度、船员（Crewmate）/内鬼（Impostor）视野、基础击杀冷却和击杀距离。 |
| 任务 | 调整视觉任务、任务栏更新方式，以及普通、长、短任务的数量。 |

此页列出的名称基于上游历史设置文档；不同 Among Us 版本可能调整控件或选项。当前游戏内显示的选项和值域优先。

## 设置建议

首次开房时先用熟悉的地图、速度和会议时长。一次只改少数选项，便于确认效果。再按人数和角色配置调整任务总量及击杀冷却。选择躲猫猫（Hide & Seek TOHE）时，标准模式的部分设置会被隐藏，改用该模式对应的选项页。

模组角色、获胜条件和专属规则位于[模组设置](/docs/settings-mod)与相应角色菜单，而不是本页。

<!-- en -->
## What do these settings control?

The **Game Settings** page controls the base rules of Among Us. A change affects the round in the selected preset slot, not just one role.

| Setting group | Common use |
| --- | --- |
| Map and Impostor count | Choose a map and set the room's base Impostor count. |
| Meetings and voting | Adjust emergency meetings, cooldown, discussion and voting time, and anonymous voting. |
| Movement and vision | Set player speed, Crewmate / Impostor vision, base kill cooldown, and kill distance. |
| Tasks | Configure visual tasks, task-bar updates, and common, long, and short task counts. |

These names are based on the historical upstream settings reference; different Among Us versions may change controls or choices. The options and ranges shown in the current game take precedence.

## Tuning tips

For a first room, use a familiar map, speed, and meeting length. Change only a few options at a time so you can see the result. Adjust total tasks and kill cooldown for the player count and role mix. When you select Hide & Seek TOHE, some Standard options are hidden and the mode's own settings apply.

Mod roles, win conditions, and role-specific rules are in [Mod Settings](/docs/settings-mod) and their role menus, not on this page.
