---
{"id":"role-berserker","kind":"role","category":"neutral","title":{"en":"Berserker","zh-CN":"狂战士"},"summary":{"zh-CN":"通过击杀升级并逐步解锁能力；达到设定等级后可转变为战争者。","en":"Level up by killing to unlock abilities, and transform into War at the configured level."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Berserker.cs"}
---
<!-- zh-CN -->
## 狂战士

狂战士每次击杀都会升级。达到房主设定的等级后，会解锁相应能力。

- **清道夫击杀**：击杀后尸体会消失。
- **爆炸击杀**：击杀会引发爆炸；范围内除狂战士和目标外的其他玩家也可能被炸死。
- 达到设定等级后，狂战士可以转变为战争者。

狂战士不能击杀灾厄阵营的玩家。

## 设置

- **击杀冷却**：狂战士使用击杀的等待时间。
- **最高等级**：狂战士可提升到的最高等级。
- **狂战士/战争者内鬼视野**：分别设置狂战士和战争者是否拥有内鬼视野；关闭时使用船员视野。
- **狂战士/战争者可使用通风口**：分别设置两种形态能否使用通风口。
- **解锁较短击杀冷却**：开启后，达到等级要求可获得所设击杀冷却；关闭后不会解锁。
- **解锁清道夫击杀**：开启后，达到等级要求可解锁清道夫击杀。
- **解锁爆炸击杀**：开启后，达到等级要求可解锁爆炸击杀。
- **转变为战争者**：开启后，达到等级要求会转变为战争者，并使用设定的战争者击杀冷却；关闭后不会转变。

<!-- en -->
## Berserker

The Berserker gains a level with each kill. Reaching host-configured level thresholds unlocks abilities.

- **Scavenged kills:** The body disappears after the kill.
- **Bombed kills:** The kill causes an explosion that can also kill other nearby players besides the Berserker and the target.
- At the configured level, the Berserker can transform into War.

The Berserker cannot kill players on the Apocalypse team.

## Settings

- **Kill cooldown:** Time between the Berserker's kills.
- **Maximum level:** Highest level the Berserker can reach.
- **Berserker/War Impostor vision:** Set vision for each form; when disabled, that form uses Crewmate vision.
- **Berserker/War can vent:** Set whether each form can use vents.
- **Unlock lower kill cooldown:** When enabled, reaching the required level grants the configured kill cooldown; when disabled, it cannot be unlocked.
- **Unlock scavenged kills:** When enabled, the required level unlocks scavenged kills.
- **Unlock bombed kills:** When enabled, the required level unlocks bombed kills.
- **Become War:** When enabled, reaching the required level transforms the Berserker into War, with the configured War kill cooldown; when disabled, the transformation is unavailable.
