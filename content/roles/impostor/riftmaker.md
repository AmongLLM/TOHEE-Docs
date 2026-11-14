---
{"id":"role-riftmaker","kind":"role","category":"impostor","title":{"zh-CN":"裂缝制造者","en":"Rift Maker"},"summary":{"zh-CN":"变形放置最多两道裂缝；靠近一道裂缝可按冷却传送到另一道，进通风口会摧毁所有裂缝。","en":"Shapeshifts to place up to two rifts; approaching one teleports to the other after a cooldown, while venting destroys all rifts."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/RiftMaker.cs"}
---

<!-- zh-CN -->
## 技能

变形可在当前位置放置一道裂缝。最多保留两道；放置第三道时移除最早的一道。两道裂缝之间距离过近时无法放置。玩家进入一道裂缝的设定半径后，会在传送冷却结束时传送到另一道裂缝。尝试进通风口会被弹出并摧毁所有裂缝；会议也会重置传送冷却。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名裂缝制造者。
- **击杀冷却**：设置击杀冷却。
- **变形冷却**：设置再次放置裂缝前的等待时间。
- **传送冷却**：设置使用裂缝传送后的等待时间。
- **裂缝半径**：设置进入裂缝后触发传送的范围。
- **显示变形动画**：开启时显示变形动画；关闭时不显示。

<!-- en -->
## Ability

Shapeshifting places a rift at the current location. Up to two rifts can remain; placing a third removes the oldest. Rifts placed too close together are rejected. Entering the configured radius around one rift teleports the player to the other when the teleport cooldown is ready. Trying to enter a vent ejects the Rift Maker and destroys all rifts. Meetings reset the teleport cooldown.

## Options

- **Max**: Maximum number of Rift Makers in a match.
- **Kill Cooldown**: The Rift Maker kill cooldown.
- **Shapeshift Cooldown**: Time before the Rift Maker can place another rift.
- **Teleport Cooldown**: Time between rift teleports.
- **Rift Radius**: Distance from a rift required to trigger teleportation.
- **Show Shapeshift Animations**: When enabled, shapeshift animations are visible; otherwise they are hidden.
