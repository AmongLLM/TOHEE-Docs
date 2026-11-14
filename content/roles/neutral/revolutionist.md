---
{"id":"role-revolutionist","kind":"role","category":"neutral","title":{"en":"Revolutionist","zh-CN":"革命家"},"summary":{"zh-CN":"通过跟随玩家将其拉拢入队；达到人数要求后须在倒计时内进入通风口，革命家和被拉拢者一同获胜。","en":"Recruit players by following them; after recruiting enough, vent before the timer expires so the Revolutionist and recruits win together."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Revolutionist.cs"}
---
<!-- zh-CN -->
## 革命家

革命家使用击杀按钮开始拉拢一名玩家，并跟随对方直到拉拢动画完成。被拉拢者可能会按房主设置的概率立即死亡，但仍会被计为已拉拢。名字旁的「○」表示正在拉拢，「●」表示已拉拢。

拉拢到设定人数后，革命家必须在倒计时结束前进入通风口，才能和所有招募者立即获胜。超时后革命家和存活的招募者都会死亡。倒计时期间召开会议也会杀死革命家。

### 设置

- **人数上限**：一局中可出现的革命家数量上限。
- **拉拢持续时间**：跟随一名玩家多久才能拉拢成功。
- **拉拢冷却**：再次开始拉拢前的等待时间。
- **获胜所需拉拢人数**：启动通风口倒计时前所需拉拢的人数。
- **被拉拢者牺牲概率**：被拉拢者立即死亡的概率；死亡后仍计入招募人数。
- **进入通风口时限**：达到拉拢人数后必须进入通风口的时间限制。

<!-- en -->
## Revolutionist

The Revolutionist uses the kill button to begin recruiting a player, then follows them until the recruitment animation completes. A recruited player has a host-configured chance to die immediately, but still counts as recruited. A hollow circle (○) marks a player being recruited; a filled circle (●) marks a completed recruitment.

After recruiting the required number of players, the Revolutionist must enter a vent before the timer expires to win immediately with all recruits. If time runs out, the Revolutionist and living recruits die. A meeting during the countdown also kills the Revolutionist.

### Settings

- **Maximum number:** Maximum number of Revolutionists in a match.
- **Recruit duration:** Time the Revolutionist must stay with a player to recruit them.
- **Recruit cooldown:** Time before starting another recruitment.
- **Players required:** Number of players to recruit before the vent timer starts.
- **Tagged player sacrifice probability:** Chance a recruited player dies immediately but still counts as recruited.
- **Time to vent:** Time allowed to enter a vent after recruiting enough players.
