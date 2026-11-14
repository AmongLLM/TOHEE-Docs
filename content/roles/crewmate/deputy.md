---
{"id":"role-deputy","kind":"role","category":"crewmate","title":{"zh-CN":"捕快","en":"Deputy"},"summary":{"zh-CN":"捕快用击杀按钮给有效目标戴上手铐并消耗一次技能次数；目标不需要有击杀按钮。","en":"The Deputy uses the kill button to handcuff a valid target and spend one use; the target does not need a kill button."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Deputy.cs"}
---

<!-- zh-CN -->
## 职业能力

捕快对有效目标使用击杀按钮会为其戴上手铐并重置目标的击杀冷却，且消耗一次技能次数；目标不需要有击杀按钮。捕快不能以自己为目标，且无法铐住连续杀手。

## 设置

- **数量上限**：设置一局中捕快的最大人数。
- **手铐冷却**：设置捕快再次使用技能前的等待时间。
- **被铐玩家的击杀冷却**：设置捕快互动后，被铐玩家所具有的击杀冷却时间。
- **手铐次数上限**：设置捕快可使用的最大技能次数。

<!-- en -->
## Role

When the Deputy uses the kill button on a valid target, they handcuff that target and reset the target's kill cooldown, spending one use. The target does not need a kill button. The Deputy cannot target themself or a Serial Killer.

## Settings

- **Maximum count**: Sets the maximum number of Deputies in a match.
- **Handcuff cooldown**: Sets how long the Deputy must wait before using the ability again.
- **Kill cooldown for handcuffed player**: Sets the kill cooldown a handcuffed player has after the Deputy interacts with them.
- **Maximum handcuffs**: Sets the maximum number of ability uses the Deputy has.
