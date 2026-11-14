---
{"id":"role-retributionist","kind":"role","category":"crewmate","title":{"zh-CN":"惩罚者","en":"Retributionist"},"summary":{"zh-CN":"惩罚者死亡后可用 /ret [玩家 ID] 复仇击杀有限数量的玩家，任务完成和存活人数阈值可限制使用。","en":"After death, the Retributionist can use /ret [player ID] to kill a limited number of players, subject to task-completion and living-player thresholds."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Retributionist.cs"}
---

<!-- zh-CN -->
## 职业能力

惩罚者死亡后可使用 /ret [玩家 ID] 复仇击杀有限数量的玩家。单独输入 /ret 可列出存活玩家及其 ID。根据设置，惩罚者必须完成任务才能复仇；存活人数低于或等于设定阈值时也不能使用。

## 设置

- **数量上限**：设置一局中惩罚者的最大人数。
- **复仇次数上限**：设置惩罚者最多可击杀的人数。
- **复仇所需的最低存活人数**：设置复仇被阻止时的存活人数阈值；存活人数必须高于该值才能使用。
- **仅完成任务后才能复仇**：开启时惩罚者必须完成任务才能使用能力；关闭时即使任务未完成也能使用。
- **自定义惩罚者任务**：开启时可单独设置任务数量；关闭时与其他玩家任务数量相同。自定义选项包括公共任务、长任务和短任务。

<!-- en -->
## Role

After dying, the Retributionist can use /ret [player ID] to kill a limited number of players. Typing /ret alone lists living players and their IDs. Depending on settings, tasks must be complete and the number of living players must be above a configured threshold.

## Settings

- **Maximum count**: Sets the maximum number of Retributionists in a match.
- **Maximum retributions**: Sets the maximum number of kills the Retributionist can make.
- **Minimum living players for retribution**: Sets the threshold at which retribution is blocked; the living-player count must be above this value to use the ability.
- **Can only retribute on task completion**: ON requires the Retributionist to finish tasks before using the ability; OFF allows use before tasks are complete.
- **Override Retributionist tasks**: ON allows a separate task setup; OFF gives the role the same task count as everyone else. The custom setup includes common-task availability and the number of long and short tasks.
