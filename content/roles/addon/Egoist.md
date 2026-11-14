---
{
  "id": "role-egoist",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Egoist",
    "zh-CN": "利己主义者"
  },
  "summary": {
    "zh-CN": "仅船员或内鬼可获得；存活的利己主义者会在其队伍获胜时取代该队伍成为胜者。",
    "en": "Only Crewmates or Impostors can receive it; a living Egoist replaces its team's win when that team wins."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Common/Egoist.cs"
}
---
<!-- zh-CN -->

## 效果

利己主义者只能分配给船员或内鬼；中立者、叛徒和已转化玩家不能获得。若存活的利己主义者所属的船员或内鬼队伍获胜，胜利会转为利己主义者阵营获胜。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **Eligibility（可分配阵营）**：主持人可分别设置船员、内鬼是否可以获得此附加身份。
- **ImpEgoistVisibalToAllies（内鬼队友可识别 Egoist）**：控制内鬼能否将利己主义者内鬼识别为队友，反之亦然。
- **EgoistCountAsConverted（Egoist 视为已转化）**：控制利己主义者是否按已转化身份处理。

<!-- en -->

## Effect

Egoist can only be assigned to Crewmates or Impostors; Neutrals, Madmates, and converted players are ineligible. If a living Egoist's Crewmate or Impostor team wins, the win is changed to an Egoist victory.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
- **Eligibility**: Separate settings control whether Crewmates, Impostors can receive this add-on.
- **ImpEgoistVisibalToAllies**: Whether Impostors can see an Egoist Impostor as an ally, and vice versa.
- **EgoistCountAsConverted**: Whether Egoist is treated as a converted role for conversion-related rules.
