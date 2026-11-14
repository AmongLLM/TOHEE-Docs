---
{"id":"role-arrogance","kind":"role","category":"impostor","title":{"zh-CN":"狂妄杀手","en":"Arrogance"},"summary":{"zh-CN":"每次成功击杀都会缩短后续击杀冷却。","en":"Each successful kill reduces the cooldown before the next kill."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Arrogance.cs"}
---

<!-- zh-CN -->
## 技能

每次成功击杀都会缩短击杀冷却，缩短幅度受设置控制。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名狂妄杀手。
- **初始击杀冷却**：设置开局时的击杀冷却。
- **每次击杀减少的冷却**：设置每次成功击杀后减少的秒数。
- **最低击杀冷却**：设置击杀冷却可降到的最低值。

## 隐藏职业

在隐藏职业启用时，吟游诗人有一定概率替代狂妄杀手出现；概率由隐藏职业设置决定。

<!-- en -->
## Ability

Each successful kill reduces the cooldown before the next kill by the configured amount.

## Options

- **Max**: Maximum number of Arrogance roles in a match.
- **Starting Kill Cooldown**: Initial kill cooldown.
- **Reduce Kill Cooldown By**: Cooldown reduction after each successful kill.
- **Minimum Kill Cooldown**: Lowest possible kill cooldown.

## Hidden Role

When hidden roles are enabled, Bard has a chance to appear in place of Arrogance. The chance is controlled by the hidden-role settings.
