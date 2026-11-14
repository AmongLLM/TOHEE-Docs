---
{"id":"role-devourer","kind":"role","category":"impostor","title":{"zh-CN":"吞噬者","en":"Devourer"},"summary":{"zh-CN":"变形永久改变目标外观并按改变人数缩短击杀冷却；吞噬者死亡或出局后外观恢复。","en":"Shapeshifts to permanently change target appearances and reduce kill cooldown per changed player; effects revert if the Devourer dies or is ejected."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Devourer.cs"}
---

<!-- zh-CN -->
## 技能

变形会永久改变目标外观；每改变一名玩家都会缩短击杀冷却。吞噬者死亡或被放逐后，受影响玩家恢复原本外观。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名吞噬者。
- **初始击杀冷却**：设置初始击杀冷却。
- **每次吞噬减少的击杀冷却**：设置每改变一名玩家外观后减少的冷却。
- **最低击杀冷却**：设置击杀冷却的最低值。
- **吞噬冷却**：设置再次改变外观前的等待时间。
- **隐藏被吞噬玩家名字**：开启时隐藏受影响玩家名字；关闭时显示。
- **显示变形动画**：开启时显示变形动画；关闭时不显示。

<!-- en -->
## Ability

Shapeshifting permanently changes the target’s appearance. Each player whose appearance is changed reduces the kill cooldown. Affected players return to normal appearance if the Devourer dies or is ejected.

## Options

- **Max**: Maximum number of Devourers in a match.
- **Starting Kill Cooldown**: Initial kill cooldown.
- **Reduce Kill Cooldown By**: Cooldown reduction for each changed player.
- **Minimum Kill Cooldown**: Lowest possible kill cooldown.
- **Devour Cooldown**: Time before changing another player’s appearance.
- **Hide the Names of Consumed Players**: When enabled, affected players’ names are hidden; otherwise they remain visible.
- **Show Shapeshift Animations**: When enabled, shapeshift animations are shown; otherwise they are hidden.
