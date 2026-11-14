---
{"id":"role-quickshooter","kind":"role","category":"impostor","title":{"zh-CN":"快枪手","en":"Quick Shooter"},"summary":{"zh-CN":"击杀冷却结束后变形可储存子弹并重置冷却；会议开始时子弹会被限制到设定上限。","en":"After kill cooldown ends, shapeshifting stores a bullet and resets cooldown; the meeting bullet count is capped by a setting."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/QuickShooter.cs"}
---

<!-- zh-CN -->
## 技能

击杀冷却结束后，变形可以重置冷却并储存一发子弹；储存成功时会出现护盾动画。击杀后可消耗储存的子弹来抵消后续击杀冷却。每次会议开始时，子弹数会限制到房主设定的上限。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名快枪手。
- **击杀冷却**：设置击杀冷却。
- **变形冷却**：设置变形冷却。
- **会议保留子弹上限**：设置每次会议开始时最多可保留的子弹数。

<!-- en -->
## Ability

After the kill cooldown ends, shapeshifting resets it and stores one bullet; a shield-like animation confirms a successful storage. After a kill, stored bullets can offset the next kill cooldown. At the start of each meeting, the bullet count is capped at the configured limit.

## Options

- **Max**: Maximum number of Quick Shooters in a match.
- **Kill Cooldown**: The Quick Shooter’s kill cooldown.
- **Shapeshift Cooldown**: The Quick Shooter’s shapeshift cooldown.
- **Max Bullets Reserved for a Meeting**: Maximum number of bullets the Quick Shooter can keep when a meeting starts.
