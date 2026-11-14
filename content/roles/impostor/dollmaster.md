---
{"id":"role-dollmaster","kind":"role","category":"impostor","title":{"zh-CN":"玩偶师","en":"Dollmaster"},"summary":{"zh-CN":"通过变形附身非内鬼玩家并操纵其行动；可设置本体是否能击杀以及解除附身时是否杀死目标。","en":"Shapeshifts to possess and control a non-Impostor; settings control main-body kills and whether the target dies when possession ends."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/DollMaster.cs"}
---

<!-- zh-CN -->
## 技能

使用变形附身一名可传送的非内鬼目标，暂时操纵其执行玩偶师的行动；附身会交换双方位置和外观。再次变形可解除附身并交换回位置。被附身目标不能自行报告尸体或召开会议；玩偶师可将这些操作转交给目标。会议开始会解除附身。若目标不在可传送状态（例如死亡、处于通风口或被吞），附身不会完成。

## 选项

- **击杀冷却**：设置普通击杀冷却。
- **附身冷却**：设置再次附身前的等待时间。
- **附身持续时间**：设置附身效果持续多久。
- **本体可以击杀**：开启时即使未附身也可击杀；关闭时只有附身期间可击杀。
- **解除附身后目标死亡**：开启时解除附身会杀死目标；关闭时目标存活。

<!-- en -->
## Ability

Shapeshift to possess a teleportable non-Impostor and control them to carry out the Dollmaster’s actions. Possession swaps the Dollmaster and target’s positions and appearances. Shapeshifting again ends the possession and swaps them back. The possessed player cannot report bodies or call meetings independently; the Dollmaster can redirect those actions through the target. A meeting ends the possession. Possession cannot complete if either player is in a state that prevents teleportation, such as being dead, vented, or swallowed.

## Options

- **Kill Cooldown**: Time before the Dollmaster can kill again.
- **Possession Cooldown**: Time before possessing another player.
- **Possession Duration**: How long possession lasts.
- **Can Kill as the Main Body**: When enabled, the Dollmaster can kill without possessing a player; when disabled, it can kill only while possessing.
- **Target Dies After Possession**: When enabled, the target dies when possession ends; otherwise the target survives.
