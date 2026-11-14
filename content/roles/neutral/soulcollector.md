---
{"id":"role-soulcollector","kind":"role","category":"neutral","title":{"en":"Soul Collector","zh-CN":"灵魂收集者"},"summary":{"zh-CN":"预测玩家在本轮或下次会议死亡以收集灵魂，达到门槛后转变为死亡。","en":"Predict a player's death this round or at the next meeting to collect souls and eventually become Death."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/SoulCollector.cs"}
---
<!-- zh-CN -->
## 灵魂收集者

灵魂收集者可以对一名玩家使用击杀按钮，预言其死亡。若目标在选择目标的本轮或之后的会议中死亡，灵魂收集者就会获得一个灵魂。每次会议开始或目标死亡时，当前目标都会重置，以先发生者为准。

达到设定的灵魂数量后，灵魂收集者会转变为死亡。死亡在自己未被放逐且仍存活时，会在会议结束时杀死所有非末日阵营的存活玩家。死亡属于末日阵营。开启被动收集后，每次会议还会额外获得一个灵魂。

## 设置

- **转变所需灵魂数量**：转变为死亡需要的灵魂数量。
- **每轮被动获得灵魂**：开启后，每次会议获得一个灵魂；关闭后不会被动获得灵魂。
- **灵魂收集者可使用通风口**：设置灵魂收集者能否使用通风口。
- **死亡存在时延长会议**：死亡存在时，会议增加的时长。

<!-- en -->
## Soul Collector

The Soul Collector can use the kill button on a player to predict their death. If that player dies during the selected round or at the meeting immediately after it, the Soul Collector gains a soul. The target resets at the next meeting or when that player dies, whichever happens first.

After collecting the configured number of souls, the Soul Collector transforms into Death. If Death is alive and is not exiled, it kills all living players outside the Neutral Apocalypse team at the end of each meeting. Death belongs to the Neutral Apocalypse team. If passive soul gain is enabled, the Soul Collector also gains a soul at each meeting.

## Settings

- **Souls required for transformation:** Number of souls needed to become Death.
- **Gain a passive soul each round:** When enabled, gain one soul at each meeting; otherwise, there is no passive gain.
- **Soul Collector can vent:** Whether the Soul Collector can use vents.
- **Meeting time increase while Death exists:** Extra meeting time while Death is present.
