---
{"id":"role-swapper","kind":"role","category":"crewmate","title":{"zh-CN":"换票师","en":"Swapper"},"summary":{"zh-CN":"换票师在会议中用 /sw [玩家编号] 选择两名玩家交换票数，且默认不能选择自己。","en":"During a meeting, the Swapper selects two players with /sw [player ID] to exchange their votes, and cannot select themself by default."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Swapper.cs"}
---

<!-- zh-CN -->
## 职业能力

换票师在会议中两次使用 /sw [玩家 ID]，分别选择两名玩家以交换他们的票数。玩家 ID 显示在会议名字旁，也可输入 /id 查看。能否交换自己的票由设置决定。

## 设置

- **数量上限**：设置一局中换票师的最大人数。
- **交换次数上限**：设置换票师最多可交换票数的次数。
- **可以交换自己的票**：开启时允许交换自己的票；关闭时不允许。
- **可以召开紧急会议**：开启时可召开紧急会议；关闭时不能。
- **尝试隐藏换票指令**：开启时模组会尝试隐藏换票师指令；关闭时不尝试隐藏。

<!-- en -->
## Role

During a meeting, the Swapper uses /sw [player ID] twice to select two players whose votes will be exchanged. IDs appear next to names during meetings and can also be listed with /id. A setting controls whether the Swapper can exchange their own vote.

## Settings

- **Maximum count**: Sets the maximum number of Swappers in a match.
- **Maximum swaps**: Sets how many times the Swapper can exchange votes.
- **Can exchange your own vote**: ON allows the Swapper's own vote to be exchanged; OFF does not.
- **Can call emergency meetings**: ON allows the Swapper to call emergency meetings; OFF does not.
- **Try to hide Swapper command**: ON makes the mod attempt to hide the Swapper's commands; OFF does not.
