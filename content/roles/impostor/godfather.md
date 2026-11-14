---
{"id":"role-godfather","kind":"role","category":"impostor","title":{"zh-CN":"教父","en":"Godfather"},"summary":{"zh-CN":"会议投票指定目标；下一回合，击杀该目标的非内鬼玩家会按设置转为逃亡者或叛徒。","en":"Votes to select a target; next round, a non-Impostor who kills the target becomes a Refugee or Madmate, depending on settings."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Godfather.cs"}
---

<!-- zh-CN -->
## 技能

会议中投票指定一名目标。下一回合若非内鬼或叛徒阵营玩家击杀了目标，该玩家会转变为房主设置的职业。击杀目标的内鬼或叛徒队友不会因此转变；再次召开会议会清除尚未处理的目标。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名教父。
- **击杀目标者转变为**：选择击杀目标的玩家成为逃亡者或叛徒（Madmate）。

<!-- en -->
## Ability

Vote for a target during a meeting. In the next round, if a player outside the Impostor and Madmate teams kills the target, that killer changes into the role selected by the host. An Impostor or Madmate who kills the target does not change roles. Another meeting clears an unresolved target.

## Options

- **Max**: Maximum number of Godfathers in a match.
- **Killer Turns Into**: Choose whether the eligible killer becomes a Refugee or Madmate.
