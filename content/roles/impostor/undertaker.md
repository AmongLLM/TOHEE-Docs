---
{"id":"role-undertaker","kind":"role","category":"impostor","title":{"zh-CN":"暗杀者","en":"Undertaker"},"summary":{"zh-CN":"变形标记尸体传送点；每次击杀或会议会清除标记，传送击杀后会被冻结。","en":"Marks a destination for bodies; each kill or meeting clears it, and a teleporting kill briefly freezes the Undertaker."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Undertaker.cs"}
---

<!-- zh-CN -->
## 技能

每次变形都会标记当前位置。击杀后，受害者的尸体会传送到标记位置；每次击杀后以及每次会议后，标记都会重置。尸体传送后，暗杀者会按设定时间被冻结。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名暗杀者。
- **击杀冷却**：设置再次击杀前的等待时间。
- **变形冷却**：设置再次变形前的等待时间。
- **冻结持续时间**：设置尸体传送后暗杀者无法移动的时间。

<!-- en -->
## Ability

Each shapeshift marks your location. After a kill, the victim’s body is teleported to that location. The mark resets after each kill and after every meeting. The Undertaker is frozen for the configured time after a kill that teleports a body.

## Options

- **Max**: Maximum number of Undertakers in a match.
- **Kill Cooldown**: Time before the Undertaker can kill again.
- **Shapeshift Cooldown**: Time before the Undertaker can shapeshift again.
- **Freeze Duration**: How long the Undertaker is unable to move after teleporting a body.
