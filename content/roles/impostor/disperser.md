---
{"id":"role-disperser","kind":"role","category":"impostor","title":{"zh-CN":"分散者","en":"Disperser"},"summary":{"zh-CN":"使用幽灵技能将所有存活且可传送的玩家随机传送到通风口。","en":"Uses its Phantom ability to teleport all living players who can be teleported to random vents."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Disperser.cs"}
---

<!-- zh-CN -->
## 技能

使用幽灵技能后，会尝试把所有存活且可传送的玩家传送到随机通风口；当时无法传送的玩家会被跳过。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名分散者。
- **变形冷却**：设置再次发动能力前的等待时间。
- **变形持续时间**：设置变形持续时间。

<!-- en -->
## Ability

Using the Phantom ability attempts to send every living player who can be teleported to a random vent. Players who cannot be teleported at that moment are skipped.

## Options

- **Max**: Maximum number of Dispersers in a match.
- **Shapeshift Cooldown**: Time before the ability can be used again.
- **Shapeshift Duration**: Duration of the shapeshift.
