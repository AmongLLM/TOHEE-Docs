---
{"id":"role-death","kind":"role","category":"neutral","title":{"en":"Death","zh-CN":"死亡"},"summary":{"zh-CN":"灵魂收集者收集足够灵魂后转变为死亡；若未在下一次会议中被投出，死亡会在会议结算时杀死非灾厄玩家。","en":"The Soul Collector transforms into Death after collecting enough souls; if not voted out at the next meeting, Death kills non-Apocalypse players when the meeting resolves."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/SoulCollector.cs"}
---
<!-- zh-CN -->
## 死亡

灵魂收集者可以用击杀按钮标记一名玩家；若目标死亡，灵魂收集者获得一个灵魂。开启被动灵魂后，每次报告尸体也会获得一个灵魂。达到设置数量后，灵魂收集者转变为死亡。

若死亡未在转变后的下一次会议中被投出，它会在会议结算时安排所有存活的非灾厄玩家死亡；其他灾厄成员不受影响。死亡阵营按灾厄阵营的胜利条件结算。

死亡无敌。死亡存活期间，每次会议都会向所有玩家公布其存在；会议时间设置也会延长死亡存活期间的会议投票时间。

### 设置

- **转变为死亡所需灵魂数**：达到此数量后，灵魂收集者转变为死亡。
- **被动获得灵魂**：开启后，每次报告尸体都会获得一个灵魂。
- **灵魂收集者可使用通风口**：设置灵魂收集者和死亡能否使用通风口。
- **死亡会议时间增加**：死亡存活期间，每次会议增加的投票时间。

<!-- en -->
## Death

The Soul Collector can use the kill button to mark one target and gains a soul if that target dies. When passive souls are enabled, each reported body also grants a soul. Reaching the configured threshold transforms the Soul Collector into Death.

If Death is not voted out at the next meeting, it schedules every living non-Apocalypse player to die when that meeting resolves; other Apocalypse members are unaffected. Death wins through the Apocalypse team's win condition.

Death is invincible. Their presence is announced to everyone at every meeting while they are alive. The meeting-time option adds voting time to each meeting while Death is alive.

### Settings

- **Souls required to transform:** Number of souls needed for the Soul Collector to become Death.
- **Gain passive souls:** When enabled, each reported body grants a soul.
- **Soul Collector can vent:** Whether the Soul Collector and Death can use vents.
- **Death meeting time increase:** Additional voting time at each meeting while Death is alive.
