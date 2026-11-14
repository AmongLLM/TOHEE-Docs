---
{
  "id": "role-aware",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Aware",
    "zh-CN": "意识者"
  },
  "summary": {
    "zh-CN": "调查员或神谕者投票给它，或军师、预言家尝试击杀它后，会在会议收到通知。",
    "en": "Receives a meeting notice if Fortune Teller or Oracle votes for it, or Consigliere or Overseer attempts to kill it."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Common/Aware.cs"
}
---
<!-- zh-CN -->

## 效果

如果军师或预言家尝试击杀意识者，或调查员或神谕者在会议中投票给意识者，意识者会收到会议通知。主持人可设置通知是否显示互动者的角色。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **Eligibility（可分配阵营）**：主持人可分别设置内鬼、船员、中立者是否可以获得此附加身份。
- **Knows the role of player（得知互动者角色）**：控制意识者能否得知与其互动玩家的角色。

<!-- en -->

## Effect

Aware receives a meeting notice if Consigliere or Overseer attempts to kill it, or if Fortune Teller or Oracle votes for it. The host can configure whether the notice also names the role that interacted with Aware.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
- **Eligibility**: Separate settings control whether Impostors, Crewmates, Neutrals can receive this add-on.
- **Knows the role of player**: Whether Aware learns the role of the player who interacted with it.
