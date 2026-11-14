---
{"id":"role-niceguesser","kind":"role","category":"crewmate","title":{"zh-CN":"正义赌怪","en":"Nice Guesser"},"summary":{"zh-CN":"正义赌怪在会议中猜测玩家职业，猜对会击杀目标，猜错则自己死亡。","en":"During a meeting, the Nice Guesser guesses a player's role; a correct guess kills the target, while a wrong guess kills the Guesser."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/NiceGuesser.cs"}
---

<!-- zh-CN -->
## 职业能力

正义赌怪可在会议中猜测一名玩家的职业。猜对会击杀目标；猜错则正义赌怪死亡。成为叛徒后可以猜测船员职业。指令：/bt [玩家 ID] [职业名]。玩家 ID 显示在名字旁，也可输入 /id 查看。

## 设置

- **数量上限**：设置一局中正义赌怪的最大人数。
- **猜测次数上限**：设置正义赌怪最多能猜测的次数。
- **可以猜测船员职业**：开启时可以猜测船员职业；关闭时不能。
- **可以猜测附加职业**：开启时可以猜测玩家的附加职业；关闭时不能。
- **尝试隐藏猜测指令**：开启时模组会尝试隐藏正义赌怪的指令；关闭时不尝试隐藏。

<!-- en -->
## Role

During a meeting, the Nice Guesser can guess a player's role. A correct guess kills the target; a wrong guess kills the Nice Guesser. As a Madmate, the Nice Guesser can guess Crewmate roles. Use /bt [player ID] [role]. IDs appear next to player names or can be listed with /id.

## Settings

- **Maximum count**: Sets the maximum number of Nice Guessers in a match.
- **Maximum guesses**: Sets how many guesses the Nice Guesser can make.
- **Can guess Crewmate roles**: ON allows guesses of Crewmate roles; OFF disables them.
- **Can guess add-ons**: ON allows guessing a player's add-ons; OFF disables add-on guesses.
- **Try to hide Guesser command**: ON makes the mod attempt to hide the Nice Guesser's commands; OFF does not.
