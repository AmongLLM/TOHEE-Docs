---
{"id":"role-grenadier","kind":"role","category":"crewmate","title":{"zh-CN":"掷雷兵","en":"Grenadier"},"summary":{"zh-CN":"掷雷兵可通过通风口投掷闪光弹，降低受影响玩家的视野；成为叛徒时不会影响非船员。","en":"The Grenadier can flash players through vents to reduce their vision; as a Mad Grenadier, the effect does not hinder non-Crew."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Grenadier.cs"}
---

<!-- zh-CN -->
## 职业能力

掷雷兵可以通过通风口投掷闪光弹，降低受影响玩家的视野；掷雷兵会看到自己身上出现护盾动画作为提示。成为叛徒掷雷兵时，能力不会妨碍非船员的视野。

## 设置

- **数量上限**：设置一局中掷雷兵的最大人数。
- **闪光弹冷却**：设置再次投掷前的等待时间。
- **闪光弹持续时间**：设置闪光效果持续多久。
- **受影响后的视野**：设置受到闪光弹影响后的视野范围。
- **可以影响中立阵营**：开启时中立玩家也会受影响；关闭时只有内鬼会受影响。
- **初始手雷数量上限**：设置掷雷兵开局拥有的手雷数量。
- **每完成一个任务获得的手雷数**：设置每完成一个任务增加的手雷数，按 0.1 为步进。

<!-- en -->
## Role

The Grenadier can vent to throw a flashbang that reduces affected players' vision. The Grenadier sees a shield animation on themself as a reminder. As a Mad Grenadier, the ability does not hinder non-Crew vision.

## Settings

- **Maximum count**: Sets the maximum number of Grenadiers in a match.
- **Grenade cooldown**: Sets how long the Grenadier must wait before flashing players again.
- **Grenade duration**: Sets how long the flash effect lasts.
- **Lowered vision**: Sets the vision level for players affected by a flash.
- **Can affect Neutrals**: ON affects Neutral players; OFF affects only Impostors.
- **Initial maximum grenades**: Sets how many grenades the Grenadier starts with.
- **Grenades gained per task**: Sets the grenades gained for each completed task, in 0.1 increments.
