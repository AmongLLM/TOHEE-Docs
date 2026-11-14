---
{"id":"role-judge","kind":"role","category":"crewmate","title":{"zh-CN":"正义法官","en":"Judge"},"summary":{"zh-CN":"正义法官在会议中审判玩家，若目标符合邪恶条件则将其击杀，否则法官自杀。","en":"During a meeting, the Judge trials a player and kills them if they meet the configured Evil criteria; otherwise the Judge dies."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Judge.cs"}
---

<!-- zh-CN -->
## 职业能力

正义法官可在会议中审判一名玩家。若目标符合房主设置的邪恶条件，目标会被击杀；否则正义法官会自杀。使用指令：/tl [玩家 ID]。玩家 ID 显示在名字旁，也可输入 /id 查看。

## 设置

- **数量上限**：设置一局中正义法官的最大人数。
- **每次会议审判次数上限**：设置正义法官每次会议最多能审判多少人。
- **每局审判次数上限**：设置正义法官一局中最多能审判多少人。
- **可审判的附加职业**：分别设置是否可审判叛徒、魅惑者、跟班、感染者和传染者；对每一种，开启允许审判，关闭时若尝试审判该目标，正义法官会自杀。
- **可审判的职业类别**：分别设置是否可审判带刀船员、友善中立、邪恶中立、混乱中立、带刀中立和灾厄中立；对每一类，关闭时若尝试审判该类别，正义法官会自杀。
- **隐藏正义法官指令**：开启时模组会尝试隐藏 /tl 指令；关闭时不尝试隐藏。

<!-- en -->
## Role

During a meeting, the Judge can trial a player. If the target meets the host-configured Evil criteria, the target is killed; otherwise the Judge dies. Use /tl [player ID] to trial. IDs appear next to player names or can be listed with /id.

## Settings

- **Maximum count**: Sets the maximum number of Judges in a match.
- **Maximum trials per meeting**: Sets how many players the Judge can trial in each meeting.
- **Maximum trials per game**: Sets how many trials the Judge can make in the entire game.
- **Can trial add-ons**: Separate toggles control Madmates, Charmed, Sidekicks, Infected, and Contagious. ON allows that target to be tried; OFF makes the Judge die if they attempt it.
- **Can trial role categories**: Separate toggles control Crewmate Killing, Neutral Benign, Neutral Evil, Neutral Chaos, Neutral Killing, and Neutral Apocalypse. ON allows that category to be tried; OFF makes the Judge die if they attempt it.
- **Hide Judge commands**: ON makes the mod attempt to hide /tl commands; OFF does not.
