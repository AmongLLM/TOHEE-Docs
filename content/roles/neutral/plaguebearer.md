---
{"id":"role-plaguebearer","kind":"role","category":"neutral","title":{"en":"Plaguebearer","zh-CN":"瘟疫使者"},"summary":{"zh-CN":"感染所有其他存活玩家后转变为瘟疫；转化后按天启阵营的中立平衡条件获胜。","en":"Infect every other living player to become Pestilence; win under the Apocalypse neutral parity rule after transforming."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/PlagueBearer.cs"}
---
<!-- zh-CN -->
## 瘟疫使者

瘟疫使者使用击杀按钮标记感染者。所有其他存活玩家都被感染后，瘟疫使者会转变为瘟疫。玩家击杀他人或报告尸体时，感染会在未感染的参与者之间传播。

转变为瘟疫后，常规击杀检查中，非天启职业对瘟疫的攻击会反弹并杀死攻击者；其他天启职业的攻击会被阻止但不会反伤。瘟疫可以击杀非天启玩家，且会在之后的会议上向所有玩家公布。内鬼全部死亡后，若存活的计数中立玩家属于同一计数类型，且计数中立人数不少于船员，天启阵营即可获胜；瘟疫不必成为最后的幸存者。

### 设置

- **感染冷却**：瘟疫使者再次感染玩家前的等待时间。
- **瘟疫击杀冷却**：瘟疫再次击杀前的等待时间。
- **瘟疫可使用通风口**：设置瘟疫能否使用通风口。
- **瘟疫拥有内鬼视野**：开启后拥有内鬼视野；关闭后使用船员视野。

<!-- en -->
## Plaguebearer

The Plaguebearer uses the kill button to infect players and transforms into Pestilence after every other living player is infected. Infection also spreads between infected and uninfected players when one kills the other or reports their body.

After transforming, a standard kill attempt by a non-Apocalypse role is reflected and kills the attacker; an attack from another Apocalypse role is blocked without reflection. Pestilence can kill non-Apocalypse players, and the transformation is announced to everyone at a meeting. After all Impostors are gone, the standard neutral end check awards the Apocalypse team the win when all living counted neutrals share one count type and their total is at least the Crew count. Pestilence does not need to be the last player alive.

### Settings

- **Plague cooldown:** Time before the Plaguebearer can infect another player.
- **Pestilence kill cooldown:** Time before Pestilence can kill again.
- **Pestilence can vent:** Whether Pestilence can use vents.
- **Pestilence has Impostor vision:** Whether Pestilence has Impostor vision.
