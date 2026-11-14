---
{"id":"role-twister","kind":"role","category":"impostor","title":{"zh-CN":"龙卷风","en":"Twister"},"summary":{"zh-CN":"变形开始和解除时各随机交换一次玩家位置；自己和通风口中的玩家不会参与。","en":"Randomly swaps player positions once on shapeshift and again on unshift; the Twister and vented players are excluded."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Twister.cs"}
---

<!-- zh-CN -->
## 技能

变形开始时，其他玩家的位置会随机交换一次；解除变形时再交换一次。龙卷风本人不会参与交换，处于通风口中的玩家也不会被传送。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名龙卷风。
- **交换冷却**：设置再次发动位置交换前的等待时间。
- **变形持续时间**：设置两次交换之间维持变形的时间。
- **隐藏位置交换对象**：开启时，玩家看不到自己与谁交换了位置；关闭时会显示交换对象。

<!-- en -->
## Ability

Player positions are randomly swapped when the Twister begins shapeshifting and again when it unshifts. The Twister does not swap with anyone, and players in vents are not teleported.

## Options

- **Max**: Maximum number of Twisters in a match.
- **Twist Cooldown**: Time before the Twister can swap positions again.
- **Shapeshift Duration**: How long the Twister stays shifted between the two swaps.
- **Hide Who the Players Swap Places With**: When enabled, players cannot see who they swapped with; otherwise the swap partner is visible.
