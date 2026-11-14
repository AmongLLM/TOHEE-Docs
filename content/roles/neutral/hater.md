---
{"id":"role-hater","kind":"role","category":"neutral","title":{"en":"Hater","zh-CN":"FFF团"},"summary":{"zh-CN":"以 1 秒冷却击杀设置允许的恋人或转换职业；任一FFF团成功击杀后，所有FFF团玩家即使死亡也会随获胜阵营获胜。","en":"Kill eligible Lovers or converted roles with a 1-second cooldown; after any Hater makes a valid kill, all Haters can win with the winning team even if dead."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Hater.cs"}
---
<!-- zh-CN -->
## FFF团

FFF团的击杀冷却为 1 秒，只能击杀恋人及设置允许的招募职业或附加职业。击杀其他目标会导致FFF团自杀；开启误杀击杀目标后，误杀时目标也会死亡。任一FFF团成功击杀符合条件的目标后，所有FFF团玩家都会在游戏结束时随获胜阵营获胜，无论自己是否存活。FFF团不会成为恋人。

### 设置

- **误杀时击杀目标**：开启后，误杀时也会击杀目标；关闭后只会使FFF团自杀。
- **指定可击杀的转换职业**：开启后，可选择可击杀的类别：叛徒类、魅惑类、恋人、豺狼阵营、利己主义者、感染者阵营、病毒阵营和仰慕者。关闭后允许击杀所有符合条件的转换/招募职业。

<!-- en -->
## Hater

The Hater has a 1-second kill cooldown and can kill Lovers and the recruited roles or addons allowed by the settings. Killing an invalid target makes the Hater suicide; when the misfire option is enabled, the target also dies. After any Hater makes a valid kill, all Hater players join the winning team at game end, whether alive or dead. The Hater cannot become a Lover.

### Settings

- **Kill target on misfire:** When enabled, also kill the target on a misfire; otherwise, only the Hater dies.
- **Select converted roles Hater can kill:** When enabled, choose Madmate, Charmed, Lovers, Jackal team, Egoist, Infected team, Virus team, and Admirer. When disabled, all eligible recruited or converted roles can be killed.
