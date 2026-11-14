---
{"id":"role-specter","kind":"role","category":"neutral","title":{"en":"Specter","zh-CN":"幽灵"},"summary":{"zh-CN":"完成所有任务并死亡后随获胜阵营获胜；开启抢夺胜利时可独自获胜。","en":"Complete all tasks and die to win with the winning team; when victory stealing is enabled, the Specter can win alone."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Specter.cs"}
---
<!-- zh-CN -->
## 幽灵

幽灵必须完成全部任务并死亡，才能随获胜阵营获胜；任务完成与死亡的先后顺序不限。游戏结束时仍存活，或尚未完成全部任务，幽灵都不能获胜。开启抢夺胜利后，完成所有任务并死亡的幽灵可以夺取胜利并单独获胜。

## 设置

- **人数上限**：一局中可出现的幽灵数量上限。
- **存活时可使用通风口**：设置幽灵存活时能否使用通风口。
- **抢夺胜利**：开启后，已完成任务并死亡的幽灵可以抢夺并单独获得胜利；关闭后按正常条件随获胜阵营获胜。
- **猜测模式中可猜职业**：设置幽灵能否在猜测模式中猜测。
- **覆盖任务数**：开启后，可单独设置幽灵是否有普通任务，以及长、短任务数量；关闭后使用与其他玩家相同的任务数。

<!-- en -->
## Specter

The Specter must complete all tasks and die to win with the winning team; the order does not matter. The Specter cannot win if still alive at the end of the game or if any tasks remain. When victory stealing is enabled, a Specter who has completed all tasks and died can steal the win and win alone.

## Settings

- **Maximum number:** Maximum number of Specters in a match.
- **Can vent while alive:** Whether the living Specter can use vents.
- **Snatches victory:** When enabled, a dead Specter who completed all tasks may steal the win; otherwise, they win normally with the winning team.
- **Can guess in Guesser Mode:** Whether the Specter can guess roles in Guesser Mode.
- **Override tasks:** When enabled, configure whether the Specter has common tasks and the number of long and short tasks. When disabled, use the same tasks as other players.
