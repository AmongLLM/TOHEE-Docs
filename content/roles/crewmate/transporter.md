---
{"id":"role-transporter","kind":"role","category":"crewmate","title":{"zh-CN":"传送师","en":"Transporter"},"summary":{"zh-CN":"传送师完成任务时会从可传送的存活玩家中随机交换两人的位置；通风口中的玩家会被排除。","en":"When the Transporter completes a task, two eligible living players swap positions; players in vents are excluded."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Transporter.cs"}
---

<!-- zh-CN -->
## 职业能力

传送师每完成一个任务，会从可传送的存活玩家中随机选择两人交换位置。正在使用通风口的玩家不会被选中；只要还有两名合格玩家，其他玩家仍可交换。

## 设置

- **数量上限**：设置一局中传送师的最大人数。
- **传送次数上限**：设置传送师最多可以触发多少次位置交换。
- **自定义传送师任务**：开启时可单独设置传送师的任务数量；关闭时与其他玩家任务数量相同。自定义选项包括公共任务、长任务和短任务的设置。

<!-- en -->
## Role

Whenever the Transporter completes a task, two eligible living players are chosen at random and swap positions. Players in vents are excluded, and other eligible players can still be swapped if at least two remain.

## Settings

- **Maximum count**: Sets the maximum number of Transporters in a match.
- **Maximum teleports**: Sets how many swaps the Transporter can trigger.
- **Override Transporter tasks**: ON allows a separate task setup; OFF gives the Transporter the same task count as everyone else. The custom setup includes common-task availability and the number of long and short tasks.
