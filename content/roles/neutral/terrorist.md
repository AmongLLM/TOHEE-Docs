---
{"id":"role-terrorist","kind":"role","category":"neutral","title":{"en":"Terrorist","zh-CN":"恐怖分子"},"summary":{"zh-CN":"完成所有任务后被击杀或放逐即可单独获胜；自杀仅在设置允许时有效。","en":"Complete all tasks and then be killed or voted out to win alone; suicide counts only when enabled."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Terrorist.cs"}
---
<!-- zh-CN -->
## 恐怖分子

恐怖分子完成所有任务后死亡即可单独获胜；被击杀或被投票放逐都可获胜。允许自杀获胜的设置开启后，自杀也符合条件；默认为关闭。死因是“Armageddon”的情况不触发此胜利。若有转换类附加职业，结算时会按该转换职业的胜利规则处理。

### 设置

- **人数上限**：一局中可出现的恐怖分子数量上限。
- **自杀后可获胜**：开启后，恐怖分子完成任务后自杀也可获胜。
- **猜测模式中可猜职业**：设置恐怖分子能否在猜测模式或作为猜测者附加职业时猜测。
- **覆盖任务数**：开启后，可单独设置是否有普通任务，以及长、短任务数量；关闭后使用其他玩家的任务数。

<!-- en -->
## Terrorist

The Terrorist wins alone by completing all tasks and then dying by a kill or vote. Suicide counts only when the option is enabled, which is off by default. An Armageddon death does not trigger the Terrorist win. A converted addon can redirect the win to its team.

### Settings

- **Maximum number:** Maximum number of Terrorists in a match.
- **Can win by suicide:** When enabled, the Terrorist can win by suiciding after finishing all tasks.
- **Can guess:** Whether the Terrorist can guess in Guesser Mode or as a Guesser addon.
- **Override tasks:** When enabled, configure common, long, and short tasks; otherwise, use the normal task setup.
