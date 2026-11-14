---
{"id":"role-virus","kind":"role","category":"neutral","title":{"en":"Virus","zh-CN":"病毒"},"summary":{"zh-CN":"给击杀目标的尸体标记病毒；合适的报告者会成为感染者，或在病毒存活并通过投票后于会议结束时死亡。病毒按感染者计入方式参与中立阵营人数结算。","en":"Mark victims' bodies with infection; an eligible reporter becomes Contagious or dies after the meeting if the Virus survives the vote. The Virus participates in neutral endgame counting, which infected-player settings affect."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Virus.cs"}
---
<!-- zh-CN -->
## 病毒

病毒击杀的玩家尸体会被标记（感染次数上限未耗尽时）。报告被标记尸体的合适玩家会变为感染者，或在病毒存活并通过投票后于会议结束时死亡，具体取决于设置。已标记的尸体仍可感染报告者；次数上限是在击杀时检查并在合适玩家报告后扣除。

病毒是独立的中立阵营。内鬼出局后，若船员人数不多于计入胜负的病毒阵营玩家，且没有其他计入胜负的中立阵营，病毒即可获胜。“被感染者计入阵营”设置决定感染者计为病毒、原阵营或不计入胜负人数。

## 设置

- **人数上限**：一局中可出现的病毒数量上限。
- **击杀冷却**：再次感染或击杀前的等待时间。
- **可使用通风口**：设置病毒能否使用通风口。
- **内鬼视野**：开启后拥有内鬼视野；关闭后使用默认视野。
- **感染次数上限**：击杀时可用于给尸体标记感染的次数；已标记的尸体仍可感染其报告者。
- **知道被感染玩家职业**：开启后，病毒可以看到被感染玩家的职业。
- **被感染者互相认识**：开启后，被感染者可以看到彼此。
- **感染者在会议后死亡**：开启后，若病毒未被放逐，报告者会在会议结束时死亡；关闭后报告者会成为感染者。
- **被感染者计入阵营**：设置感染者计为无阵营、原阵营或病毒阵营，影响感染者是否为病毒胜利人数作贡献。

<!-- en -->
## Virus

The Virus marks the bodies of its victims for infection while it has uses remaining. An eligible player who reports a marked body becomes Contagious or dies after the meeting if the Virus survives the vote, depending on the settings. A body already marked can still infect its reporter; the limit is checked when kills mark bodies and spent when an eligible reporter reports one.

The Virus is a separate Neutral team. After the Impostors are gone, it can win when the living Crew count is no greater than the counted Virus team and no other counted Neutral team remains. “Infected players count as” determines whether Contagious players count as Virus, their original team, or no team.

## Settings

- **Maximum number:** Maximum number of Viruses in a match.
- **Kill cooldown:** Time before the Virus can contaminate or kill again.
- **Can vent:** Whether the Virus can use vents.
- **Impostor vision:** When enabled, the Virus has Impostor vision; otherwise, they have default vision.
- **Maximum contaminations:** Number of kill attempts that can mark bodies for infection; already marked bodies can still infect their reporters.
- **Know contaminated players' roles:** Whether the Virus sees the roles of contaminated players.
- **Contaminated players know each other:** Whether contaminated players can see each other.
- **Contaminated player dies after meeting:** When enabled, the reporter dies after the meeting if the Virus survives the vote; when disabled, the reporter becomes Contagious.
- **Infected players count as:** Choose no team, their original team, or the Virus team; this affects the Virus team's win count.
