---
{"id":"role-cursedwolf","kind":"role","category":"impostor","title":{"zh-CN":"呪狼","en":"Cursed Wolf"},"summary":{"zh-CN":"受到攻击时会消耗一次反击次数并阻止击杀；按设置可诅咒杀死攻击者。","en":"When attacked, spends a counter and blocks the kill; a setting determines whether the attacker is also killed by the curse."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/CursedWolf.cs"}
---

<!-- zh-CN -->
## 技能

受到攻击时，呪狼会消耗一次反击次数并阻止这次击杀。根据选项，呪狼还会诅咒并杀死攻击者；次数耗尽后不再能反击。

## 选项

- **数量上限（Max）**：设置本局最多可有多少只呪狼。
- **反击次数上限**：设置可阻止攻击的次数。
- **剩余技能次数时击杀攻击者**：开启时，反击会诅咒并杀死攻击者；关闭时只阻止攻击。

<!-- en -->
## Ability

When attacked, the Cursed Wolf spends one counter and blocks the kill. Depending on the setting, it also curses and kills the attacker. It cannot counter after its uses are depleted.

## Options

- **Max**: Maximum number of Cursed Wolves in a match.
- **Amount of Cursed Shields**: Number of attacks the Cursed Wolf can block.
- **Kill Attacker When Ability Is Remaining**: When enabled, a counter also kills the attacker; when disabled, it only blocks the attack.
