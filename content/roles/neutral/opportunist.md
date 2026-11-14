---
{"id":"role-opportunist","kind":"role","category":"neutral","title":{"en":"Opportunist","zh-CN":"投机者"},"summary":{"zh-CN":"存活到游戏结束即可随获胜阵营获胜；死亡则失败。","en":"Survive until the end to win with the winning team; dying means losing."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Opportunist.cs"}
---
<!-- zh-CN -->
## 投机者

投机者存活到游戏结束时，会随获胜阵营获胜；死亡则失败。

## 设置

- **人数上限**：一局中可出现的投机者数量上限。
- **完成任务后免疫攻击**：开启后，完成任务的投机者免疫攻击；关闭后不获得该免疫。
- **覆盖投机者任务数**：开启后，可单独设置投机者的任务数；关闭后使用与其他玩家相同的任务数。单独设置时可配置是否有普通任务，以及长任务和短任务数量。

<!-- en -->
## Opportunist

The Opportunist wins with the winning team if they survive until the end of the game. They lose if they die.

## Settings

- **Maximum number:** Maximum number of Opportunists in a match.
- **Immune to attacks on task completion:** When enabled, an Opportunist who completes their tasks is immune to attacks.
- **Override tasks:** When enabled, configure the Opportunist's tasks separately, including whether they have common tasks and the number of long and short tasks. When disabled, they have the same task count as other players.
