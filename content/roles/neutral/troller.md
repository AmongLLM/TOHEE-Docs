---
{"id":"role-troller","kind":"role","category":"neutral","title":{"en":"Troller","zh-CN":"暴君"},"summary":{"zh-CN":"通过完成任务触发随机事件来干扰玩家，并随获胜阵营获胜。","en":"Complete tasks to trigger random events that disrupt players, then win with the winning team."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Troller.cs"}
---
<!-- zh-CN -->
## 暴君

暴君通过完成任务触发随机事件，事件可以影响玩家，例如改变所有玩家的速度、传送玩家或影响破坏行为。暴君会随最终获胜阵营获胜。

## 设置

- **人数上限**：一局中可出现的暴君数量上限。
- **每轮事件次数**：暴君一轮最多可触发的事件数量。
- **事件可开始会议**：开启后，随机事件可以开始会议；关闭后不能通过事件开始会议。
- **覆盖任务数**：开启后，可单独设置暴君是否有普通任务，以及长任务和短任务数量；关闭后使用与其他玩家相同的任务数。

<!-- en -->
## Troller

The Troller completes tasks to trigger random events that affect players. Examples include changing everyone's speed, teleporting players, and affecting sabotage. The Troller wins with the winning team.

## Settings

- **Maximum number:** Maximum number of Trollers in a match.
- **Trolls per round:** Maximum number of events the Troller can trigger in one round.
- **Can start meeting by event:** Whether an event can start a meeting.
- **Override tasks:** When enabled, configure whether the Troller has common tasks and the number of long and short tasks. When disabled, they have the same task count as other players.
