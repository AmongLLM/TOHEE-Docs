---
{
  "id": "role-influenced",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Influenced",
    "zh-CN": "影响者"
  },
  "summary": {
    "zh-CN": "有明确领先者时，投票会改投给该玩家，会议界面也会显示改投后的目标。",
    "en": "When there is a clear leader, its vote is redirected to that player and the meeting display shows the redirected target."
  },
  "source": "https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Common/Influenced.cs"
}
---
<!-- zh-CN -->

## 效果

系统会先计算不含影响者投票的票数；若有唯一领先者，影响者会改投给该玩家，会议界面也会显示改投后的目标。若最高票平票，或所有存活玩家都是影响者，则不会改投。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **Eligibility（可分配阵营）**：主持人可分别设置内鬼、船员、中立者是否可以获得此附加身份。

<!-- en -->

## Effect

The game first calculates votes without the Influenced players' votes. If one player has the most votes, Influenced votes are redirected to that player and the meeting display shows the redirected target. A tied lead or a lobby where every living player is Influenced prevents redirection.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
- **Eligibility**: Separate settings control whether Impostors, Crewmates, Neutrals can receive this add-on.
