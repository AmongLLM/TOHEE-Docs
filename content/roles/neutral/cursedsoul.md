---
{"id":"role-cursedsoul","kind":"role","category":"neutral","title":{"en":"Cursed Soul","zh-CN":"诅咒之人"},"summary":{"zh-CN":"存活到普通游戏结束时有机会夺取主要胜利；无魂玩家按死亡参与胜利检查。","en":"A living Cursed Soul can take the primary win at a normal game end; Soulless players count as dead for win checks."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/CursedSoul.cs"}
---
<!-- zh-CN -->
## 诅咒之人

存活的诅咒之人可以在普通游戏结束时夺取主要胜利，包括原本属于小丑或处刑人的胜利；若诅咒之人已被转换，则胜利会按转换后的阵营结算。其他职业的胜利效果也可能影响最终结果。诅咒之人使用击杀按钮夺取目标的灵魂；无魂玩家在计算胜利条件时计为死亡。诅咒之人获胜时，无魂玩家会与其一同获胜。若船员、内鬼或灾厄阵营获胜，游戏结束处理也会把无魂玩家列入胜者。

### 设置

- **夺魂冷却**：再次夺取灵魂前的等待时间。
- **每次夺魂增加的冷却**：每次使用能力后，冷却增加的时长。
- **夺魂次数上限**：整局可使用能力的最大次数。
- **知道无魂玩家的职业**：当前源码中的职业显示逻辑没有读取此设置，诅咒之人可以查看无魂玩家的职业。
- **中立职业有灵魂**：开启后可对中立玩家使用能力；关闭后无法对中立玩家夺魂。已有无魂、仰慕者和忠诚者的玩家，以及未满 18 岁的小不点不能被夺魂。

<!-- en -->
## Cursed Soul

At a normal game end, a living Cursed Soul can take the primary win, including an ending that would otherwise belong to a Jester or Executioner. If the Cursed Soul has been converted, the end handler redirects the win to that converted team. Other roles' win effects can also affect the final result. The Cursed Soul uses the kill button to take a target's soul; Soulless players count as dead for parity checks. They win with a Cursed Soul, Crewmate, Impostor, or Apocalypse victory under the shared end handler.

### Settings

- **Soul snatch cooldown:** Time before taking another soul.
- **Cooldown increase per snatch:** Additional cooldown after each use.
- **Maximum soul snatches:** Maximum number of ability uses in a game.
- **Know roles of soulless players:** The current role-display logic does not read this setting; the Cursed Soul can see Soulless players' roles.
- **Neutral roles have souls:** When enabled, the ability can target Neutrals. Existing Soulless, Admired, and Loyal players, as well as Minis under age 18, cannot be targeted.
