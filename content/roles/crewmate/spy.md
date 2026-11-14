---
{"id":"role-spy","kind":"role","category":"crewmate","title":{"zh-CN":"间谍","en":"Spy"},"summary":{"zh-CN":"有人对间谍使用击杀按钮技能时，间谍可短暂看到对方的橙色名字；技能次数耗尽后不再看到提示。","en":"When someone uses a kill-button ability on the Spy, the Spy can briefly see their name in orange; this stops when uses run out."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Spy.cs"}
---

<!-- zh-CN -->
## 职业能力

每局最多会有一名间谍。有人对间谍使用击杀按钮（包括通过击杀按钮发动的技能）时，间谍会在几秒内看到该玩家的名字变为橙色。船员对间谍使用技能也会触发提示。间谍没有剩余技能次数时不会看到橙名。如果击杀按钮互动被阻止，攻击者的冷却会重置为 10 秒。

## 设置

- **初始技能次数**：设置间谍开局拥有的技能次数。
- **名字变色持续时间**：设置目标名字保持变色的时长。
- **每完成一个任务获得的技能次数**：设置每完成一个任务增加的次数，按 0.1 为步进。
- **阻止击杀按钮互动**：开启时阻止击杀按钮使用者与间谍之间的互动；关闭时不阻止。

<!-- en -->
## Role

Only one Spy can spawn in a match. When someone uses their kill button on the Spy, including an ability activated through that button, the Spy sees that player's name in orange for a few seconds. Crewmate abilities can trigger the same effect. The Spy sees no orange names when they have no ability uses left. If the kill-button interaction is blocked, the attacker's cooldown resets to 10 seconds.

## Settings

- **Initial ability uses**: Sets how many uses the Spy starts with.
- **Colored name duration**: Sets how long the target's name stays colored.
- **Ability uses gained per task**: Sets the uses gained for each completed task, in 0.1 increments.
- **Block kill-button interaction**: ON stops the interaction between the killer and the Spy; OFF allows it.
