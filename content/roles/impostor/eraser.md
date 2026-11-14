---
{"id":"role-eraser","kind":"role","category":"impostor","title":{"zh-CN":"抹除者","en":"Eraser"},"summary":{"zh-CN":"会议中可抹除一名合格船员的主职业；会后转为对应原版职业，每名玩家整局只能被抹除一次。","en":"Can erase the main role of one eligible Crewmate during a meeting; afterward they become the matching vanilla role, and each player can be erased only once per game."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Eraser.cs"}
---

<!-- zh-CN -->
## 技能

会议中投票选择一名合格的船员目标，抹除其主职业；会议结束后目标会变为对应的原版职业。每名玩家整局只能被抹除一次。不能选择自己、抹除者、顽固者、中立、无任务船员和其他不合格主职业。拥有幽灵职业的目标可能被选中，但其抹除效果会被取消。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名抹除者。
- **抹除次数上限**：设置每场游戏最多可抹除多少次。

<!-- en -->
## Ability

During a meeting, vote for an eligible Crewmate to erase their main role. After the meeting, the target becomes the corresponding vanilla role. Each player can be erased only once per game. The Eraser cannot target themself, another Eraser, a Stubborn player, Neutral roles, taskless Crewmates, or other ineligible main roles. A player with a ghost role may be selected, but the erasure is cancelled.

## Options

- **Max**: Maximum number of Erasers in a match.
- **Max Erases**: Maximum number of erasures per game.
