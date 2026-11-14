---
{"id":"role-crewpostor","kind":"role","category":"impostor","title":{"zh-CN":"船鬼","en":"Crewpostor"},"summary":{"zh-CN":"不能主动使用击杀键；完成任务达到设定间隔时，会杀死最近的合格玩家。","en":"Cannot use the kill button; completing tasks at the configured interval kills the nearest eligible player."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Crewpostor.cs"}
---

<!-- zh-CN -->
## 技能

船鬼不能主动使用击杀键。每完成设定数量的任务，就会击杀最近的一名合格目标。内鬼阵营玩家是否可成为目标由设置决定；幼年迷你船员、邪恶迷你船员和 Solsticer 不会成为目标。若目标为无法被击杀的天启角色，击杀不会成功；攻击瘟疫之源会反噬船鬼。击杀时可选择是否触发冲刺动作。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名船鬼。
- **可以击杀内鬼**：开启时可将内鬼阵营玩家作为目标；关闭时排除内鬼阵营。
- **知道内鬼**：开启时船鬼知道内鬼身份；关闭时不知道。
- **内鬼知道船鬼**：开启时内鬼知道船鬼身份；关闭时不知道。
- **击杀时冲刺**：开启时击杀会触发冲刺；关闭时不会。
- **每次击杀所需任务数**：设置完成多少个任务触发一次击杀。
- **覆盖船鬼任务分配**：开启后可单独设置船鬼的任务；关闭时使用与其他玩家相同的任务分配。
  - **分配公共任务**：开启时船鬼会获得公共任务；关闭时不会。
  - **长任务数量**：设置船鬼获得的长任务数量。
  - **短任务数量**：设置船鬼获得的短任务数量。

<!-- en -->
## Ability

The Crewpostor cannot use the kill button directly. Every configured number of completed tasks causes it to kill the nearest eligible target. Settings control whether Impostor-team players are eligible. Nice Mini, Evil Mini, and Solsticer are excluded. A transformed Apocalypse target is immune; attacking Pestilence can reflect the kill back onto the Crewpostor. The role can lunge when a kill occurs.

## Options

- **Max**: Maximum number of Crewpostors in a match.
- **Can Kill Impostors**: When enabled, Impostor-team players can be targeted; otherwise they are excluded.
- **Knows Impostors**: When enabled, the Crewpostor knows who the Impostors are; otherwise it does not.
- **Known to Impostors**: When enabled, the Impostors know who the Crewpostor is; otherwise they do not.
- **Crewpostor Lunges on Kill**: When enabled, the kill triggers a lunge; otherwise it does not.
- **Number of Tasks Completed to Make One Kill**: Number of completed tasks required for a kill.
- **Override Crewpostor Tasks**: When enabled, the Crewpostor can receive separate task settings; otherwise it has the same assignment as other players.
  - **Crewpostor Has Common Tasks**: When enabled, the Crewpostor receives Common Tasks; otherwise it does not.
  - **Amount of Long Tasks**: Number of Long Tasks assigned to the Crewpostor.
  - **Amount of Short Tasks**: Number of Short Tasks assigned to the Crewpostor.
