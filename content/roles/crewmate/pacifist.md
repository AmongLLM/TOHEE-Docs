---
{"id":"role-pacifist","kind":"role","category":"crewmate","title":{"zh-CN":"和平之鸽","en":"Pacifist"},"summary":{"zh-CN":"和平之鸽钻通风口后会重置所有拥有击杀按钮玩家的击杀冷却，成为叛徒时仅影响船员。","en":"The Pacifist can vent to reset kill cooldowns for everyone with a kill button; as a Mad Pacifist, the effect applies only to Crew."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Pacifist.cs"}
---

<!-- zh-CN -->
## 职业能力

和平之鸽钻通风口后，会重置所有拥有击杀按钮玩家的击杀冷却，即使其技能实际上不能击杀目标（例如医生）。成为叛徒和平之鸽时，能力只影响船员阵营。

## 设置

- **数量上限**：设置一局中和平之鸽的最大人数。
- **技能冷却**：设置再次使用能力前的等待时间。
- **技能使用次数上限**：设置最多可重置冷却的次数。
- **每完成一个任务获得的技能次数**：设置每完成一个任务增加的次数，按 0.1 为步进。

<!-- en -->
## Role

When the Pacifist vents, they reset the kill cooldown for everyone with a kill button, even if that player cannot actually kill, such as the Medic. As a Mad Pacifist, the ability affects only Crewmates.

## Settings

- **Maximum count**: Sets the maximum number of Pacifists in a match.
- **Ability cooldown**: Sets how long the Pacifist must wait before resetting cooldowns again.
- **Maximum ability uses**: Sets how many times the Pacifist can reset cooldowns.
- **Ability uses gained per task**: Sets the uses gained for each completed task, in 0.1 increments.
