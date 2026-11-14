---
{"id":"role-soulcatcher","kind":"role","category":"impostor","title":{"zh-CN":"夺魂者","en":"Soul Catcher"},"summary":{"zh-CN":"变形完成后与目标交换位置；目标处于死亡、通风口或被吞等异常状态时不会交换。","en":"Swaps places with the target unless that player is dead, vented, swallowed, or otherwise abnormal."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/SoulCatcher.cs"}
---

<!-- zh-CN -->
## 技能

变形完成后，夺魂者会与变形目标交换位置。若目标死亡、处于通风口、被吞入腹中或处于其他异常状态，则不会发生交换。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名夺魂者。
- **变形持续时间**：设置变形可持续多久。
- **变形冷却**：设置再次变形前的等待时间。

<!-- en -->
## Ability

After shapeshifting, the Soul Catcher swaps places with its target. No swap occurs if the target is in an abnormal state, such as being dead, inside a vent, or swallowed.

## Options

- **Max**: Maximum number of Soul Catchers in a match.
- **Shapeshift Duration**: How long a shapeshift can last.
- **Shapeshift Cooldown**: How long you must wait before shapeshifting again.
