---
{"id":"role-anonymous","kind":"role","category":"impostor","title":{"zh-CN":"骇客","en":"Anonymous"},"summary":{"zh-CN":"变形骇入合格目标，让其报告骇客共享的近期击杀尸体记录；没有记录时目标会报告自己。","en":"Shapeshifts to hack an eligible target into reporting a body from the shared list of recent Anonymous kills; if none is recorded, the target reports themself."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Anonymous.cs"}
---

<!-- zh-CN -->
## 技能

变形骇入一名合格目标后，目标会立即召开会议，并从所有骇客共享的近期击杀尸体记录中报告一具尸体。若有记录尸体但无法确认骇入者是凶手，会从记录中随机选择；若自上次报告以来没有记录尸体，目标会报告自己。骇入不受尸体能否正常报告的限制。LazyGuy、带有懒惰（Lazy）附加职业的玩家，以及未成年好迷你船员（Nice Mini）不能成为骇入目标。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名骇客。
- **击杀冷却**：设置击杀冷却。
- **骇入次数上限**：设置每局可用骇入的次数。

<!-- en -->
## Ability

Shapeshift into an eligible target to make them immediately call a meeting and report a body from the shared list of recent Anonymous kills. If bodies are recorded but the hacker cannot be confirmed as the killer, one of those bodies is chosen at random; if no body has been recorded since the last report, the target reports themself. Hacking ignores normal body-report checks. LazyGuy, players with the Lazy add-on, and a Nice Mini under 18 cannot be targeted.

## Options

- **Max**: Maximum number of Anonymous roles in a match.
- **Kill Cooldown**: The Anonymous kill cooldown.
- **Ability Use Count**: Maximum number of hacks per game.
