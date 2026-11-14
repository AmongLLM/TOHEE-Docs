---
{
  "id": "guide-game-modes",
  "kind": "guide",
  "category": "guide",
  "title": {
    "zh-CN": "游戏模式",
    "en": "Game Modes"
  },
  "summary": {
    "zh-CN": "比较标准模式、自由混战和 TOHE 躲猫猫，并说明旧上游指南中的竞速模式。",
    "en": "Compare Standard, FFA, and TOHE Hide & Seek, and identify Speedrun from older upstream guides."
  },
  "source": "https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Modules/OptionHolder.cs",
  "order": 8
}
---
<!-- zh-CN -->
## 当前 TOHEE 模式

在大厅的**模组设置（Mod Settings）**中选择模式。TOHEE 当前代码提供标准模式（Standard）、自由混战（FFA）和躲猫猫（Hide & Seek TOHE）；选择模式后，可用的选项页和角色设置会相应变化。

### 标准模式（Standard）

标准模式是经典的 TOHE 玩法。玩家可以获得船员（Crewmate）、内鬼（Impostor）或中立（Neutral）阵营角色，也可能获得附加职业（Add-ons）修饰。每种角色有自己的技能和胜利条件，房主通过角色数量、出现几率和其他规则决定本局组合。初次开房建议少量启用角色，再查看[模组设置](/docs/settings-mod)和[命令与快捷键](/docs/guide-features)。旧版上游指南中出现的女巫阵营（Coven）并不在当前 TOHEE 角色/设置菜单中。

### 自由混战（FFA）

自由混战中，每名玩家都要击杀其他玩家。房主可调整对局时长、击杀冷却、速度或视野效果，以及随机能力和随机变化。部分效果会在击杀后触发，例如短暂护盾或速度/视野变化；具体取决于当前模式设置。此模式使用自己的选项，不按标准模式的角色阵营分配玩法。

### 躲猫猫（Hide & Seek TOHE）

这是 TOHEE 根据 Among Us 躲猫猫规则提供的模式，房主可调整追捕方数量（当前代码允许 1 至 3 名）。追捕方寻找并击杀躲藏者；躲藏者应完成任务并尽量存活。该模式会隐藏标准模式专用的许多模组选项，因此请在大厅检查躲猫猫页面中的设置。

## 旧上游指南中的竞速模式（Speedrun）

固定版本的 TOHE 上游指南曾介绍竞速模式：玩家先完成任务，完成后转为猎杀者并尝试击杀其他人，房间设置还可能提供完成任务奖励。这个模式**不在当前 TOHEE 代码的模式列表中**，因此不要把旧说明当成当前版本可选模式。若某个未来发行版重新加入该模式，请以该发行版菜单和说明为准。

<!-- en -->
## Modes in current TOHEE

Choose a mode in **Mod Settings** in the lobby. Current TOHEE source provides Standard, FFA, and Hide & Seek TOHE. The available option tabs and role settings change with the selected mode.

### Standard

Standard is the classic TOHE experience. Players can receive Crewmate, Impostor, or Neutral faction roles and may also receive Add-on modifiers. Roles have their own abilities and win conditions; the host controls each round's lineup through role counts, spawn chances, and other rules. For a first room, enable a small set of roles and review [mod settings](/docs/settings-mod) and [commands and hotkeys](/docs/guide-features). The Coven faction shown in older upstream guides is not in the current TOHEE role or settings menus.

### FFA (Free For All)

FFA is a free-for-all mode where each player tries to kill everyone else. The host can adjust the match duration, kill cooldown, speed or vision effects, and random abilities or twists. Some effects can trigger after a kill, such as a temporary shield or a change to speed or vision; the exact behavior depends on the current mode settings. FFA uses its own options rather than Standard faction-role play.

### Hide & Seek TOHE

This is TOHEE's mode based on Among Us Hide and Seek rules. The host can set the number of hunters (current source allows one to three). Hunters search for and eliminate hiders; hiders complete tasks and try to survive. The mode hides many options used only by Standard, so review the Hide & Seek settings in the lobby.

## Speedrun in older upstream guides

An older, fixed-version TOHE upstream guide described Speedrun: players complete tasks first, then become killers and try to eliminate everyone else. The room might also grant perks for completing tasks. This mode is **not in the current TOHEE mode list**, so do not treat the old description as an option in current releases. If a future release restores it, follow that release's menu and notes.
