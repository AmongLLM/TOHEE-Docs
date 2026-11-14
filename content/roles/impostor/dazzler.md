---
{"id":"role-dazzler","kind":"role","category":"impostor","title":{"zh-CN":"眩晕者","en":"Dazzler"},"summary":{"zh-CN":"变形降低目标视野；是否在眩晕者死亡或被放逐后恢复，由设置决定。","en":"Shapeshifts to reduce a target's vision; a setting controls whether the effect ends when the Dazzler dies or is ejected."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Dazzler.cs"}
---

<!-- zh-CN -->
## 技能

变形到玩家身上会降低其视野。是否在眩晕者死亡或被放逐后恢复受影响玩家的视野，由选项控制。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名眩晕者。
- **击杀冷却**：设置击杀冷却。
- **眩晕冷却**：设置再次降低视野前的等待时间。
- **视野降低量**：设置目标视野倍率。
- **受影响人数上限**：设置可同时降低视野的玩家数。
- **死亡／出局时恢复视野**：开启时，眩晕者死亡或被放逐后恢复目标视野；关闭时效果仍保留。
- **显示变形动画**：开启时显示变形动画；关闭时不显示。

<!-- en -->
## Ability

Shapeshifting into a player reduces that player’s vision. A setting controls whether affected players return to normal vision when the Dazzler dies or is ejected.

## Options

- **Max**: Maximum number of Dazzlers in a match.
- **Kill Cooldown**: Dazzler kill cooldown.
- **Dazzle Cooldown**: Time before reducing vision again.
- **Reduced Vision**: Vision multiplier applied to the target.
- **Max Number of Players Affected**: Maximum number of players affected at once.
- **Reset Vision of Dazzled Players on Death/Eject**: When enabled, targets regain normal vision if the Dazzler dies or is ejected; otherwise the effect remains.
- **Show Shapeshift Animations**: When enabled, shapeshift animations are shown; otherwise they are hidden.
