---
{"id":"role-mercenary","kind":"role","category":"impostor","title":{"zh-CN":"嗜血杀手","en":"Mercenary"},"summary":{"zh-CN":"首次击杀后必须在规定时限内再次击杀，否则会自杀；击杀冷却由房主设置。","en":"After its first kill, must kill again before the configured deadline or die by suicide; the host sets its kill cooldown."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Mercenary.cs"}
---

<!-- zh-CN -->
## 技能

首次击杀后，嗜血杀手必须在规定时限内再次击杀，否则会自杀；每次击杀都会重置倒计时，会议结束后倒计时也会重置。击杀冷却由房主设置。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名嗜血杀手。
- **击杀冷却**：设置嗜血杀手的击杀冷却。
- **自杀倒计时**：设置必须在多久内完成击杀，否则自杀。

<!-- en -->
## Ability

After its first kill, the Mercenary must make another kill before the configured deadline or it dies by suicide. Each kill resets the timer, and the timer resets again after a meeting. The host sets its kill cooldown.

## Options

- **Max**: Maximum number of Mercenaries in a match.
- **Kill Cooldown**: Time before the Mercenary can kill again.
- **Time Until Suicide**: How long the Mercenary has to make a kill before dying.
