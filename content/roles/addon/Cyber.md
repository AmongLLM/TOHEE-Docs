---
{
  "id": "role-cyber",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Cyber",
    "zh-CN": "网络员"
  },
  "summary": {
    "zh-CN": "附近有其他存活玩家时无法被击杀；死亡消息和身份标记可按设置公开。",
    "en": "Cannot be killed while another player is nearby; death alerts and public identification are configurable."
  },
  "source": "https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Common/Cyber.cs"
}
---
<!-- zh-CN -->

## 效果

网络员周围 2 个游戏单位内若有另一名存活玩家（不包括击杀者和网络员自己），则不能被击杀。网络员死亡时可向内鬼、船员和中立者分别发送提示；也可设置是否在名字旁公开显示星标。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **Eligibility（可分配阵营）**：主持人可分别设置内鬼、船员、中立者是否可以获得此附加身份。
- **ImpKnowCyberDead（内鬼得知 Cyber 死亡）**：控制网络员死亡时是否通知内鬼。
- **CrewKnowCyberDead（船员得知 Cyber 死亡）**：控制网络员死亡时是否通知船员。
- **NeutralKnowCyberDead（中立者得知 Cyber 死亡）**：控制网络员死亡时是否通知中立者。
- **CyberKnown（公开 Cyber 身份）**：控制是否向所有人公开显示网络员名字旁的星标。

<!-- en -->

## Effect

Cyber cannot be killed if another living player is within 2 game units, excluding the attacker and Cyber. When Cyber dies, the host can separately notify Impostors, Crewmates, and Neutrals. A separate setting controls whether a star publicly identifies Cyber by name.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
- **Eligibility**: Separate settings control whether Impostors, Crewmates, Neutrals can receive this add-on.
- **ImpKnowCyberDead**: Whether Impostors receive a death alert when Cyber dies.
- **CrewKnowCyberDead**: Whether Crewmates receive a death alert when Cyber dies.
- **NeutralKnowCyberDead**: Whether Neutrals receive a death alert when Cyber dies.
- **CyberKnown**: Whether a star appears next to Cyber's name for everyone.
