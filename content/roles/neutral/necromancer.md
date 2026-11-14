---
{"id":"role-necromancer","kind":"role","category":"neutral","title":{"en":"Necromancer","zh-CN":"亡灵巫师"},"summary":{"zh-CN":"受到击杀时会传送到随机通风口，并限时反杀凶手；错杀、超时或会议开始都会死亡。","en":"When attacked, teleport to a random vent and kill the attacker before time runs out; a wrong kill, timeout, or meeting means death."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Necromancer.cs"}
---
<!-- zh-CN -->
## 亡灵巫师

有人试图击杀亡灵巫师时，这次击杀会被阻止，亡灵巫师会被传送到随机通风口，并获得限时复仇机会。亡灵巫师必须在时限内击杀凶手才能存活；超时、会议开始，或在复仇期间击杀凶手以外的玩家，都会使亡灵巫师死亡。亡灵巫师不必成为最后的幸存者：内鬼全部死亡后，若存活的计数中立玩家属于同一计数类型，且计数中立人数不少于船员，中立阵营即可获胜。

### 设置

- **击杀冷却**：再次击杀前的等待时间。
- **复仇时限**：击杀凶手前可用的时间。
- **可使用通风口**：设置亡灵巫师能否使用通风口。
- **内鬼视野**：设置亡灵巫师是否拥有内鬼视野。

<!-- en -->
## Necromancer

When someone tries to kill the Necromancer, the kill is blocked and the Necromancer teleports to a random vent. They have a limited time to kill their attacker. If they succeed, they survive; if time runs out or a meeting begins, they die. Killing anyone other than the attacker during this revenge window also kills the Necromancer. They do not need to be the last player alive: after all Impostors are gone, the standard neutral end check awards the win when all living counted neutrals share one count type and their total is at least the Crew count.

### Settings

- **Kill cooldown:** Time before killing again.
- **Necromancy time:** Time allowed to kill the attacker.
- **Can vent:** Whether the Necromancer can use vents.
- **Impostor vision:** Whether the Necromancer has Impostor vision.
