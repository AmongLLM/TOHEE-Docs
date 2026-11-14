---
{"id":"role-admirer","kind":"role","category":"crewmate","title":{"zh-CN":"仰慕者","en":"Admirer"},"summary":{"zh-CN":"仰慕者可将目标转为仰慕者身份；若自身已转化，会尝试让目标加入相同阵营。是否记录已仰慕的目标取决于“知道被仰慕者的职业”选项。","en":"The Admirer can convert a target to Admired; if the Admirer has been converted, they attempt to convert the target to the same faction. Whether targets are tracked depends on the role-knowledge setting."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Admirer.cs"}
---

<!-- zh-CN -->
## 职业能力

普通仰慕者会将目标转为仰慕者；若仰慕者已成为叛徒、招募者、魅惑者、感染者或传染者，则会尝试将目标转为相应身份。开启“知道被仰慕者的职业”时会记录目标并阻止重复选择；关闭时不记录已选择的目标。技能次数由设置决定。

## 设置

- **数量上限**：设置一局中仰慕者的最大人数。
- **仰慕冷却**：设置再次使用能力前的等待时间。
- **知道被仰慕者的职业**：开启时仰慕者会得知并记录目标职业，也会阻止重复选择同一目标；关闭时不记录已选择的目标，因此可能再次选择同一目标。
- **技能次数上限**：设置仰慕者可以使用技能的次数。

<!-- en -->
## Role

An unconverted Admirer changes the target to Admired. If the Admirer has been converted to Madmate, Recruit, Charmed, Infected, or Contagious, they attempt to apply that same conversion to the target. When **Know the admired player's role** is enabled, targets are recorded and cannot be selected again; when it is off, previous targets are not recorded. Ability uses are configurable.

## Settings

- **Maximum count**: Sets the maximum number of Admirers in a match.
- **Admire cooldown**: Sets how long the Admirer must wait before using the ability.
- **Know the admired player's role**: ON reveals and records the target's role, which prevents selecting the same target again; OFF does not record previous targets, so they may be selected again.
- **Skill limit**: Sets how many times the Admirer can use the ability.
