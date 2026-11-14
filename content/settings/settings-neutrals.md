---
{
  "id": "settings-neutrals",
  "kind": "guide",
  "category": "settings",
  "title": {
    "zh-CN": "中立设置",
    "en": "Neutral Settings"
  },
  "summary": {
    "zh-CN": "控制中立击杀角色、末日中立角色数量范围和共同胜利。",
    "en": "Control Neutral killer and Apocalypse role ranges and shared wins."
  },
  "source": "https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Modules/OptionHolder.cs",
  "order": 106
}
---
<!-- zh-CN -->
## 数量范围

标准模式（Standard）的中立角色页（Neutral Roles）包含中立（Neutral）分配规则。当前通用设置可以限制以下角色的最小和最大数量：

- 非中立阵营的击杀角色。
- 中立击杀角色。
- 末日中立（Apocalypse）角色。

这些范围会约束分配器在本局可选角色中的数量。通常将最小数量设为不高于最大数量；若角色数量、出现几率、玩家数和阵营上下限互相冲突，某些角色可能无法出现。旧上游页面曾将其中一个最大值的说明写错；请以当前游戏菜单中精确的选项名称为准。

## 中立角色共同胜利

中立选项还可控制同类型中立角色是否共同胜利，以及是否让所有中立角色一同获胜。开启的范围越广，中立玩家之间的竞争越少，但也可能让独立胜利目标更容易一起达成。更改后检查每个角色自己的胜利条件，避免与房间规则冲突。

角色的能力和个人胜利条件位于中立角色页下各角色的展开项。这里只说明通用分配和胜利组选项。

<!-- en -->
## Count ranges

The **Neutral Roles** page in Standard contains Neutral assignment rules. Current general settings can set minimum and maximum counts for:

- Killing roles from non-Neutral factions.
- Neutral killing roles.
- Apocalypse roles.

These ranges constrain how many roles the assignment system can select for a round. Keep the minimum at or below the maximum. If role counts, spawn chances, player count, and faction limits conflict, some roles may not appear. An old upstream page misstated one maximum's description; use the exact option label in the current game.

## Neutral win-together rules

Neutral options can make Neutrals of the same type win together, and can also allow every Neutral to win together. A broader shared-win rule reduces competition among Neutral players, but can also make separate victory goals easier to satisfy at once. After changing it, check each role's win condition so it does not conflict with the room rules.

Abilities and individual victory goals are under each role in the Neutral Roles menu. This page covers only the general assignment and shared-win options.
