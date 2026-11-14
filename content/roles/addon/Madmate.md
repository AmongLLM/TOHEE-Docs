---
{
  "id": "role-madmate",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Madmate",
    "zh-CN": "叛徒"
  },
  "summary": {
    "zh-CN": "以指定方式由船员转化为内鬼盟友；转化资格、阵营计数、视野、互相识别和击杀行为均可设置。",
    "en": "Converts eligible Crewmates into Impostor allies using a selected method; team count, vision, recognition, and kill rules are configurable."
  },
  "source": "https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Impostor/Madmate.cs"
}
---
<!-- zh-CN -->

## 效果

叛徒通常从船员中产生。内鬼获胜时，叛徒会随队获胜；若 `MadmateCountMode` 设为保留原阵营，叛徒也可能随原阵营获胜。该设置还决定叛徒是否影响胜负人数判定，因此标准内鬼全部出局后的结果也取决于该设置。叛徒的生成方式可设为随机分配、内鬼首次尝试击杀时转化目标，或转化会议中投自己票的船员。角色的允许转化名单由设置控制；摆烂人、懒人、忠诚、大明星、网红、任务管理者、利己主义者、双重人格、义务警员、成年迷你船员等不能成为叛徒。达到任务转换限制的焦急者也不能转化。还可设置内鬼和叛徒之间是否互相识别、能否互相击杀，以及叛徒是否拥有内鬼视野。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Madmate spawning mode（Madmate 生成方式）**：可选 Assign、First Kill 或 Self Vote。First Kill 会将符合条件的击杀目标转化而非杀死；Self Vote 会转化投给自己的船员。
- **Madmates count as（Madmate 计入人数）**：设置叛徒不计人数、计为内鬼或计入原阵营。
- **SheriffCanBeMadmate / MayorCanBeMadmate / NGuesserCanBeMadmate / MarshallCanBeMadmate / OverseerCanBeMadmate / RetributionistCanBeMadmate / SnitchCanBeMadmate / JudgeCanBeMadmate（可转化角色开关）**：分别设置警长、市长、正义赌怪、展现者、预言家、惩罚者、告密者和正义法官能否转化为叛徒；Mad 告密者的任务数由 `MadSnitchTasks` 设置。
- **Impostor/Madmate visibility, friendly fire, and vision options（内鬼与 Madmate 阵营设置）**：主持人可设置两方是否互相识别、能否互相击杀，以及叛徒是否拥有内鬼视野。

<!-- en -->

## Effect

Madmates normally come from eligible Crewmates. They win with the Impostors if that team wins; when `MadmateCountMode` keeps their original team, they may also win with that team. The same setting controls whether Madmates contribute to parity, so an endgame after the regular Impostors die depends on the selected mode. The host chooses how Madmates are created: random assignment, converting a Crewmate when an Impostor first tries to kill them, or converting Crewmates who vote for themselves in a meeting. Settings control which roles may convert; Lazy Guy, Lazy, Loyal, SuperStar, Celebrity, Task Manager, Egoist, Paranoia, Vigilante, and adult Mini cannot become Madmates. Hurried players who cannot be converted are also excluded.

Settings control whether Madmates count toward player totals, whether Impostors and Madmates know each other, whether Impostors can kill Madmates, whether Madmates can kill Impostors, and whether Madmates have Impostor vision.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Madmate spawning mode**: Choose Assign, First Kill, or Self Vote. First Kill converts an eligible target instead of killing them; Self Vote converts self-voting Crewmates.
- **Madmates count as**: Choose whether Madmates count as nobody, Impostors, or their original team.
- **SheriffCanBeMadmate / MayorCanBeMadmate / NGuesserCanBeMadmate / MarshallCanBeMadmate / OverseerCanBeMadmate / RetributionistCanBeMadmate / SnitchCanBeMadmate / JudgeCanBeMadmate**: Separate toggles control whether these roles can become Madmates; Mad Snitch task count is set with `MadSnitchTasks`.
- **Impostor/Madmate visibility, friendly fire, and vision options**: Host options control whether the two groups identify each other, whether either side can kill the other, and whether Madmates have Impostor vision.
