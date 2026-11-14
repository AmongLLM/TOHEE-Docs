---
{"id":"role-quizmaster","kind":"role","category":"neutral","title":{"en":"Quizmaster","zh-CN":"测验长"},"summary":{"zh-CN":"每轮标记一名玩家，让其在下一次会议正确回答问题；答错或未答会死亡。","en":"Mark one player per round to answer a question at the next meeting; a wrong or missing answer kills them."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Quizmaster.cs"}
---
<!-- zh-CN -->
## 测验长

测验长使用击杀按钮标记一名玩家。下一次会议中，该玩家名字旁会出现「?!」，并需要正确回答问题；答错或未作答都会死亡。如果测验长在会议中被投票放逐，标记会清除，被标记者存活；若测验长在会议中被击杀，标记不会因此清除，被标记者仍可能在会后死亡。被标记者若在会议开始前被击杀，标记会重置。测验长每轮只能标记一人。测验长的中立胜利遵循常规中立结束条件：内鬼全部死亡、存活计数中立玩家属于同一计数类型且人数不少于船员时获胜。

被标记者可使用 `/answer [回答字母]` 作答，并用 `/qmquiz` 重新查看问题和答案。

### 设置

- **问题难度**：设置问题难度，范围为 1 至 4，1 最简单，4 最难。
- **标记后可使用通风口**：设置测验长标记玩家后能否使用通风口。
- **标记后可使用击杀**：开启后，测验长标记后仍可使用击杀按钮；关闭后不能正常使用击杀按钮。界面中的每轮击杀次数选项当前未被代码读取，不会限制击杀次数。
- **可提问过去对局内容**：开启后，问题可以涉及之前的回合；关闭后，问题只涉及当前对局。

<!-- en -->
## Quizmaster

The Quizmaster uses the kill button to mark one player. At the next meeting, “?!” appears beside the marked player's name, and they must answer the question correctly. A wrong or missing answer kills them. If the Quizmaster is voted out during the meeting, the mark is cleared and the target survives. If the Quizmaster is killed during the meeting, the mark remains and the target may still die after the meeting. If the marked player is killed before the meeting starts, the mark resets. The Quizmaster can mark only one player per round. Its neutral win uses the standard neutral end check: no Impostors remain, all living counted neutrals share one count type, and their total is at least the Crew count.

The marked player can answer with `/answer [letter]` and review the question and answers with `/qmquiz`.

### Settings

- **Question difficulty:** Set question difficulty from 1 (easiest) to 4 (hardest).
- **Can vent after marking:** Whether the Quizmaster can use vents after marking a player.
- **Can kill after marking:** When enabled, the Quizmaster can still use the kill button after marking. When disabled, they cannot use it normally after marking. The displayed kills-per-round option is not read by the current code and does not limit the number of kills.
- **Can ask about past games:** When enabled, questions may refer to earlier rounds; otherwise, questions refer only to the current game.
