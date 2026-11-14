---
{
  "id": "settings-mod",
  "kind": "guide",
  "category": "settings",
  "title": {
    "zh-CN": "模组设置",
    "en": "Mod Settings"
  },
  "summary": {
    "zh-CN": "选择 TOHEE 游戏模式，并配置角色、胜利规则和模组玩法选项。",
    "en": "Choose a TOHEE game mode and configure roles, win rules, and mod gameplay options."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Modules/OptionHolder.cs",
  "order": 103
}
---
<!-- zh-CN -->
## 选择模式

**模组设置（Mod Settings）**中的模式选择会改变一局游戏的规则和菜单内容。当前 TOHEE 提供标准模式（Standard）、自由混战（FFA）和躲猫猫（Hide & Seek TOHE）。先选模式，再设置本模式显示的选项；详见[游戏模式说明](/docs/guide-game-modes)。旧上游页面中的竞速模式（Speedrun）不在当前模式列表中。

## 标准模式（Standard）设置

标准模式可在角色页配置内鬼（Impostor）、船员（Crewmate）、中立（Neutral）角色及附加职业（Add-ons）。常见操作包括：

- 设置角色最大数量和出现概率，控制角色是否有机会进入本局。
- 查看各角色展开选项，配置冷却、技能次数、胜利条件和特殊限制。
- 设置逐出信息、阵营剩余人数，以及地图、破坏和任务变化。
- 检查附加职业的数量和可分配对象，避免同一玩家叠加过多相互冲突的效果。

角色设置页只显示当前版本存在的角色。旧版 TOHE 上游的女巫阵营（Coven）及其通用控制不在当前 TOHEE 角色菜单中。

## 自由混战与躲猫猫

自由混战设置包括对局时长、击杀冷却，以及可选的随机能力和变化。躲猫猫模式使用独立的追捕方数量和基础设置；标准模式的角色选项与部分通用选项会隐藏。切换模式后确认当前预设中需要的选项，避免把另一种模式的习惯配置误认为仍然生效。

地图、基础速度、会议或任务设置属于[游戏设置](/docs/settings-game)。房间保护和访问控制见[系统设置](/docs/settings-system)。

<!-- en -->
## Choose a mode

The mode selector in **Mod Settings** changes both round rules and the menu contents. Current TOHEE provides Standard, FFA, and Hide & Seek TOHE. Choose the mode first, then configure the options shown for it. See [game modes](/docs/guide-game-modes). Speedrun from the old upstream page is not in the current mode list.

## Standard gameplay options

Standard lets you configure Impostor, Crewmate, and Neutral roles and Add-ons in their respective pages. Common tasks include:

- Set each role's maximum count and spawn chance to control whether it can enter a round.
- Expand role options to configure cooldowns, ability uses, win conditions, and special limits.
- Set ejection information, remaining faction counts, and map, sabotage, or task changes.
- Review Add-on counts and eligible players so one player does not receive too many conflicting effects.

The role pages show roles available in the current build. The Coven faction and its general controls from the old upstream TOHE pages are not in the current TOHEE role menu.

## FFA and Hide & Seek

FFA options cover match duration, kill cooldown, and optional random abilities or twists. Hide & Seek TOHE has its own hunter count and base settings; Standard roles and some general options are hidden. After switching modes, review the active preset so you do not assume settings from another mode are still in effect.

Map, base speed, meeting, and task settings from Game Settings are covered in [game settings](/docs/settings-game). Room protection and access controls from System Settings are covered in [system settings](/docs/settings-system).
