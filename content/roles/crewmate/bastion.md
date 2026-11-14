---
{"id":"role-bastion","kind":"role","category":"crewmate","title":{"zh-CN":"埋雷兵","en":"Bastion"},"summary":{"zh-CN":"埋雷兵可以在通风口放置炸弹以击杀内鬼和中立，但炸弹也可能炸死船员。","en":"The Bastion plants bombs in vents to kill Impostors and Neutrals, but the bombs can also kill Crewmates."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Bastion.cs"}
---

<!-- zh-CN -->
## 职业能力

埋雷兵可以在通风口放置炸弹，用于击杀内鬼和中立玩家；炸弹也会炸死船员。开启“会议后清除炸弹”后，触发会议时会清除所有已放置的炸弹；该选项默认关闭。

## 设置

- **会议后清除炸弹**：会议结束时清除埋雷兵放置的所有炸弹。
- **炸弹冷却**：设置再次在通风口放置炸弹前的等待时间。
- **每完成一个任务获得的技能次数**：设置每完成一个任务增加的炸弹使用次数，按 0.1 为步进。
- **初始炸弹上限**：设置埋雷兵开局拥有的炸弹数量上限。

<!-- en -->
## Role

The Bastion plants bombs in vents to kill Impostors and Neutrals. Crewmates can also be killed by the bombs. When **Bombs clear after meetings** is enabled, all planted bombs are cleared when a meeting is reported; the option is off by default.

## Settings

- **Bombs clear after meetings**: Clears all bombs placed by the Bastion when a meeting ends.
- **Bomb cooldown**: Sets how long the Bastion must wait before planting another bomb.
- **Ability uses gained per task**: Sets the additional bomb uses gained for each completed task, in 0.1 increments.
- **Initial maximum bombs**: Sets the maximum number of bombs the Bastion starts with.
