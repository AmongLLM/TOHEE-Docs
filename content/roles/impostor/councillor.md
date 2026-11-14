---
{"id":"role-councillor","kind":"role","category":"impostor","title":{"zh-CN":"邪恶法官","en":"Councillor"},"summary":{"zh-CN":"会议中以审判方式击杀；目标阵营、每场次数、每次会议次数和误判内鬼队伍的后果均可设置。","en":"Trials players during meetings; settings control target teams, per-game and per-meeting limits, and consequences for judging the Impostor team."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Councillor.cs"}
---

<!-- zh-CN -->
## 技能

会议中使用 `/tl [玩家编号]` 审判目标；编号显示在玩家名字前，也可用 `/id` 查看。审判会显示为法官审判，或按设置显示为邪恶法官击杀。每次会议和整局游戏都有独立次数上限。

审判内鬼或叛徒阵营是否允许由设置决定。若不允许且开启误判自杀，邪恶法官会因审判队友而死亡；否则命令会被拒绝。完成任务的告密者也可由单独选项控制是否能被审判。被招募的邪恶法官可自由审判内鬼队伍。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名邪恶法官。
- **击杀冷却**：设置击杀冷却。
- **每次会议审判次数上限**：设置每次会议可审判的次数。
- **每场游戏最大审判次数**：设置整局可审判的次数。
- **显示审判为邪恶法官击杀**：选择审判结果是否标为邪恶法官击杀。
- **可以审判叛徒阵营／内鬼阵营**：分别控制能否审判这两个阵营。
- **可以审判完成任务的告密者**：开启时可审判已完成任务的告密者；关闭时不能。
- **误判内鬼阵营时自杀**：开启时，不能审判内鬼队伍的邪恶法官会自杀；关闭时拒绝该审判。
- **尝试隐藏邪恶法官命令**：开启时尝试隐藏 `/tl` 命令。

<!-- en -->
## Ability

During meetings, enter `/tl [player ID]` to trial a target. IDs appear before player names; `/id` lists them. Trials appear as Judge trials, or as Councillor kills depending on the setting. The Councillor has separate per-meeting and per-game limits.

Settings determine whether the Councillor can trial Impostors or Madmates. If the relevant team cannot be targeted and suicide on a mistaken Impostor-team judgment is enabled, the Councillor dies; otherwise the command is rejected. A separate setting controls whether a Snitch who has completed all tasks can be trialed. A recruited Councillor can trial the Impostor team freely.

## Options

- **Max**: Maximum number of Councillors in a match.
- **Kill Cooldown**: Councillor kill cooldown.
- **Maximum Kills per Meeting**: Maximum trials in one meeting.
- **Maximum Kills per Game**: Maximum trials in one game.
- **Show Trial as Councillor Murder**: Choose whether the result is shown as a Councillor kill.
- **Can Murder Madmates / Can Murder Impostors**: Separately allow or forbid trials against these teams.
- **Can Murder Snitch with All Tasks Done**: When enabled, a task-complete Snitch can be trialed; otherwise it cannot.
- **Suicide When Judging the Impostor Team Wrongly**: When enabled, an otherwise disallowed trial of an Impostor teammate kills the Councillor; otherwise the trial is rejected.
- **Try to Hide Councillor Commands**: When enabled, the mod attempts to hide the `/tl` command.
