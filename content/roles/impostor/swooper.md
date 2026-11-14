---
{"id":"role-swooper","kind":"role","category":"impostor","title":{"zh-CN":"隐匿者","en":"Swooper"},"summary":{"zh-CN":"使用通风口进入短暂隐身，再次使用通风口可提前解除。","en":"Uses a vent to become temporarily invisible and can use a vent again to end it early."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Swooper.cs"}
---

<!-- zh-CN -->
## 技能

使用通风口进入短暂隐身；再次使用通风口可以提前解除隐身。持续时间结束时会强制现形；会议开始会解除隐身，会议结束后隐身冷却重新开始。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名隐匿者。
- **隐身冷却**：设置再次使用隐身技能前的等待时间。
- **隐身持续时间**：设置隐身状态持续多久。
- **隐身冷却期间可正常使用通风口**：开启时，隐身技能冷却中仍可正常使用通风口；关闭时，技能冷却期间不能正常使用通风口。

<!-- en -->
## Ability

Use a vent to become invisible temporarily. Using a vent again ends invisibility early. The Swooper is forced to reappear when the duration expires. A meeting also ends invisibility, and the cooldown starts over after the meeting.

## Options

- **Max**: Maximum number of Swoopers in a match.
- **Swoop Cooldown**: Time before the ability can be used again.
- **Swoop Duration**: How long invisibility lasts.
- **Swooper Vents Normally When Swooping Is on Cooldown**: When enabled, the Swooper can use vents normally while the invisibility ability is on cooldown; when disabled, it cannot.
