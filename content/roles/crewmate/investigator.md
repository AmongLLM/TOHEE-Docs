---
{"id":"role-investigator","kind":"role","category":"crewmate","title":{"zh-CN":"研究者","en":"Investigator"},"summary":{"zh-CN":"研究者用击杀按钮调查目标，目标是否拥有击杀按钮会分别显示为红名或浅蓝名。","en":"The Investigator uses the kill button to inspect a target, whose name appears red or light blue depending on whether they have a kill button."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Investigator.cs"}
---

<!-- zh-CN -->
## 职业能力

研究者对玩家使用击杀按钮调查目标。拥有击杀按钮的目标会显示红名；没有击杀按钮的目标会显示浅蓝名。名字颜色会在会议召开时恢复正常。

## 设置

- **调查冷却**：设置研究者再次调查前的等待时间。
- **调查次数上限**：设置研究者最多可调查的次数。
- **每局调查次数上限**：设置一局中最多可调查的次数。
- **每轮调查次数上限**：设置两次会议之间最多可调查的次数；会议后本轮次数重置。

<!-- en -->
## Role

The Investigator uses the kill button on a player to investigate them. A target with a kill button appears red; a target without one appears light blue. Name colors return to normal when a meeting is called.

## Settings

- **Investigation cooldown**: Sets how long the Investigator must wait before investigating again.
- **Maximum investigations**: Sets the total number of investigations per game.
- **Maximum investigations per round**: Sets how many investigations can be made between meetings; the round limit resets after a meeting.
