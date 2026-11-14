---
{"id":"role-mayor","kind":"role","category":"crewmate","title":{"zh-CN":"市长","en":"Mayor"},"summary":{"zh-CN":"市长拥有额外投票，并可按设置使用便携紧急会议按钮；公开身份及额外票显示方式也可调整。","en":"The Mayor has extra votes and may use a portable emergency-meeting button, with settings for vote display and identity reveal."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Mayor.cs"}
---

<!-- zh-CN -->
## 职业能力

市长拥有额外投票。根据设置，市长还可以通过通风口使用便携紧急会议按钮。

## 设置

- **数量上限**：设置一局中市长的最大人数。
- **额外票数**：设置市长获得的额外投票数。
- **市长拥有便携紧急按钮**：开启时市长可通过通风口召开紧急会议；关闭时只能按普通方式召开会议。
- **便携紧急按钮次数上限**：设置市长最多可通过通风口召开多少次紧急会议。
- **隐藏额外投票**：开启时额外票不显示；关闭时按普通投票显示。
- **完成任务后向所有人公开市长**：开启时完成任务后公开身份；关闭时不公开。公开后市长不能被职业猜测。
- **自定义市长任务**：开启时可单独设置任务数量；关闭时与其他玩家任务相同。自定义内容包括公共任务、长任务和短任务。

<!-- en -->
## Role

The Mayor receives extra votes. Depending on settings, the Mayor may also have a portable emergency button that can be used through vents.

## Settings

- **Maximum count**: Sets the maximum number of Mayors in a match.
- **Additional votes count**: Sets how many extra votes the Mayor receives.
- **Mayor has a mobile emergency button**: ON lets the Mayor call a meeting by venting; OFF requires the normal meeting button.
- **Maximum mobile emergency buttons**: Sets how many emergency meetings the Mayor can call by venting.
- **Hide additional votes**: ON makes the Mayor's extra votes appear as nothing; OFF displays them as normal votes.
- **Mayor is revealed to everyone on task completion**: ON reveals the Mayor after task completion, and the revealed Mayor cannot be guessed; OFF does not reveal them.
- **Override Mayor tasks**: ON allows a separate task setup; OFF gives the Mayor the same task count as everyone else. The custom setup includes common-task availability and the number of long and short tasks.
