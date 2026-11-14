---
{"id":"role-evilguesser","kind":"role","category":"impostor","title":{"zh-CN":"邪恶赌怪","en":"Evil Guesser"},"summary":{"zh-CN":"会议中猜测玩家职业；猜对击杀目标，猜错则自己死亡。","en":"Guesses player roles during meetings; a correct guess kills the target, while a wrong guess kills the Guesser."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/EvilGuesser.cs"}
---

<!-- zh-CN -->
## 技能

在会议中猜测一名玩家的职业。猜对时目标死亡；猜错时邪恶赌怪死亡。输入 `/bt [玩家编号] [职业名]`；编号可在名字前查看，也可用 `/id` 查询。TOHE 模组客户端提供名牌猜测界面。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名邪恶赌怪。
- **每次会议猜测次数上限**：设置每次会议可猜测的次数。
- **可以猜测内鬼职业**：开启时可猜测内鬼职业；关闭时不能。
- **可以猜测附加职业**：开启时可猜测附加职业；关闭时不能。
- **尝试隐藏猜测命令**：开启时尝试隐藏邪恶赌怪命令。

<!-- en -->
## Ability

During a meeting, guess a player’s role. A correct guess kills the target; a wrong guess kills the Evil Guesser. Enter `/bt [player ID] [role]`. The ID appears before the player’s name, or use `/id` to list IDs. The TOHE modded client also provides a guessing interface on player nameplates.

## Options

- **Max**: Maximum number of Evil Guessers in a match.
- **Maximum Number of Guesses per Meeting**: Maximum number of guesses the Evil Guesser can make in a meeting.
- **Can Guess Impostor Roles**: When enabled, Impostor roles can be guessed; otherwise they cannot.
- **Can Guess Add-Ons**: When enabled, add-ons can be guessed; otherwise they cannot.
- **Try to Hide Guesser Command**: When enabled, the mod attempts to hide the Evil Guesser command.
