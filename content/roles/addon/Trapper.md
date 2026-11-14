---
{
  "id": "role-trapper",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Beartrap",
    "zh-CN": "陷阱师"
  },
  "summary": {
    "zh-CN": "在会议外被非自杀击杀时会将击杀者定身并阻止其报告尸体一段时间。",
    "en": "When killed outside a meeting other than by suicide, immobilizes its killer and prevents reporting for a configured duration."
  },
  "source": "https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Common/Beartrap.cs"
}
---
<!-- zh-CN -->

## 效果

陷阱师在会议外被非自杀击杀时，会将击杀者定身，并在设定时长内阻止其报告尸体。若击杀者是杀戮机器，则该效果不会触发。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **Eligibility（可分配阵营）**：主持人可分别设置内鬼、船员、中立者是否可以获得此附加身份。
- **TrapperBlockMoveTime（定身时长）**：击杀者被定身且无法报告尸体的时长。

<!-- en -->

## Effect

When Trapper is killed outside a meeting by a method other than suicide, the killer is immobilized and cannot report bodies for a configured duration. The effect does not trigger when the killer is KillingMachine.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
- **Eligibility**: Separate settings control whether Impostors, Crewmates, Neutrals can receive this add-on.
- **TrapperBlockMoveTime**: How long the killer is immobilized and unable to report.
