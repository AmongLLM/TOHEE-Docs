---
{"id":"role-snitch","kind":"role","category":"crewmate","title":{"zh-CN":"告密者","en":"Snitch"},"summary":{"zh-CN":"告密者完成任务后可识别符合设置的杀手；剩余任务达到阈值时，杀手会看到警告标记和指向告密者的箭头。","en":"The Snitch identifies eligible killers after finishing tasks; when their remaining tasks reach a threshold, killers see a warning mark and an arrow to the Snitch."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Snitch.cs"}
---

<!-- zh-CN -->
## 职业能力

告密者剩余任务数达到设定阈值时，符合条件的杀手会看到警告标记及指向告密者的箭头。完成全部任务后，告密者会标记符合设置的杀手；若启用箭头，也能追踪其位置。

## 设置

- **数量上限**：设置一局中告密者的最大人数。
- **显示指向目标的箭头**：开启时显示指向杀手的小箭头；关闭时无法得知杀手的位置。
- **按目标颜色显示箭头**：开启时箭头使用目标的职业颜色；关闭时所有箭头使用同一颜色。
- **可以找到中立杀手**：开启时告密者完成任务后也能找到带刀中立；关闭时只找内鬼。
- **可以找到灾厄中立**：开启时告密者完成任务后也能找到灾厄中立；关闭时不查找。
- **可以找到叛徒**：开启时也能找到叛徒和流氓；关闭时只找普通内鬼。
- **暴露所需的剩余任务数**：设置告密者剩余多少任务时，符合条件的杀手会看到警告标记和指向告密者的箭头。
- **自定义告密者任务**：开启时可单独设置任务数量；关闭时任务数量与其他玩家相同。自定义选项包括公共任务、长任务和短任务的设置。

<!-- en -->
## Role

When the Snitch's remaining task count reaches the configured threshold, eligible killers see a warning mark and an arrow pointing to the Snitch. After the Snitch completes all tasks, they mark eligible killers and can track them with arrows if that option is enabled.

## Settings

- **See arrow toward target**: ON shows a small arrow pointing toward killers; OFF hides killer locations from the Snitch.
- **Colored arrows by target**: ON colors each arrow using the target's role color; OFF gives all arrows the same color.
- **Can find Neutral Killers**: ON lets the Snitch find Neutral Killers after completing tasks; OFF limits the result to Impostors.
- **Can find Neutral Apocalypse**: ON also lets the Snitch find Neutral Apocalypse roles; OFF does not.
- **Can find Madmates**: ON also lets the Snitch find Madmates and Rascals; OFF limits the result to regular Impostors.
- **Remaining tasks before being revealed**: Sets how many tasks the Snitch can have left before eligible killers see a warning mark and an arrow pointing to them.
- **Override Snitch tasks**: ON allows a separate task setup; OFF gives the Snitch the same task count as everyone else. The custom setup includes common-task availability and the number of long and short tasks.
