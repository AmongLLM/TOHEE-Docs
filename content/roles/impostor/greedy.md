---
{"id":"role-greedy","kind":"role","category":"impostor","title":{"zh-CN":"贪婪者","en":"Greedy"},"summary":{"zh-CN":"奇数次和偶数次击杀使用不同冷却；每次会议后计数重置，下一次击杀重新按奇数计算。","en":"Uses separate cooldowns for odd- and even-numbered kills; the count resets at each meeting."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Greedy.cs"}
---

<!-- zh-CN -->
## 技能

贪婪者的击杀冷却按击杀次数奇偶交替：第 1、3、5 次等使用奇数次冷却，第 2、4、6 次等使用偶数次冷却。每次会议后击杀计数重置，因此会后第一次击杀总是按奇数次计算。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名贪婪者。
- **奇数次击杀冷却**：设置第 1、3、5 次等击杀后的冷却。
- **偶数次击杀冷却**：设置第 2、4、6 次等击杀后的冷却。

<!-- en -->
## Ability

The Greedy alternates between cooldowns for odd- and even-numbered kills: kills 1, 3, 5, and so on use the odd cooldown; kills 2, 4, 6, and so on use the even cooldown. The count resets at each meeting, so the first kill afterward always uses the odd cooldown.

## Options

- **Max**: Maximum number of Greedy roles in a match.
- **Odd-Numbered Kill Cooldown**: Cooldown after kills 1, 3, 5, and so on.
- **Even-Numbered Kill Cooldown**: Cooldown after kills 2, 4, 6, and so on.
