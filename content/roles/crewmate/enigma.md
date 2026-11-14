---
{"id":"role-enigma","kind":"role","category":"crewmate","title":{"zh-CN":"猜想者","en":"Enigma"},"summary":{"zh-CN":"尸体被报告后，猜想者可获得关于击杀者的随机线索；完成任务可提高线索阶段，是否必须由自己报告可设置。","en":"After a body is reported, the Enigma can receive a random clue about its killer; task progress improves the clue stage, and whether the Enigma must report it is configurable."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Enigma.cs"}
---

<!-- zh-CN -->
## 职业能力

有尸体被报告时，猜想者会收到关于该尸体击杀者的随机线索。开启相应设置后，不必由猜想者本人报告尸体；紧急会议等没有报告尸体的会议不会触发线索。完成的任务越多，可获得的线索阶段越高。

## 设置

- **数量上限**：设置一局中猜想者的最大人数。
- **查看第一、第二、第三阶段线索所需任务数**：分别设置达到各线索阶段前必须完成的任务数。
- **第二、第三阶段线索概率**：分别设置出现第二阶段和第三阶段线索的概率。
- **无需亲自报告也能获得线索**：开启时，其他玩家报告尸体也会给猜想者线索；关闭时只有报告者本人是猜想者时才会收到线索。
- **自定义猜想者任务**：开启时可单独设置任务；关闭时猜想者的任务数量与其他玩家相同。自定义选项可设置是否有公共任务，以及长任务、短任务数量。

<!-- en -->
## Role

When a body is reported, the Enigma receives a random clue about its killer. With the corresponding setting enabled, the Enigma does not need to be the reporter; meetings without a body report, such as emergency meetings, do not trigger a clue. More completed tasks unlock higher clue stages.

## Settings

- **Maximum count**: Sets the maximum number of Enigmas in a match.
- **Tasks required for Stage 1, Stage 2, and Stage 3 clues**: Sets the task threshold for each clue stage.
- **Stage 2 and Stage 3 clue probability**: Sets the chance of receiving a clue from each of those stages.
- **Can get clues without being the reporter**: ON gives the Enigma a clue when another player reports a body; OFF gives a clue only when the Enigma is the reporter.
- **Override Enigma tasks**: ON allows a separate task setup; OFF gives the Enigma the same task count as everyone else. The custom setup includes whether the role gets common tasks and the number of long and short tasks.
