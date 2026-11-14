---
{
  "id": "role-guesser",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Guesser",
    "zh-CN": "赌怪"
  },
  "summary": {
    "zh-CN": "会议中猜测玩家的角色以击杀对方；猜错则自己死亡。",
    "en": "Guesses players' roles during meetings to kill them; an incorrect guess kills the Guesser."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Common/Guesser.cs"
}
---
<!-- zh-CN -->

## 效果

会议中可猜测玩家的角色并击杀目标；猜错会导致自己死亡。命令格式为 `/bt [玩家编号] [角色]`。玩家编号显示在名字前，也可以使用 `/id` 查看所有玩家编号。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **Eligibility（可分配阵营）**：主持人可分别设置内鬼、船员、中立者是否可以获得此附加身份。
- **Can guess Add-ons（可猜测附加身份）**：控制玩家公开附加身份后，是否能被赌怪猜测该附加身份。
- **Can guess Snitch with All Tasks Done（告密者完成任务后仍可被猜）**：控制告密者完成全部任务后、暴露其他玩家前，是否仍能被猜测。
- **Try to hide guesser's command（尝试隐藏赌怪命令）**：控制模组是否尝试隐藏赌怪使用的命令，避免暴露身份。

<!-- en -->

## Effect

During meetings, guess a player's role to kill them. An incorrect guess kills the Guesser. Use `/bt [player id] [role]`. A player's ID appears before their name, or use `/id` to view all player IDs.

## Settings

- **Max**: Maximum number that can be in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
- **Eligibility**: Separate settings control whether Impostors, Crewmates, Neutrals can receive this add-on.
- **Can guess Add-ons**: Whether add-ons are guessable when a player reveals them.
- **Can guess Snitch with All Tasks Done**: Whether players can guess the Snitch after all tasks are completed, before the Snitch exposes them.
- **Try to hide guesser's command**: Whether the mod attempts to hide the Guesser's command to avoid revealing them.
