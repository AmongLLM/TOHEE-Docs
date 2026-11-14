---
{"id":"role-executioner","kind":"role","category":"neutral","title":{"en":"Executioner","zh-CN":"处刑人"},"summary":{"zh-CN":"开局获得一名目标；目标被投票放逐时获胜，目标在此之前死亡时按设置转变职业。","en":"Receive a target at the start; win if they are voted out, or change roles as configured if they die first."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Executioner.cs"}
---
<!-- zh-CN -->
## 处刑人

处刑人开局会获得一名处刑目标，目标名字旁显示菱形「♦」。目标在会议中被投票放逐时，处刑人获胜。若目标在被放逐前死亡，处刑人会变为设置指定的职业。小丑、处刑人和冤罪师可以同时获胜。

### 设置

- **人数上限**：一局中可出现的处刑人数量上限。
- **可选目标阵营**：分别设置能否选择内鬼、带刀中立、友好中立、邪恶中立、混沌中立或灾厄阵营的玩家；船员也可成为目标。
- **知道目标职业**：开启后，处刑人能看到目标职业；关闭后目标显示为普通玩家。
- **目标死亡后的职业**：可选择船员、名人、保镖、独裁者、市长、医生、小丑或投机者。
- **目标被放逐时公开身份**：设置目标被放逐时是否公开其身份。

<!-- en -->
## Executioner

At the start of the game, the Executioner receives a target marked with a diamond (♦) beside their name. The Executioner wins if the target is voted out. If the target dies before being voted out, the Executioner changes into the role selected in the settings. Jester, Executioner, and Innocent can win together.

### Settings

- **Maximum number:** Maximum number of Executioners in a match.
- **Eligible target teams:** Separately allow targets from the Impostor, Neutral Killing, Neutral Benign, Neutral Evil, Neutral Chaos, and Apocalypse teams. Crewmates can also be selected.
- **Knows target's role:** Whether the Executioner sees the target's role.
- **Role after target dies:** Choose Crewmate, Celebrity, Bodyguard, Dictator, Mayor, Doctor, Jester, or Opportunist.
- **Reveal target upon ejection:** Whether the target's role is revealed when they are voted out.
