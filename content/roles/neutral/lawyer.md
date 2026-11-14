---
{"id":"role-lawyer","kind":"role","category":"neutral","title":{"en":"Lawyer","zh-CN":"律师"},"summary":{"zh-CN":"开局获得一名以菱形标记的目标；目标获胜则律师获胜，目标失败则律师失败。","en":"Receive a diamond-marked target at the start; win if the target wins and lose if they lose."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Lawyer.cs"}
---
<!-- zh-CN -->
## 律师

律师开局会获得一名以菱形「♦」标记的目标。目标获胜时律师获胜；目标失败时律师也失败。律师死亡后仍可随目标获胜。目标死亡时，律师可按设置转变为其他职业；若开局时没有合适目标，律师会转为所选职业，或在关闭转变选项时转为投机者。

### 设置

- **人数上限**：一局中可出现的律师数量上限。
- **可选目标**：分别设置能否选择内鬼、带刀中立、灾厄阵营、船员或小丑为目标。
- **知道目标职业**：开启后律师能看到目标职业；关闭后只知道目标是谁。
- **目标知道律师身份**：设置目标是否会知道律师是谁。
- **目标死亡后转换职业**：设置目标死亡后是否改变职业；开启后可选择船员、小丑、投机者、名人、保镖、独裁者、市长或医生。关闭后律师仍保持律师；若开局时没有合适目标，则会转为投机者。

<!-- en -->
## Lawyer

The Lawyer receives a target marked with a diamond (♦) at the start. The Lawyer wins if the target wins and loses if the target loses. The Lawyer can still win after death. If the target dies, the Lawyer can change into a role selected in the settings. If no eligible target exists at the start, the Lawyer becomes the selected role, or an Opportunist when role changing is disabled.

### Settings

- **Maximum number:** Maximum number of Lawyers in a match.
- **Eligible targets:** Separately allow targets from the Impostor, Neutral Killing, Apocalypse, Crewmate, and Jester roles.
- **Knows target's role:** Whether the Lawyer sees the target's role.
- **Target knows their Lawyer:** Whether the target is told who their Lawyer is.
- **Change role after target dies:** Whether the Lawyer changes role; choose Crewmate, Jester, Opportunist, Celebrity, Bodyguard, Dictator, Mayor, or Doctor. When disabled, the Lawyer remains a Lawyer after the target dies. If no eligible target exists at the start, they become an Opportunist.
