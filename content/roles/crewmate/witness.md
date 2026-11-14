---
{"id":"role-witness","kind":"role","category":"crewmate","title":{"zh-CN":"目击者","en":"Witness"},"summary":{"zh-CN":"目击者对玩家使用击杀按钮后可判断其是否在设定时间内杀过人。","en":"After using the kill button on a player, the Witness learns whether that player killed within a configurable time window."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Witness.cs"}
---

<!-- zh-CN -->
## 职业能力

目击者对玩家使用击杀按钮后，会得知该玩家是否在最近一段时间内杀过人；时间窗口由设置决定。未击杀的目标显示勾号，近期击杀者显示警告符号。

## 设置

- **技能冷却**：设置目击者再次调查前的等待时间。
- **击杀者显示红名的最长时间**：设置目标在击杀发生后的多长时间内仍会被判断为近期杀手。

<!-- en -->
## Role

When the Witness uses the kill button on someone, they learn whether that player killed within the recent time window set by the host. A check mark indicates the target has not killed; a warning mark indicates they have.

## Settings

- **Ability cooldown**: Sets how long the Witness must wait before using the ability again.
- **Maximum time after killing where killer appears red**: Sets how long after a kill the player is still identified as a recent killer.
