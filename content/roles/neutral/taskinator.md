---
{"id":"role-taskinator","kind":"role","category":"neutral","title":{"en":"Taskinator","zh-CN":"任务执行者"},"summary":{"zh-CN":"完成任务时给任务安装炸弹；其他玩家完成被标记任务时会触发炸弹攻击。船员获胜时任务执行者不能获胜。","en":"Bomb tasks as they are completed so another player triggers an attack when completing one; the Taskinator wins only if Crew does not win and they survive."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Taskinator.cs"}
---
<!-- zh-CN -->
## 任务执行者

任务执行者每完成一个任务，该任务就会被安装炸弹。之后其他玩家完成被标记的任务时，炸弹会引爆并尝试杀死该玩家。炸弹会经过目标的击杀检查，因此目标的角色能力或状态可能阻止爆炸击杀。

任务执行者存活到游戏结束且船员未获胜时获胜。

## 设置

- **人数上限**：一局中可出现的任务执行者数量上限。
- **每轮可轰炸的任务数**：每轮可安装炸弹的任务数量。
- **覆盖任务数**：开启后，可单独设置任务执行者是否有普通任务，以及长任务和短任务数量；关闭后使用与其他玩家相同的任务数。

<!-- en -->
## Taskinator

Whenever the Taskinator completes a task, that task is bombed. If another player later completes a bombed task, the bomb detonates and attempts to kill them. The bomb still passes through the target's kill checks, so a target's role ability or state can prevent it from killing them.

The Taskinator wins if they survive until the end and the Crew does not win.

## Settings

- **Maximum number:** Maximum number of Taskinators in a match.
- **Tasks bombed per round:** Number of tasks the Taskinator can bomb in one round.
- **Override tasks:** When enabled, configure whether the Taskinator has common tasks and the number of long and short tasks. When disabled, they have the same task count as other players.
