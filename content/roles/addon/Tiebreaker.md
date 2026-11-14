---
{
  "id": "role-tiebreaker",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Tiebreaker",
    "zh-CN": "破平者"
  },
  "summary": {
    "zh-CN": "投票平票时优先淘汰其投票指向的目标；多个破平者指向不同目标时能力不生效。",
    "en": "In a tie, gives priority to its chosen target; the effect fails if multiple Tiebreakers choose different targets."
  },
  "source": "https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Common/Tiebreaker.cs"
}
---
<!-- zh-CN -->

## 效果

发生平票时，会优先淘汰破平者投票选择的目标。如果多个破平者同时选择不同的平票目标，则这些能力都不会生效。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **Eligibility（可分配阵营）**：主持人可分别设置内鬼、船员、中立者是否可以获得此附加身份。

<!-- en -->

## Effect

When a vote is tied, priority is given to the target chosen by the Tiebreaker. If multiple Tiebreakers choose different tied targets at the same time, their abilities do not take effect.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
- **Eligibility**: Separate settings control whether Impostors, Crewmates, Neutrals can receive this add-on.
