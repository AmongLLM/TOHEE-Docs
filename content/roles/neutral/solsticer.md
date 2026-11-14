---
{"id":"role-solsticer","kind":"role","category":"neutral","title":{"en":"Solsticer","zh-CN":"至日者"},"summary":{"zh-CN":"在一轮内完成全部任务即可获胜；每次会议后任务重置，普通击杀和投票会被阻止。","en":"Complete all tasks in one round to win; tasks reset after each meeting, and ordinary kill attempts and votes are blocked."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Solsticer.cs"}
---
<!-- zh-CN -->
## 至日者

普通击杀和投票无法杀死或放逐至日者；Quizmaster 的击杀不会触发这层保护。至日者必须在一轮内完成所有任务才能获胜。每次会议结束后任务重置。有人尝试普通击杀至日者时，至日者会被传送到地图外，直到会议结束；攻击者的击杀冷却重置为 10 秒。至日者在游戏中不计入任何阵营。

当剩余任务数达到设定门槛时，玩家会收到警告；带刀玩家还会看到指向至日者的箭头。房主也可选择公开至日者身份，以及是否让至日者得知攻击者的名字和职业。

### 设置

- **所有人知道至日者身份**：设置至日者身份是否公开。
- **至日者知道攻击者信息**：开启后，至日者能看到攻击者的名字和职业。
- **可使用通风口**：设置至日者能否使用通风口。
- **可在猜测模式中猜职业**：设置至日者能否在猜测模式或作为猜测者附加职业时猜测。
- **移动速度**：至日者的移动速度。
- **剩余任务警告门槛**：剩余任务达到该数量时触发警告和箭头提示。
- **玩家死亡时增加短任务数**：每有玩家死亡，至日者增加的短任务数量。
- **覆盖任务数**：开启后，可单独设置普通任务、长任务和短任务；关闭后使用与其他玩家相同的任务数。

<!-- en -->
## Solsticer

Ordinary kill attempts and votes cannot kill or exile the Solsticer; a Quizmaster kill bypasses this protection. The Solsticer wins by completing all tasks in a single round. Tasks reset after each meeting. An ordinary kill attempt teleports the Solsticer off the map until the meeting ends and resets the attacker's kill cooldown to 10 seconds. The Solsticer counts as no team during the game.

When the remaining task count reaches the configured threshold, players are warned and killing roles receive an arrow pointing to the Solsticer. The host can also reveal the Solsticer's identity and let them see an attacker's name and role.

### Settings

- **Everyone knows who the Solsticer is:** Whether the role is revealed.
- **Solsticer knows attacker:** When enabled, the Solsticer sees the attacker's name and role.
- **Can vent:** Whether the Solsticer can use vents.
- **Can guess:** Whether the Solsticer can guess in Guesser Mode or as a Guesser addon.
- **Movement speed:** Solsticer's movement speed.
- **Remaining tasks warning:** Remaining task threshold for warnings and arrows.
- **Extra short tasks per player death:** Number of short tasks added when a player dies.
- **Override tasks:** When enabled, configure custom common, long, and short task counts.
