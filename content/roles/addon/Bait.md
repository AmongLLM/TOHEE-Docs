---
{
  "id": "role-bait",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Bait",
    "zh-CN": "诱饵"
  },
  "summary": {
    "zh-CN": "被击杀后会迫使击杀者延迟报告尸体；特定击杀者及通讯破坏设置可阻止触发。",
    "en": "When killed, forces the killer to report the body after a delay; some killers and Comms settings suppress it."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Common/Bait.cs"
}
---
<!-- zh-CN -->

## 效果

诱饵被击杀后，若击杀者不是杀戮机器、隐匿者、魅影或清理工，击杀者会在设定延迟后被迫报告尸体。若通讯破坏与伪装同时生效，是否仍强制报告由设置决定；胆小鬼的免疫设置也可阻止自动报告。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **Eligibility（可分配阵营）**：主持人可分别设置内鬼、船员、中立者是否可以获得此附加身份。
- **BaitDelayMin（最短报告延迟）**：击杀者自动报告尸体前的最短延迟。
- **BaitDelayMax（最长报告延迟）**：击杀者自动报告尸体前的最长延迟。
- **BaitDelayNotify（自动报告前提醒击杀者）**：控制是否在自动报告前提醒击杀者。
- **BaitNotification（首次会议揭示诱饵）**：控制是否在第一次会议揭示存活的诱饵玩家。
- **BaitCanBeReportedUnderAllConditions（通讯破坏期间仍可强制报告）**：控制通讯破坏期间报告功能被禁用时，诱饵是否仍会强制报告。

<!-- en -->

## Effect

When Bait is killed, the killer is forced to report the body after a configured delay unless the killer is KillingMachine, Swooper, Wraith, or Cleaner. During Comms sabotage combined with camouflage, a setting controls whether the report still happens. Oblivious's Bait immunity setting can also suppress the automatic report.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
- **Eligibility**: Separate settings control whether Impostors, Crewmates, Neutrals can receive this add-on.
- **BaitDelayMin**: Minimum delay before the killer automatically reports the body.
- **BaitDelayMax**: Maximum delay before the killer automatically reports the body.
- **BaitDelayNotify**: Whether the killer is warned about the upcoming self-report.
- **BaitNotification**: Whether living Bait players are revealed at the first meeting.
- **BaitCanBeReportedUnderAllConditions**: Whether Bait still forces a report during Comms sabotage when reporting is otherwise disabled.
