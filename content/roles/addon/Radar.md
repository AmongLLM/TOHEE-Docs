---
{
  "id": "role-radar",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Radar",
    "zh-CN": "雷达"
  },
  "summary": {
    "zh-CN": "在任务阶段更新指向最近存活玩家的箭头。",
    "en": "Updates an arrow to point toward the nearest living player during tasks."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Common/Radar.cs"
}
---
<!-- zh-CN -->

## 效果

在任务阶段，雷达会更新箭头，指向最近的其他存活玩家。雷达在通风口内时不会更新；若没有其他存活玩家，则不会选择新的目标。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **Eligibility（可分配阵营）**：主持人可分别设置内鬼、船员、中立者是否可以获得此附加身份。

<!-- en -->

## Effect

During task play, Radar updates an arrow to point toward the nearest other living player. It does not update while the Radar is in a vent, and it does not select a new target when no other living player remains.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
- **Eligibility**: Separate settings control whether Impostors, Crewmates, Neutrals can receive this add-on.
