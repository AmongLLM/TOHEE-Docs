---
{"id":"role-baker","kind":"role","category":"neutral","title":{"en":"Baker","zh-CN":"面包师"},"summary":{"en":"Give one non-Apocalypse player bread each round; transform into Famine once enough breaded players are alive.","zh-CN":"每轮给一名非灾厄玩家面包；达到存活面包玩家门槛后转变为饥荒。"},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Baker.cs"}
---
<!-- zh-CN -->
## 面包师

面包师每轮可以使用击杀按钮给一名玩家面包。不能给灾厄阵营成员面包。达到房主设定的存活面包玩家数量后，面包师会转变为饥荒。

若开启面包附加效果，面包师可以使用通风口切换发放的面包效果：

- **揭示**：向面包师揭示目标职业，整局有效。
- **职业封锁**：将目标击杀冷却设为 999，会议后恢复正常。
- **护盾**：给目标一个只有面包师知道的护盾，会议后移除。

### 设置

- **饥荒所需面包数量**：转变为饥荒所需的存活面包玩家数量。
- **饥荒饥饿冷却**：饥荒再次使用饥饿能力前的等待时间。
- **面包具有额外效果**：开启后可切换上述效果；关闭后面包不提供额外效果。

<!-- en -->
## Baker

Once per round, the Baker can use the kill button to give one player bread. The Baker cannot give bread to another Apocalypse member. They transform into Famine when the configured number of breaded players are alive.

If additional bread effects are enabled, the Baker can use vents to switch the effect granted by each loaf:

- **Reveal:** Shows the target's role to the Baker for the rest of the game.
- **Roleblock:** Sets the target's kill cooldown to 999 until the next meeting.
- **Barrier:** Gives the target a barrier known only to the Baker; it is removed after the meeting.

### Settings

- **Bread required for Famine:** Number of living breaded players needed for the transformation.
- **Famine starve cooldown:** Time Famine must wait before using Starve again.
- **Bread gives additional effects:** When enabled, bread has one of the effects above; when disabled, bread has no additional effect.
