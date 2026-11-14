---
{"id":"role-oracle","kind":"role","category":"crewmate","title":{"zh-CN":"神谕","en":"Oracle"},"summary":{"zh-CN":"神谕在会议中投票给玩家后会查看其船员、内鬼或中立阵营结果；开启附加职业选项时，分类也会考虑附加职业的阵营倾向，结果可能出错。","en":"After voting for a player in a meeting, the Oracle learns whether they are Crew, Impostor, or Neutral; when enabled, the add-on option also factors add-on team alignment into classification, which may be wrong."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Oracle.cs"}
---

<!-- zh-CN -->
## 职业能力

神谕在会议中投票给玩家后，会得知目标属于船员、内鬼还是中立阵营；结果可能不准确。开启“检查附加职业阵营”时，分类还会检查目标的附加职业阵营倾向，不只是显示目标是否有附加职业。

## 设置

- **数量上限**：设置一局中神谕的最大人数。
- **使用次数上限**：设置神谕可使用技能的次数。
- **显示错误结果的概率**：设置神谕给出错误阵营结果的概率。
- **每完成一个任务获得的技能次数**：设置每完成一个任务增加的次数，按 0.1 为步进。
- **按附加职业阵营分类**：开启时分类会把目标附加职业的阵营倾向纳入船员/内鬼/中立结果；关闭时按目标主职业分类。

<!-- en -->
## Role

After voting for a player in a meeting, the Oracle learns whether the target is Crew, Impostor, or Neutral. The result can be incorrect. When the add-on option is enabled, the classification also considers the team's alignment of the target's add-ons; it does not simply report whether add-ons are present.

## Settings

- **Maximum count**: Sets the maximum number of Oracles in a match.
- **Maximum uses**: Sets how many times the Oracle can use the ability.
- **Chance of an incorrect result**: Sets the chance that the Oracle receives an incorrect team result.
- **Ability uses gained per task**: Sets the uses gained for each completed task, in 0.1 increments.
- **Classify using add-on alignment**: ON includes the target's add-on team alignment when deciding Crew, Impostor, or Neutral; OFF classifies by the target's main role.
