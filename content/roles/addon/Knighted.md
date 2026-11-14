---
{
  "id": "role-knighted",
  "kind": "role",
  "category": "addon",
  "title": {
    "zh-CN": "骑士",
    "en": "Knighted"
  },
  "summary": {
    "zh-CN": "由君主授勋；会议中额外增加一票，是否显示额外票数可设置。",
    "en": "Granted by Monarch; adds an extra meeting vote, which can be hidden by a setting."
  },
  "source": "https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Monarch.cs"
}
---
<!-- zh-CN -->

## 效果

君主可将符合条件的玩家授勋为骑士。骑士保留原主角色和阵营，在会议中额外增加一票。此身份不会随机分配；君主可设置授勋次数、能力冷却，以及是否隐藏骑士的额外票数。

## 相关设置

- **MonarchKnightMax（骑士数量上限）**：设置君主可授勋的骑士数量上限。
- **MonarchKnightCooldown（骑士冷却）**：设置君主授勋能力的冷却时间。
- **HideAdditionalVotesForKnighted（隐藏 Knighted 额外票数）**：君主设置，控制是否隐藏骑士的额外投票。
- **随机分配**：不会开局随机分配；由上述赋予者能力转化获得。

<!-- en -->

## Effect

Monarch can knight eligible players, granting them Knighted. Knighted keeps its main role and team and receives one extra vote in meetings. This identity is not randomly assigned. Monarch settings control the number of knighting uses, ability cooldown, and whether Knighted's extra vote is hidden.

## Related settings

- **MonarchKnightMax**: Maximum number of players the Monarch can knight.
- **MonarchKnightCooldown**: Cooldown between the Monarch's knighting uses.
- **HideAdditionalVotesForKnighted**: Monarch setting that controls whether Knighted's additional vote is hidden.
- **Random assignment**: Not assigned at random at game start; it is granted by the conversion ability described above.
