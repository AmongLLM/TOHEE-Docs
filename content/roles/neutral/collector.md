---
{"id":"role-collector","kind":"role","category":"neutral","title":{"en":"Collector","zh-CN":"集票者"},"summary":{"zh-CN":"每次会议投给一名玩家并收集该玩家本次收到的票数；分数会跨会议累积，存活且达到门槛时获胜。","en":"Vote for a player each meeting and collect all votes cast for them; the score accumulates across meetings, and the Collector wins if alive at the threshold."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Collector.cs"}
---
<!-- zh-CN -->
## 集票者

集票者在会议中投给目标后，会收集该目标本次收到的所有票数（包括集票者投给该目标的票）。分数跨会议累积；达到设定分数且仍存活时，集票者获胜。

### 设置

- **人数上限**：一局中可出现的集票者数量上限。
- **获胜所需票数**：集票者需要收集的票数。

<!-- en -->
## Collector

During each meeting, the Collector votes for a player and collects the total number of votes that player received, including the Collector's vote if they voted for that player. The score accumulates across meetings. Reach the configured number while still alive to win.

### Settings

- **Maximum number:** Maximum number of Collectors in a match.
- **Votes required:** Number of votes the Collector must collect to win.
