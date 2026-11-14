---
{
  "id": "role-bloodthirst",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Bloodthirst",
    "zh-CN": "嗜血者"
  },
  "summary": {
    "zh-CN": "完成任务后获得一次接触击杀机会；只分配给有任务的船员。",
    "en": "Completing a task grants a contact kill; assigned only to Crewmates with tasks."
  },
  "source": "https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Crewmate/Bloodthirst.cs"
}
---
<!-- zh-CN -->

## 效果

嗜血者只分配给有任务的船员。每完成一个任务，下一名与其接触的玩家会死亡。该状态会跨越会议保留；击杀后会清除，直到再次完成任务才重新获得，而且多个状态不会叠加。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。

<!-- en -->

## Effect

Bloodthirst is assigned only to Crewmates with tasks. Completing a task causes the next player they come into contact with to die. The effect persists through meetings, clears after a kill until another task is completed, and does not stack.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
