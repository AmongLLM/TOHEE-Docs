---
{
  "id": "role-bewilder",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Bewilder",
    "zh-CN": "迷幻者"
  },
  "summary": {
    "zh-CN": "被击杀时会让击杀者获得与自己相同的视野；主持人可设定视野和分配阵营。",
    "en": "When killed, gives its killer the same vision level; host settings control vision and eligible teams."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Common/Bewilder.cs"
}
---
<!-- zh-CN -->

## 效果

持有迷幻者时的视野由主持人设置，可以高于或低于其他玩家。迷幻者被击杀后，若启用相应选项，击杀者的视野会改为迷幻者当时的视野；Impostors 是否可获得此附加身份由阵营分配选项控制。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **Eligibility（可分配阵营）**：主持人可分别设置内鬼、船员、中立者是否可以获得此附加身份。
- **BewilderVision（迷幻者视野）**：分配给迷幻者的视野范围。
- **KillerGetBewilderVision（击杀者获得迷幻者视野）**：控制击杀者杀死迷幻者后是否获得其视野。

<!-- en -->

## Effect

The host sets the vision level for Bewilder, which can be lower or higher than other players' vision. When Bewilder is killed, the killer receives Bewilder's vision if the related option is enabled. The team eligibility options control whether Impostors can receive this add-on.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
- **Eligibility**: Separate settings control whether Impostors, Crewmates, Neutrals can receive this add-on.
- **BewilderVision**: Vision level assigned to players with Bewilder.
- **KillerGetBewilderVision**: Whether the killer receives Bewilder's vision after killing them.
