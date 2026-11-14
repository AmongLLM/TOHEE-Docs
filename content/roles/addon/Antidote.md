---
{
  "id": "role-antidote",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Antidote",
    "zh-CN": "健康者"
  },
  "summary": {
    "zh-CN": "有人尝试对其使用击杀按钮时，对方的击杀冷却会缩短。",
    "en": "When someone tries to kill it, that player's kill cooldown is reduced."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Common/Antidote.cs"
}
---
<!-- zh-CN -->

## 效果

当其他玩家尝试对健康者使用击杀按钮时，攻击者的击杀冷却会缩短一段由主持人设置的时间。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **Eligibility（可分配阵营）**：主持人可分别设置内鬼、船员、中立者是否可以获得此附加身份。
- **Decrease the cooldown by（冷却缩短时间）**：攻击者的冷却缩短时长。
- **Cooldown returns to normal after a meeting（会议后冷却恢复正常）**：控制会议结束后攻击者的冷却是否恢复正常。

<!-- en -->

## Effect

When someone tries to use a kill button on Antidote, that player's kill cooldown is reduced by a configurable amount.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
- **Eligibility**: Separate settings control whether Impostors, Crewmates, Neutrals can receive this add-on.
- **Decrease the cooldown by**: Amount by which the killer's cooldown is reduced.
- **Cooldown returns to normal after a meeting**: Whether the killer's cooldown returns to normal after a meeting.
