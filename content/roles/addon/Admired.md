---
{
  "id": "role-admired",
  "kind": "role",
  "category": "addon",
  "title": {
    "zh-CN": "仰慕",
    "en": "Admired"
  },
  "summary": {
    "zh-CN": "由仰慕者转化获得，保留原主角色，但计入船员阵营并随船员获胜。",
    "en": "Granted by Admirer; keeps the main role but counts as Crewmate and wins with the Crewmates."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Admirer.cs"
}
---
<!-- zh-CN -->

## 效果

仰慕者可以使用有限次数的能力，将符合条件的目标赋予「仰慕」附加身份。目标保留原主角色，但在胜负判断中计入船员阵营，并随船员获胜。此身份不会在开局独立随机分配。若仰慕者已转为叛徒、招募、魅魔小弟、感染或传染性，能力会改为赋予目标对应的转化身份。

## 相关设置

- **AdmirerSkillLimit（仰慕技能次数）**：设置仰慕者可赋予该附加身份的次数。
- **AdmireCooldown（仰慕冷却）**：设置仰慕者使用能力的冷却时间。
- **AdmirerKnowTargetRole（仰慕者知晓目标身份）**：控制仰慕者与被仰慕者是否能得知彼此身份。
- **随机分配**：不会开局随机分配；由上述赋予者能力转化获得。

<!-- en -->

## Effect

Admirer can use a limited number of abilities to grant the Admired add-on to an eligible target. The target keeps their main role, but counts as a Crewmate for win checks and wins with the Crewmates. This identity is not independently assigned at random. If the Admirer has become a Madmate, Recruit, Charmed, Infected, or Contagious, the ability grants that matching converted identity instead.

## Related settings

- **AdmirerSkillLimit**: Number of times the Admirer can grant this add-on.
- **AdmireCooldown**: Cooldown between the Admirer's ability uses.
- **AdmirerKnowTargetRole**: Whether the Admirer and the Admired target learn each other's identity.
- **Random assignment**: Not assigned at random at game start; it is granted by the conversion ability described above.
