---
{"id":"role-medium","kind":"role","category":"crewmate","title":{"zh-CN":"通灵师","en":"Medium"},"summary":{"zh-CN":"尸体被报告后，通灵师可以联系该死者；死者需在会议中用指定指令回答，通灵师才能看到回复。","en":"After a body is reported, the Medium can contact its ghost, which must answer with the specified command during the meeting for the reply to appear."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Medium.cs"}
---

<!-- zh-CN -->
## 职业能力

尸体被报告后，通灵师可以与对应的死者建立联系；报告者不必是通灵师。死者必须在会议中使用 /ms YES 或 /ms NO 作答，否则通灵师无法看到死者的消息。

## 设置

- **数量上限**：设置一局中通灵师的最大人数。
- **联系次数上限**：设置通灵师可联系鬼魂的次数。
- **只接收船员阵营的消息**：开启时只接收船员阵营玩家的消息，包括叛徒、魅惑、感染等特殊船员；关闭时也能接收内鬼和中立阵营的消息。
- **每完成一个任务获得的联系次数**：设置每完成一个任务增加的技能次数，按 0.1 为步进。

<!-- en -->
## Role

After a dead body is reported, the Medium can contact the ghost of that player; the reporter does not have to be the Medium. During the meeting, the ghost must answer with /ms YES or /ms NO, or the Medium cannot see the ghost's message.

## Settings

- **Maximum count**: Sets the maximum number of Mediums in a match.
- **Maximum contacts**: Sets how many times the Medium can contact ghosts.
- **Receive messages only from Crewmates**: ON restricts messages to Crewmates, including special Crewmates such as Mad, Charmed, or Infected; OFF also allows messages from Impostors and Neutrals.
- **Ability uses gained per task**: Sets the contacts gained for each completed task, in 0.1 increments.
