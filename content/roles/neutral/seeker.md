---
{"id":"role-seeker","kind":"role","category":"neutral","title":{"en":"Seeker","zh-CN":"探索者"},"summary":{"zh-CN":"使用击杀按钮标记玩家，标记正确得分、错误扣分；达到设定分数即可获胜。","en":"Tag players with the kill button, gaining points for correct tags and losing points for incorrect ones; reach the required score to win."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Seeker.cs"}
---
<!-- zh-CN -->
## 探索者

探索者使用击杀按钮标记目标。标记正确会增加一分，标记错误会扣除一分。获得新目标后（包括开局和目标死亡后重新选取）以及每次会议结束后，探索者都会有 5 秒无法移动，也不能报告尸体。目标从存活玩家中选择，但不会选择其他探索者或至日者。

达到房主设定的分数后，探索者获胜。

## 设置

- **人数上限**：一局中可出现的探索者数量上限。
- **获胜所需分数**：探索者需要收集的分数。
- **标记冷却**：标记目标前的等待时间。

<!-- en -->
## Seeker

The Seeker uses the kill button to tag a target. A correct tag adds one point; an incorrect tag deducts one point. After receiving a new target (including at the start of the game or after a target dies) and after each meeting, the Seeker cannot move or report bodies for five seconds. Targets are chosen from living players, excluding Seekers and Solsticers.

Collect the host-configured number of points to win.

## Settings

- **Maximum number:** Maximum number of Seekers in a match.
- **Points needed to win:** Score required for victory.
- **Tag cooldown:** Time before tagging a player.
