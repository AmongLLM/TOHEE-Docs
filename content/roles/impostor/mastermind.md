---
{"id":"role-mastermind","kind":"role","category":"impostor","title":{"zh-CN":"策划者","en":"Mastermind"},"summary":{"zh-CN":"操纵拥有击杀按钮的目标，限时内若未击杀或先召开会议就会死亡；双击可普通击杀。","en":"Manipulates targets with a kill button; they die if they fail to kill before the deadline or a meeting is called first. Double-clicks kill normally."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Mastermind.cs"}
---

<!-- zh-CN -->
## 技能

使用击杀键操纵目标；若目标没有击杀按钮，操纵无效。被操纵者会在延迟后得知情况，并必须在时限内击杀一人才能存活。超时或在击杀前召开会议，目标都会死亡。双击可普通击杀。

## 选项

- **击杀冷却**：设置策划者的击杀冷却。
- **目标击杀时限**：设置目标必须在多久内完成击杀，否则死亡。
- **操纵通知延迟**：设置目标收到被操纵提示前的延迟。

<!-- en -->
## Ability

Use the kill button to manipulate a target; this has no effect if they have no kill button. The target is notified after a delay and must kill someone before the deadline to survive. The target dies if the timer expires or a meeting is called before they kill. Double-click to make a normal kill.

## Options

- **Kill Cooldown**: The Mastermind’s kill cooldown.
- **Time Limit to Kill Someone**: How long the target has to make a kill before dying.
- **Manipulation Notification Delay**: Delay before the target is notified.
