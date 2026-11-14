---
{"id":"role-overseer","kind":"role","category":"crewmate","title":{"zh-CN":"预言家","en":"Overseer"},"summary":{"zh-CN":"预言家使用击杀按钮揭示附近最近玩家的职业，但必须在有限视野内靠近目标一段时间。","en":"The Overseer uses the kill button to reveal the nearest player's role, but must stay close to the target for a set time and has limited vision."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Overseer.cs"}
---

<!-- zh-CN -->
## 职业能力

预言家的视野有限。使用击杀按钮扫描最近玩家时，目标旁会显示标记，只有预言家能看到；预言家必须在有限视野内靠近目标一段时间才能揭示其职业，离得太远会取消扫描。

## 设置

- **数量上限**：设置一局中预言家的最大人数。
- **揭示冷却**：设置再次发动揭示前的等待时间。
- **揭示时间**：设置必须靠近目标多久才能查看其职业。
- **预言家视野**：设置预言家的视野范围。

<!-- en -->
## Role

The Overseer has limited vision. Using the kill button starts a scan on the nearest player and places a marker by the target that only the Overseer sees. The Overseer must stay close for the configured time to reveal the role; moving too far away cancels the scan.

## Settings

- **Maximum count**: Sets the maximum number of Overseers in a match.
- **Reveal cooldown**: Sets how long the Overseer must wait before using the ability again.
- **Reveal time**: Sets how long the Overseer must stay near the target to reveal their role.
- **Overseer vision**: Sets how far the Overseer can see.
