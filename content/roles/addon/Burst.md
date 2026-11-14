---
{
  "id": "role-burst",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Burst",
    "zh-CN": "爆破者"
  },
  "summary": {
    "zh-CN": "符合条件的击杀者会在延迟后爆炸；通风口、死亡、会议、杀戮机器和变身的启示录中立角色可使效果失效。",
    "en": "An eligible killer explodes after a delay; venting, death, meetings, KillingMachine, or an Apocalypse-transformed killer can prevent it."
  },
  "source": "https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Common/Burst.cs"
}
---
<!-- zh-CN -->

## 效果

爆破者在会议外被非自杀击杀后，若击杀者存活且不是杀戮机器或变身的启示录中立角色，击杀者会在设定延迟后爆炸并收到通知。若倒计时结束时击杀者在通风口内、已死亡或会议已经开始，爆炸不会造成死亡。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **Eligibility（可分配阵营）**：主持人可分别设置内鬼、船员、中立者是否可以获得此附加身份。
- **Burst Kill Delay（爆炸延迟）**：击杀爆破者后、击杀者爆炸前的延迟时间。

<!-- en -->

## Effect

When Burst is killed outside a meeting by a method other than suicide, a living killer other than KillingMachine or an Apocalypse-transformed player is notified and explodes after a configured delay. The explosion does not kill them if they are in a vent, already dead, or a meeting has started when the delay ends.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
- **Eligibility**: Separate settings control whether Impostors, Crewmates, Neutrals can receive this add-on.
- **Burst Kill Delay**: Time between killing Burst and the killer exploding.
