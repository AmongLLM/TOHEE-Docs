---
{"id":"role-reverie","kind":"role","category":"crewmate","title":{"zh-CN":"遐想者","en":"Reverie"},"summary":{"zh-CN":"遐想者可以击杀，但初始冷却很长；击杀船员会延长冷却，击杀其他目标则会缩短冷却。","en":"The Reverie can kill but starts with a long cooldown; killing a Crewmate lengthens it, while killing other targets shortens it."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Reverie.cs"}
---

<!-- zh-CN -->
## 职业能力

遐想者可以击杀，但开局击杀冷却较长。击杀船员会增加击杀冷却，击杀其他目标则会减少冷却；冷却在设置的上下限内变化。可设置达到最高冷却时是否走火自杀、会议后是否重置冷却，以及转换后的遐想者是否能无惩罚地击杀任何人。

## 设置

- **数量上限**：设置一局中遐想者的最大人数。
- **初始击杀冷却**：设置遐想者开局时的击杀冷却。
- **击杀船员时增加的冷却时间**：设置击杀船员后增加多少冷却。
- **击杀其他目标时减少的冷却时间**：设置击杀非船员目标后减少多少冷却。
- **最低/最高击杀冷却**：分别设置击杀冷却的上下限。
- **达到最高冷却时走火自杀**：开启时遐想者在最高冷却时走火自杀；关闭时不会。
- **会议后重置冷却**：开启时会议后恢复初始冷却；关闭时保留当前冷却。
- **转换后的遐想者可无惩罚击杀**：开启时非船员阵营遐想者可随意击杀且不受惩罚；关闭时不适用此规则。

<!-- en -->
## Role

The Reverie can kill but starts with a high cooldown. Killing a Crewmate increases the cooldown; killing another kind of target reduces it, within configured limits. Settings control whether reaching the maximum causes a misfire, whether the cooldown resets after meetings, and whether a converted Reverie can kill anyone without repercussions.

## Settings

- **Maximum count**: Sets the maximum number of Reveries in a match.
- **Starting kill cooldown**: Sets the Reverie's cooldown at the start of the game.
- **Increase kill cooldown**: Sets how much cooldown is added after killing a Crewmate.
- **Reduce kill cooldown by**: Sets how much cooldown is removed after killing another kind of target.
- **Minimum / maximum kill cooldown**: Sets the lower and upper cooldown limits.
- **Misfire on reaching maximum cooldown**: ON makes the Reverie die in a misfire at maximum cooldown; OFF prevents this.
- **Reset cooldown after meeting**: ON resets the cooldown to its starting value after a meeting; OFF keeps the current value.
- **Converted Reverie can kill anyone without repercussions**: ON grants this to converted Reveries; OFF does not.
