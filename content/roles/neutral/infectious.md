---
{"id":"role-infectious","kind":"role","category":"neutral","title":{"en":"Infectious","zh-CN":"感染者"},"summary":{"zh-CN":"感染可转换的船员、内鬼和中立杀手以扩大感染阵营；内鬼消失后，若感染者阵营是唯一计数中立阵营且人数不少于船员，即可获胜。","en":"Infect eligible Crewmates, Impostors, and Neutral Killers to build an infected team; after Impostors are gone, win at parity when it is the only counted Neutral team."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Infectious.cs"}
---
<!-- zh-CN -->
## 感染者

感染者使用击杀按钮感染符合条件的船员、内鬼或中立杀手，感染次数有限。不能被感染的目标会被正常击杀（已感染者除外）。内鬼阵营消失后，若感染者是唯一存活的计数中立阵营且人数不少于船员，即可获胜。如果感染者死亡，所有被感染者会在下一次会议后死亡；若感染者在此之前已满足获胜条件，仍可获胜。启用双击击杀后，可双击击杀目标。

### 设置

- **感染冷却**：再次感染玩家前的等待时间。
- **感染次数上限**：感染者可感染玩家的次数。
- **知道被感染玩家职业**：开启后，感染者可以看到被感染玩家的职业。
- **被感染者互相认识**：开启后，被感染者可以看到彼此。
- **内鬼视野**：开启后拥有内鬼视野；关闭后不拥有内鬼视野。
- **可使用通风口**：设置感染者能否使用通风口。
- **双击击杀目标**：开启后，双击可击杀目标。

<!-- en -->
## Infectious

The Infectious uses the kill button to infect eligible Crewmates, Impostors, and Neutral Killers, with a limited number of infections. A target who cannot be infected is killed normally, except for a player who is already Infected. After Impostors are gone, the Infectious wins when it is the only surviving counted Neutral team and its count is at least the Crewmate count. If the Infectious dies, Infected players die after the next meeting; the Infectious can still win if the parity condition is reached before then. When double-click killing is enabled, double-clicking kills the target.

### Settings

- **Infect cooldown:** Time before infecting another player.
- **Maximum infections:** Number of players the Infectious can infect.
- **Know infected players' roles:** Whether the Infectious sees the roles of infected players.
- **Infected players know each other:** Whether infected players can see other infected players.
- **Impostor vision:** Whether the Infectious has Impostor vision.
- **Can vent:** Whether the Infectious can use vents.
- **Double click to kill:** When enabled, double-clicking can kill the target.
