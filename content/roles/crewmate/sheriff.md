---
{"id":"role-sheriff","kind":"role","category":"crewmate","title":{"zh-CN":"警长","en":"Sheriff"},"summary":{"zh-CN":"警长没有船员任务，可以击杀内鬼；根据设置也可击杀中立或特定附加职业目标，误杀会导致走火。","en":"The Sheriff has no Crewmate tasks and can kill Impostors; settings can also allow Neutral or modifier targets, while an invalid shot causes a misfire."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Sheriff.cs"}
---

<!-- zh-CN -->
## 职业能力

警长没有船员任务。警长可以击杀内鬼；根据房主设置，也可以击杀中立玩家。若向不允许击杀的目标开枪，警长会走火并自杀；设置还可决定目标是否也会被误杀。成为叛徒后，警长可以按相应设置攻击其他阵营。

## 设置

- **数量上限**：设置一局中警长的最大人数。
- **击杀冷却**：设置警长再次开枪前的等待时间。
- **走火时击杀目标**：开启时，走火会同时击杀目标；关闭时警长自杀但目标存活。
- **射击次数上限**：设置警长最多可开枪的次数。
- **在职业名称旁显示射击次数**：开启时显示剩余子弹数；关闭时隐藏。
- **所有人存活时也能开枪**：开启时警长在还没有玩家死亡时也能开枪；关闭时必须等到有人死亡。
- **可击杀的附加职业**：分别设置是否可击杀叛徒、魅惑者、恋人、跟班、自我主义者、感染者和传染者。Rascal 始终可被击杀，Admired 始终不可被击杀。
- **可击杀中立**：开启时可在“全部”与“逐个设置”模式间选择；关闭时不能击杀中立。逐个设置会为可选中立职业提供独立开关，部分特殊角色不在可选范围内。
- **跟班警长可以狂暴**：开启时 Jackal 的跟班警长可攻击任意阵营；关闭时不能。
- **非船员警长目标设置**：开启时分别设置拥有叛徒、魅惑者、感染者、传染者或自我主义者附加职业的警长能否击杀内鬼、中立和船员（包括其队友）；关闭时这些警长按常规规则行动。

<!-- en -->
## Role

The Sheriff has no Crewmate tasks. They can kill Impostors and, depending on host settings, Neutrals. Shooting a target they cannot kill causes a misfire and kills the Sheriff; another setting determines whether the target dies too. A Sheriff who becomes a Madmate can attack other teams according to the relevant settings.

## Settings

- **Maximum count**: Sets the maximum number of Sheriffs in a match.
- **Kill cooldown**: Sets how long the Sheriff must wait before shooting again.
- **Misfire kills target**: ON kills the target as well as the Sheriff on a misfire; OFF leaves the target alive.
- **Maximum shots**: Sets how many times the Sheriff can shoot.
- **Display shot limit beside role name**: ON displays the remaining bullets; OFF hides them.
- **Can kill when everyone is alive**: ON allows shooting before anyone has died; OFF requires a death first.
- **Can kill modifier targets**: Separate settings control Madmates, Charmed, Lovers, Sidekicks, Egoists, Infected, and Contagious. Rascal is always killable; Admired is never killable.
- **Can kill Neutrals**: ON enables either an all-Neutrals mode or individual settings; OFF prevents killing Neutrals. Individual mode provides a toggle for each eligible Neutral role, with some special roles excluded.
- **Sidekick Sheriff can go berserk**: ON lets a Jackal Sidekick Sheriff attack any team; OFF prevents this.
- **Non-Crew Sheriff configuration**: ON exposes separate target-team settings for Sheriffs carrying Madmate, Charmed, Infected, Contagious, or Egoist; they can be configured to target Impostors, Neutrals, and Crewmates, including teammates. OFF leaves them using their normal rules.
