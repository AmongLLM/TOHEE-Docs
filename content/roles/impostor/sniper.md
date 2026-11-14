---
{"id":"role-sniper","kind":"role","category":"impostor","title":{"zh-CN":"狙击手","en":"Sniper"},"summary":{"zh-CN":"变形开始到解除变形形成射线，弹道上最符合判定的玩家会被狙杀；弹药耗尽后才能普通击杀。","en":"Uses the line from shapeshift to unshift as a shot path; the best match along it is killed, and normal kills are available after ammo runs out."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Sniper.cs"}
---

<!-- zh-CN -->
## 技能

变形开始的位置到解除变形的位置构成射击方向；弹道上符合判定的玩家会被狙杀。每次完成射击消耗一发子弹。会议开始会结束正在进行的瞄准，但不会发射或消耗子弹。弹药耗尽后，默认才可普通击杀；选项可允许在仍有子弹时普通击杀。

## 选项

- **弹药数量**：设置可用子弹数。
- **精准射击**：开启时弹道判定范围更窄、更精准；关闭时射线容错范围更宽。
- **瞄准辅助**：开启时，保持瞄准约半秒且弹道上存在可命中目标时显示提示；关闭时不提示。
  - **单次提示**：开启时瞄准提示只短暂闪现；关闭时符合条件期间持续显示。
- **弹药未用完时可以击杀**：开启时即使还有子弹也可普通击杀；关闭时需用完子弹才能普通击杀。

<!-- en -->
## Ability

The line from the Sniper’s shapeshift location to its unshift location sets the shot direction. A player along the path who satisfies the hit check is killed. Each completed shot consumes one bullet. A meeting ends an active aim without firing or consuming a bullet. By default, normal kills become available only after ammunition runs out; a setting can allow normal kills while bullets remain.

## Options

- **Ammo**: Number of bullets available.
- **Precise Shooting**: When enabled, the hit corridor is narrower and more precise; when disabled, it is wider.
- **Aim Assist**: When enabled, holding aim in place for about half a second shows an indicator if a valid target is in the shot path; otherwise no indicator is shown.
  - **One Shot Assist**: When enabled, the indicator flashes briefly; otherwise it remains visible while the aim condition is met.
- **Sniper Can Kill with Bullets Remaining**: When enabled, normal kills are allowed even with bullets left; otherwise the Sniper must use all bullets first.
