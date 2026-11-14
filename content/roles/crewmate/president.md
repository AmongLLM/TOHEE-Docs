---
{"id":"role-president","kind":"role","category":"crewmate","title":{"zh-CN":"总统","en":"President"},"summary":{"zh-CN":"总统可用 /finish 立即结束会议，并用 /reveal 公开身份；公开后是否仍可被猜测及哪些阵营能看见可设置。","en":"The President can end a meeting with /finish and reveal their identity with /reveal; guessability and which teams see the reveal are configurable."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/President.cs"}
---

<!-- zh-CN -->
## 职业能力

总统有两种会议能力：输入 /finish 可立即结束会议；输入 /reveal 可公开自己的总统身份。只有房主设置允许看到公开消息的阵营会收到提示；默认情况下总统不能被猜测。总统公开身份后，击杀总统的玩家下一次击杀冷却会缩短。

## 设置

- **数量上限**：设置一局中总统的最大人数。
- **结束会议次数上限**：设置总统最多可使用 /finish 结束会议的次数；/reveal 每局固定只能使用一次。
- **公开后仍可猜测总统**：开启时公开身份后仍能猜测总统；关闭时不能。
- **中立阵营可看到公开的总统**：开启时允许中立阵营看到；关闭时不显示给他们。
- **叛徒可看到公开的总统**：开启时允许叛徒看到；关闭时不显示给他们。
- **内鬼可看到公开的总统**：开启时允许内鬼看到；关闭时不显示给他们。
- **隐藏总统指令**：开启时模组会隐藏总统的指令；关闭时不隐藏。

<!-- en -->
## Role

The President has two meeting abilities. Type /finish to end the meeting immediately, or /reveal to reveal the President's identity. Only teams allowed by the host settings receive the reveal notice. The President is normally unguessable after revealing. Whoever kills the revealed President has their next kill cooldown reduced.

## Settings

- **Maximum count**: Sets the maximum number of Presidents in a match.
- **Maximum meeting ends**: Sets how many times the President can use /finish; /reveal is available once per game.
- **President can be guessed after revealing**: ON allows guesses after the reveal; OFF prevents them.
- **Neutrals can see revealed President**: ON lets Neutrals see the reveal; OFF hides it from them.
- **Madmates can see revealed President**: ON lets Madmates see the reveal; OFF hides it from them.
- **Impostors can see revealed President**: ON lets Impostors see the reveal; OFF hides it from them.
- **Hide President commands**: ON hides the President's commands; OFF leaves them visible.
