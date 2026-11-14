---
{
  "id": "role-paranoia",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Paranoia",
    "zh-CN": "双重人格"
  },
  "summary": {
    "zh-CN": "仅船员或内鬼可获得；胜负人数判定时计作两人，并可在会议中追加一票。",
    "en": "Only Crewmates or Impostors can receive it; counts as two for parity checks and can cast an extra meeting vote."
  },
  "source": "https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Common/Paranoia.cs"
}
---
<!-- zh-CN -->

## 效果

叛徒和中立者不能获得双重人格。胜负人数判定时，双重人格会额外计作一人；开启 DualVotes 后，它在会议中也会产生一张额外投票。该能力可单独关闭，额外投票是否显示也可设置。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **Eligibility（可分配阵营）**：主持人可分别设置内鬼、船员是否可以获得此附加身份。
- **DualVotes（追加投票）**：控制双重人格是否在会议中追加一票。
- **HideAdditionalVotes（隐藏追加投票）**：控制会议界面是否隐藏追加投票。

<!-- en -->

## Effect

Madmates and Neutrals cannot receive Paranoia. It counts as one additional player for parity checks. When DualVotes is enabled, it also contributes an extra vote during meetings; the ability and visibility of that extra vote are configurable.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
- **Eligibility**: Separate settings control whether Impostors, Crewmates can receive this add-on.
- **DualVotes**: Whether Paranoia contributes an extra vote during meetings.
- **HideAdditionalVotes**: Whether the additional vote is hidden in the meeting display.
