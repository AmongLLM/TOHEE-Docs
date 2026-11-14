---
{
  "id": "role-stealer",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Stealer",
    "zh-CN": "窃票者"
  },
  "summary": {
    "zh-CN": "仅内鬼可获得；每次击杀都会增加额外投票数，票数可设置为隐藏。",
    "en": "Only Impostors can receive it; kills add extra votes, which can be hidden by a setting."
  },
  "source": "https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Impostor/Stealer.cs"
}
---
<!-- zh-CN -->

## 效果

窃票者只分配给内鬼。每次击杀都会按设定值增加额外投票数；计算投票时小数部分向下取整。额外投票是否在会议界面显示由设置控制。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **TicketsPerKill（每次击杀增加票数）**：每次击杀增加的额外票数；应用时向下取整。
- **HideAdditionalVotes（隐藏额外票数）**：控制会议期间是否隐藏额外票数。

<!-- en -->

## Effect

Stealer is assigned only to Impostors. Each kill adds extra votes based on a configurable amount; fractional votes are rounded down. A setting controls whether the extra votes appear in the meeting display.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
- **TicketsPerKill**: Extra votes granted per kill; fractional votes are rounded down when applied.
- **HideAdditionalVotes**: Whether extra votes are hidden during meetings.
