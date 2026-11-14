---
{"id":"role-juggernaut","kind":"role","category":"neutral","title":{"en":"Juggernaut","zh-CN":"天启"},"summary":{"zh-CN":"每次击杀都会缩短击杀冷却；内鬼阵营消灭后按中立平衡条件获胜。","en":"Each kill reduces the kill cooldown; win under the neutral parity rule after the Impostors are gone."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Juggernaut.cs"}
---
<!-- zh-CN -->
## 天启

天启的击杀冷却会随着每次击杀逐步缩短。天启不必成为最后的幸存者：内鬼全部死亡后，若存活的计数中立玩家属于同一计数类型，且计数中立人数不少于船员，中立阵营即可获胜。

## 设置

- **初始击杀冷却**：天启开始时的击杀冷却。
- **每次击杀减少的冷却**：每次击杀后冷却减少的时长。
- **最低击杀冷却**：击杀冷却可缩短到的下限。
- **内鬼视野**：开启后拥有内鬼视野；关闭后使用默认视野。
- **可使用通风口**：设置天启能否使用通风口。

<!-- en -->
## Juggernaut

The Juggernaut's kill cooldown decreases with each kill. It does not need to be the last player alive: after all Impostors are gone, the standard neutral end check awards the win when all living counted neutrals share one count type and their total is at least the Crew count.

## Settings

- **Default kill cooldown:** The Juggernaut's starting kill cooldown.
- **Cooldown reduction per kill:** Amount the cooldown decreases after each kill.
- **Minimum kill cooldown:** Lowest cooldown the Juggernaut can reach.
- **Impostor vision:** When enabled, the Juggernaut has Impostor vision; otherwise, they have default vision.
- **Can vent:** Whether the Juggernaut can use vents.
