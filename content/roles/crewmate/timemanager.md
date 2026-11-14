---
{"id":"role-timemanager","kind":"role","category":"crewmate","title":{"zh-CN":"时间操控者","en":"Time Manager"},"summary":{"zh-CN":"时间操控者完成任务会延长会议投票时间，成为叛徒时则缩短时间，死亡后所有改动恢复。","en":"Tasks increase the Time Manager's meeting voting time, or decrease it as a Mad Time Manager; all changes revert on death."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/TimeManager.cs"}
---

<!-- zh-CN -->
## 职业能力

时间操控者完成的任务越多，会议投票时间越长。成为叛徒时间操控者时，完成任务会反向缩短时间。时间操控者死亡后，之前增加或减少的会议时间全部恢复正常。

## 设置

- **数量上限**：设置一局中时间操控者的最大人数。
- **每个任务增加的投票时间**：设置时间操控者每完成一个任务增加的投票时间。
- **会议时长上限**：设置会议时长的上限。
- **叛徒时间操控者的最短投票时间**：设置叛徒时间操控者减少时间时，投票时间可达到的最低值。
- **自定义时间操控者任务**：开启时可单独设置任务数量；关闭时任务数量与其他玩家相同。自定义选项包括公共任务、长任务和短任务的设置。

<!-- en -->
## Role

The more tasks the Time Manager completes, the longer the meeting voting time becomes. As a Mad Time Manager, completing tasks has the opposite effect and shortens the time. When the Time Manager dies, all meeting-time changes they caused revert to normal.

## Settings

- **Maximum count**: Sets the maximum number of Time Managers in a match.
- **Increase voting time by**: Sets how much voting time is added for each task the Time Manager completes.
- **Maximum meeting length**: Sets the cap for meeting length.
- **Mad Time Manager minimum voting time**: Sets the minimum voting time that can remain as the Mad Time Manager reduces it.
- **Override Time Manager tasks**: ON allows a separate task setup; OFF gives the role the same task count as everyone else. The custom setup includes common-task availability and the number of long and short tasks.
