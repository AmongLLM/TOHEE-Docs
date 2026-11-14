---
{"id":"role-coroner","kind":"role","category":"crewmate","title":{"zh-CN":"验尸官","en":"Coroner"},"summary":{"zh-CN":"验尸官不能正常报告尸体，尝试报告时会追踪凶手，并可选择查看尸体箭头及阻止被处理的尸体再次报告。","en":"The Coroner cannot report bodies normally and instead tracks the killer when attempting to report, with configurable body arrows and report blocking."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Coroner.cs"}
---

<!-- zh-CN -->
## 职业能力

验尸官无法正常报告尸体。尝试报告时会看到指向凶手的箭头；召开会议后箭头消失。

## 设置

- **数量上限**：设置一局中验尸官的最大人数。
- **显示指向尸体的箭头**：开启时，验尸官会像入殓师一样看到指向尸体的箭头；关闭时不显示。
- **验尸官处理过的尸体无法报告**：开启时，验尸官互动过的尸体不能再被报告；关闭时仍可报告。
- **初始技能次数**：设置验尸官开局拥有的技能次数。
- **每完成一个任务获得的技能次数**：设置每完成一个任务增加的技能次数，按 0.1 为步进。
- **通知凶手自己被跟踪**：开启时，与验尸官追踪的尸体相关的凶手会收到被跟踪提示；关闭时不会收到提示。

<!-- en -->
## Role

The Coroner cannot report bodies normally. When attempting to report, they instead see an arrow pointing toward the killer; the arrow disappears when a meeting is called.

## Settings

- **Maximum count**: Sets the maximum number of Coroners in a match.
- **Arrows pointing to dead bodies**: ON gives the Coroner arrows toward dead bodies, like the Mortician; OFF hides those arrows.
- **Bodies used by the Coroner cannot be reported**: ON prevents a body the Coroner has interacted with from being reported; OFF leaves it reportable.
- **Initial ability uses**: Sets the Coroner's starting uses.
- **Ability uses gained per task**: Sets the uses gained for each completed task, in 0.1 increments.
- **Inform the killer they are tracked**: ON alerts the killer associated with a body the Coroner tracks; OFF sends no alert.
