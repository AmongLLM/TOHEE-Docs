---
{
  "id": "role-lovers",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Lovers",
    "zh-CN": "恋人"
  },
  "summary": {
    "zh-CN": "开局随机配成两名恋人；按设置彼此知晓身份、一方死亡时殉情，并可共同取胜。",
    "en": "Randomly pairs two Lovers at the start; settings govern role knowledge, shared death, and their joint win."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Core/AssignManager/LoversAssignment.cs"
}
---
<!-- zh-CN -->

## 效果

恋人会在开局组成一对，人数固定为两人。主持人可设置恋人是否知道彼此角色，以及一人死亡时另一人是否殉情。游戏结束时，恋人可能取代船员、内鬼、豺狼或鹈鹕的获胜队伍，或作为额外获胜者跟随原队伍获胜；是否殉情会影响结算。

## 设置

- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **Eligibility（可分配阵营）**：主持人可分别设置内鬼、船员、中立者是否可以获得此附加身份。
- **LoverKnowRoles（恋人互知角色）**：控制恋人能否查看彼此角色。
- **LoverSuicide（恋人殉情）**：控制一名恋人死亡时，另一名存活恋人是否殉情。

<!-- en -->

## Effect

Lovers are assigned as a pair of exactly two players at the start. Settings control whether they know each other's roles and whether one dies when the other dies. At game end, Lovers can replace a Crewmate, Impostor, Jackal, or Pelican win, or follow the original winning team as additional winners; the suicide setting affects the result.

## Settings

- **Spawn Chance**: Chance for a player to receive this add-on.
- **Eligibility**: Separate settings control whether Impostors, Crewmates, Neutrals can receive this add-on.
- **LoverKnowRoles**: Whether Lovers can see each other's roles.
- **LoverSuicide**: Whether a living Lover dies when the other Lover dies.
