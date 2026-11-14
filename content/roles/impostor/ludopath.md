---
{"id":"role-ludopath","kind":"role","category":"impostor","title":{"zh-CN":"速度者","en":"Ludopath"},"summary":{"zh-CN":"每次击杀后，击杀冷却会在 1 秒至“最大击杀冷却”上限间随机变化（上限值不计入）。","en":"After each kill, the cooldown is randomized from 1 second up to, but not including, the configured maximum."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Ludopath.cs"}
---

<!-- zh-CN -->
## 技能

每次击杀后，击杀冷却会随机设为 1 秒至所设“最大击杀冷却”上限；随机结果不包含上限值。若上限为 1 秒，冷却固定为 1 秒。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名速度者。
- **最大击杀冷却**：设置随机冷却时间的上限。

<!-- en -->
## Ability

After each kill, the cooldown is randomized from 1 second up to, but not including, the configured maximum. If that maximum is 1 second, the cooldown is fixed at 1 second.

## Options

- **Max**: Maximum number of Ludopaths in a match.
- **Maximum Kill Cooldown**: Upper bound for the randomized cooldown.
