---
{"id":"role-chronomancer","kind":"role","category":"impostor","title":{"zh-CN":"天文学家","en":"Chronomancer"},"summary":{"zh-CN":"时间自动充能；充满后下一次击杀启动屠杀模式，击杀冷却极短并消耗充能，会议会重置充能。","en":"Automatically charges over time; the next kill at full charge starts a short-cooldown massacre that drains charge, and meetings reset it."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Chronomancer.cs"}
---

<!-- zh-CN -->
## 技能

击杀按钮会随时间自动充能。充满后，下一次击杀会启动屠杀模式；此时击杀冷却降至极短，并持续消耗充能。充能耗尽后屠杀结束。召开会议会清空充能并结束屠杀。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名天文学家。
- **技能充能时间**：设置充满击杀能量所需时间。
- **屠杀充能消耗间隔**：设置屠杀时充能减少的频率；间隔越短，屠杀持续时间越短。
- **屠杀期间的视野**：设置屠杀模式下的视野倍率。

<!-- en -->
## Ability

The kill ability charges automatically over time. Once fully charged, the next kill starts Massacre mode: kill cooldown becomes extremely short while charge drains. Massacre ends when the charge is empty. Calling a meeting clears the charge and ends Massacre.

## Options

- **Max**: Maximum number of Chronomancers in a match.
- **Ability Charge Time**: Time needed to fully charge.
- **Slaughter Decrease Time**: Interval at which charge drains during Massacre; a shorter interval ends it sooner.
- **Vision When in Slaughter**: Vision multiplier during Massacre.
