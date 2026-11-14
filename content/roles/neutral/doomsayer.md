---
{"id":"role-doomsayer","kind":"role","category":"neutral","title":{"en":"Doomsayer","zh-CN":"末日赌怪"},"summary":{"zh-CN":"在会议中猜测玩家职业，正确猜测达到设定数量后获胜；高级选项可调整误猜惩罚。","en":"Guess roles in meetings and win after enough correct guesses; advanced options configure misguess penalties."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Doomsayer.cs"}
---
<!-- zh-CN -->
## 末日赌怪

常规职业分配中，末日赌怪的人数上限固定为一名。末日赌怪在会议中使用 `/bt [玩家ID] [职业]` 猜测玩家职业，达到设定的正确猜测数后获胜。玩家 ID 显示在名字前，也可以使用 `/id` 列出所有玩家编号。猜对目标是否死亡、猜错后是否自杀，以及猜错后是否暂时不能继续猜测，都由设置控制。

### 设置

- **获胜所需正确猜测数**：获胜前必须正确猜中的次数。
- **可猜测的阵营与附加职业**：分别设置能否猜测内鬼、船员、中立和附加职业。
- **高级设置**：开启后可设置每次会议的猜测次数上限、猜对时是否击杀目标、猜错时是否避免自杀，以及猜错后是否禁止继续猜测直到下次会议。关闭后这些高级选项不生效。
- **内鬼视野**：设置末日赌怪是否拥有内鬼视野。
- **隐藏末日赌怪指令**：开启后，模组会尝试隐藏 `/bt` 指令。

<!-- en -->
## Doomsayer

Normal role assignment has a fixed limit of one Doomsayer. During meetings, the Doomsayer guesses roles with `/bt [player ID] [role]`. Player IDs appear before names; use `/id` to list all IDs. Reach the configured number of correct guesses to win. Settings control whether correct guesses kill their targets and whether an incorrect guess causes suicide or temporarily prevents further guesses.

### Settings

- **Correct guesses required to win:** Number of correct guesses needed.
- **Guessable teams and addons:** Separately allow guesses on Impostors, Crewmates, Neutrals, and addons.
- **Advanced settings:** Configure the maximum guesses per meeting, whether correctly guessed players are killed, whether the Doomsayer does not suicide after a wrong guess, and whether a wrong guess prevents more guesses until the next meeting.
- **Impostor vision:** Whether the Doomsayer has Impostor vision.
- **Hide Doomsayer commands:** When enabled, the mod attempts to hide `/bt` commands.
