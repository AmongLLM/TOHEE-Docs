---
{"id":"role-zombie","kind":"role","category":"impostor","title":{"zh-CN":"僵尸","en":"Zombie"},"summary":{"zh-CN":"击杀冷却短、移动缓慢且视野极小；只有独裁者能投出僵尸，击杀冷却更新时速度会继续降低。","en":"Has a short kill cooldown, slow movement, and low vision; only Dictator can vote it out, and speed drops further when kill cooldown resets."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Zombie.cs"}
---

<!-- zh-CN -->
## 技能

僵尸的击杀冷却很短，但移动速度和视野都很低。只有独裁者能将僵尸投出。每次击杀冷却更新（包括击杀后）都会按设置进一步降低移动速度。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名僵尸。
- **击杀冷却**：设置击杀冷却。
- **移动速度降低量**：设置每次击杀冷却更新时减少的移动速度。

<!-- en -->
## Ability

The Zombie has a short kill cooldown, but moves very slowly and has very low vision. Only the Dictator can vote it out. Each time its kill cooldown is set, including after a kill, its speed is reduced by the configured amount.

## Options

- **Max**: Maximum number of Zombies in a match.
- **Kill Cooldown**: Time before the Zombie can kill again.
- **Zombie Speed Reduction**: Amount removed from movement speed whenever the kill cooldown is set.
