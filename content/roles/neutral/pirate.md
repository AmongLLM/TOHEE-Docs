---
{"id":"role-pirate","kind":"role","category":"neutral","title":{"en":"Pirate","zh-CN":"决斗者"},"summary":{"zh-CN":"每轮选择一名玩家数字决斗；相同数字得分并击杀目标，目标未提交也会被击杀但不得分。","en":"Choose a player for a number duel each round; matching numbers score and kill the target, while a nonresponsive target dies without scoring."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Pirate.cs"}
---
<!-- zh-CN -->
## 决斗者（Pirate）

决斗者每轮可以使用击杀按钮选择一名目标，并在下一次会议与目标决斗。双方都提交数字且相同时，决斗者赢得该次决斗并增加一分；若目标仍存活，也会被击杀。数字不同则不会得分或击杀。目标没有提交数字时会被击杀，但决斗者不得分；决斗者没有提交数字则不会结算。对未满18岁的友善小不点使用按钮会进入普通击杀流程，而不会开始决斗；攻击瘟疫会触发瘟疫的反击。

决斗指令为 `/duel X`，其中 `X` 可以是 `0`、`1` 或 `2`。赢得房主设置数量的决斗后，决斗者获胜。

## 设置

- **决斗冷却**：再次使用能力前的等待时间。
- **隐藏决斗指令**：开启后，模组会尝试隐藏 `/duel` 指令；关闭后不会尝试隐藏。
- **获胜所需成功决斗数**：决斗者获胜前需要赢得的决斗次数。

<!-- en -->
## Pirate

Each round, the Pirate can use the kill button to select a target, then duel that target at the next meeting. If both players submit the same number, the Pirate scores one point and kills the target if they are still alive; different numbers give no point and kill neither player. If the target does not submit, they are killed if still alive, without giving the Pirate a point. If the Pirate does not submit, nothing is resolved. Using the button on a Nice Mini under 18 follows normal kill processing instead of starting a duel; attacking Pestilence triggers its retaliation.

Use `/duel X` to choose a number, where `X` is `0`, `1`, or `2`. Win the host-configured number of duels to win the game.

## Settings

- **Duel cooldown:** Time before using the ability again.
- **Hide Pirate commands:** When enabled, the mod attempts to hide `/duel` commands.
- **Successful duels required to win:** Number of duels the Pirate must win.
