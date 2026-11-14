---
{
  "id": "role-hurried",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Hurried",
    "zh-CN": "焦急者"
  },
  "summary": {
    "zh-CN": "必须完成全部任务才能随队伍获胜，未完成则落败；设置可控制其开局分配与招募。",
    "en": "Must complete all tasks to win with its team or loses; settings govern assignment and recruitment."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Crewmate/Hurried.cs"
}
---
<!-- zh-CN -->

## 效果

焦急者必须完成全部任务才能随所属队伍获胜；如果没有完成任务则会输掉游戏。该附加身份会尽可能避免玩家先被转化为叛徒、魅魔小弟等身份。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **Madmate can be Hurried on game start（Madmate 可在开局获得 Hurried）**：控制叛徒能否在游戏开始时获得焦急者。
- **Task based Crewmates can be Hurried（任务型 Crewmate 可获得 Hurried）**：控制能力通过执行或完成任务触发的船员角色能否获得焦急者。
- **Hurried can be recruited in game (excludes madmate)（游戏中可招募 Hurried（不含 Madmate））**：控制焦急者船员能否被魅魔、豺狼等招募型角色在游戏中招募；不包括叛徒。

<!-- en -->

## Effect

A player with Hurried must finish all tasks to win with their team; otherwise they lose. Hurried also tries to ensure the player is not converted to a Madmate, Charmed, or similar role first.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
- **Madmate can be Hurried on game start**: Whether Madmates can receive Hurried at game start.
- **Task based Crewmates can be Hurried**: Whether Crewmate roles whose abilities activate through doing or completing tasks can receive Hurried.
- **Hurried can be recruited in game (excludes madmate)**: Whether Hurried Crewmates can be recruited by Cultist, Jackal, and other recruiting roles; this excludes Madmates.
