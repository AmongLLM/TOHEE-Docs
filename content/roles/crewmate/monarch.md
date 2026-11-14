---
{"id":"role-monarch","kind":"role","category":"crewmate","title":{"zh-CN":"君主","en":"Monarch"},"summary":{"zh-CN":"君主可以册封玩家为骑士并给予额外投票；只要场上存在骑士，君主就不能被猜测或击杀。","en":"The Monarch knights players to give them an extra vote; while any knighted player exists, the Monarch cannot be guessed or killed."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Monarch.cs"}
---

<!-- zh-CN -->
## 职业能力

每局最多会有一名君主。君主可以册封玩家为骑士，使其获得额外投票。已有多个投票的玩家不能再次受封；金色名字只有君主可见。只要场上存在骑士，君主就不能被猜测或击杀。

## 设置

- **册封冷却**：设置君主再次册封前的等待时间。
- **骑士人数上限**：设置君主最多可以册封多少名玩家。
- **隐藏骑士的额外票数**：设置是否隐藏已受封骑士的额外投票。

<!-- en -->
## Role

Only one Monarch can spawn in a match. The Monarch can knight players to give them an extra vote. A player who already has multiple votes cannot be knighted; the golden name is visible only to the Monarch. While any knighted player exists, the Monarch cannot be guessed or killed.

## Settings

- **Knight cooldown**: Sets how long the Monarch must wait before knighting another player.
- **Maximum knights**: Sets how many players the Monarch can knight.
- **Hide additional votes for knighted players**: Controls whether a knight's extra vote is hidden.
