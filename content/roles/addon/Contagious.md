---
{
  "id": "role-contagious",
  "kind": "role",
  "category": "addon",
  "title": {
    "zh-CN": "传染性",
    "en": "Contagious"
  },
  "summary": {
    "zh-CN": "病毒击杀后，报告该尸体的合格玩家会被转化为传染性，或按设置在会议后死亡。",
    "en": "After Virus kills someone, an eligible reporter can become Contagious or die after the meeting, depending on settings."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Virus.cs"
}
---
<!-- zh-CN -->

## 效果

病毒击杀的玩家尸体被报告时，符合条件的报告者会被转化为传染性，并与病毒一同获胜。若开启 `VirusKillInfectedPlayerAfterMeeting`，报告者不会获得该身份，而是在会议后死亡。传染性在胜负人数计算中可设置为不计人数、计入病毒阵营或保留原阵营。此身份不会独立随机分配。

## 相关设置

- **VirusKillInfectedPlayerAfterMeeting（报告者会议后死亡）**：开启后，报告病毒击杀尸体的合格玩家会在会议后死亡，而非转化为传染性。
- **Virus_ContagiousCountMode（Contagious 计入阵营）**：设置传染性玩家不计人数、计入病毒阵营，或保留原阵营。
- **随机分配**：不会开局随机分配；由上述赋予者能力转化获得。

<!-- en -->

## Effect

When a body killed by Virus is reported, an eligible reporter becomes Contagious and wins with Virus. If `VirusKillInfectedPlayerAfterMeeting` is enabled, the reporter does not receive this identity and instead dies after the meeting. For win-count checks, Contagious can count as nobody, as Virus, or as its original team. This identity is not independently assigned at random.

## Related settings

- **VirusKillInfectedPlayerAfterMeeting**: When enabled, an eligible reporter of a Virus victim dies after the meeting instead of becoming Contagious.
- **Virus_ContagiousCountMode**: Set Contagious players to count as nobody, as Virus, or as their original team.
- **Random assignment**: Not assigned at random at game start; it is granted by the conversion ability described above.
