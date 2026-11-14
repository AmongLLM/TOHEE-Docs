---
{"id":"role-pursuer","kind":"role","category":"neutral","title":{"en":"Pursuer","zh-CN":"起诉人"},"summary":{"zh-CN":"存活到游戏结束时通常可获胜；标记一名玩家后，对方若尝试击杀任何人都会走火自杀。","en":"Usually win by surviving to the end; after marking a player, any attempt they make to kill someone causes a fatal misfire."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Pursuer.cs"}
---
<!-- zh-CN -->
## 起诉人

起诉人存活到游戏结束时通常会获得额外胜利，但若结局是小丑、恋人、恐怖分子、处刑人、收藏家、无辜者或油管主播胜利，则不会获胜。起诉人可以使用击杀按钮标记一名符合条件的存活玩家；该玩家之后无论试图击杀谁，都会因走火而自杀。瘟疫和连环杀手不能被标记；对杀戮机器使用能力会消耗次数，但不会标记它。

## 设置

- **人数上限**：一局中可出现的起诉人数量上限。
- **能力冷却**：再次使用能力前的等待时间。
- **能力使用次数上限**：整局可使用能力的最大次数。

<!-- en -->
## Pursuer

An alive Pursuer usually receives an additional win at the end of the game, except when the result is a Jester, Lovers, Terrorist, Executioner, Collector, Innocent, or Youtuber win. The kill button marks an eligible living player as a client. If that player later attempts to kill anyone, the attempt causes them to misfire and die. Pestilence and Serial Killer cannot be marked; using the ability on a Killing Machine consumes a use but does not mark it.

## Settings

- **Maximum number:** Maximum number of Pursuers in a match.
- **Ability cooldown:** Time before using the ability again.
- **Maximum uses:** Maximum number of ability uses during the game.
