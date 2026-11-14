---
{"id":"role-possessor","kind":"role","category":"impostor","title":{"zh-CN":"附身者","en":"Possessor"},"summary":{"zh-CN":"在警戒范围内无人靠近时附身并拖慢目标；若结束时焦点范围内无人，目标会死亡。","en":"Possesses and slows a target when no one is within alert range; the target dies if no one is within focus range when possession ends."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/(Ghosts)/Impostor/Possessor.cs"}
---

<!-- zh-CN -->
## 技能

使用保护技能附身非内鬼目标。若目标周围的警戒范围内有其他玩家，附身会失败。附身期间目标移动速度会降低，附身者会跟随目标；其他玩家进入警戒范围时附身立即结束。持续时间结束后，若焦点范围内没有其他玩家，目标会死亡；否则目标存活。附身者不能发动破坏。

## 选项

- **附身冷却**：设置再次附身前的等待时间。
- **附身持续时间**：设置控制目标多久。
- **警戒范围**：目标附近此范围内有玩家时无法开始附身；附身期间有人进入此范围也会解除附身。
- **焦点范围**：附身结束时，若附近没有其他玩家处于此范围内，目标会死亡。

<!-- en -->
## Ability

Use the protection ability to possess a non-Impostor target. Possession fails if another player is within the Alert Range of the target. While possessed, the target is slowed and the Possessor follows them. Another player entering the Alert Range ends possession immediately. When the duration ends, the target dies if no other player is within the Focus Range; otherwise the target survives. The Possessor cannot sabotage.

## Options

- **Possession Cooldown**: Time before the ability can be used again.
- **Possession Duration**: How long possession lasts.
- **Alert Range**: Possession cannot start if anyone is in this range around the target; anyone entering it during possession ends the effect.
- **Focus Range**: The target dies at the end of possession if no one else is within this range.
