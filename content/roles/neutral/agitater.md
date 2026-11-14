---
{"id":"role-agitater","kind":"role","category":"neutral","title":{"en":"Agitator","zh-CN":"煽动者"},"summary":{"zh-CN":"传递炸弹；持弹者会在会议、尸体报告或倒计时结束时死亡。无内鬼且煽动者是唯一存活的计数中立阵营时，人数达到船员人数即可获胜。","en":"Pass a bomb; its holder dies when a meeting is called, a body is reported, or the timer expires. With no Impostors, the Agitater wins at parity when it is the only surviving counted Neutral team."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Agitater.cs"}
---
<!-- zh-CN -->
## 煽动者

煽动者向玩家传出炸弹。持弹者靠近其他玩家时，会尝试将炸弹传给最近的一名玩家；每次传递都有冷却，且前一名持有者不能立即接回炸弹。系统先选择最近的玩家再检查能否传递；若该玩家不能接收，炸弹不会改传给更远的玩家。未传出的炸弹会在爆炸倒计时结束时杀死持有者。会议召开或有人报告尸体时，持弹者也会死亡。尝试把炸弹传给瘟疫会杀死当前持弹者。开启自动报告诱饵后，煽动者可以正常击杀诱饵，而不会给其传炸弹。

无内鬼且煽动者是唯一存活的计数中立阵营时，煽动者阵营人数达到船员人数即可获胜。

### 设置

- **人数上限**：一局中可出现的煽动者数量上限。
- **炸弹冷却**：煽动者再次投出炸弹前的等待时间。
- **炸弹传递冷却**：当前持弹者再次传递前的等待时间。
- **炸弹爆炸冷却**：炸弹爆炸前的等待时间。
- **煽动者可接收炸弹**：设置煽动者能否接收他人传来的炸弹。
- **自动报告诱饵**：开启后，煽动者可以正常击杀诱饵。
- **内鬼视野**：设置煽动者是否拥有内鬼视野。

<!-- en -->
## Agitator

The Agitator passes a bomb to another player. When the holder gets close to another player, the game checks the nearest player first; each pass has a cooldown, and the previous holder cannot immediately receive the bomb again. If the nearest player cannot receive it, the bomb does not skip to someone farther away. If the bomb is not passed before its timer expires, the holder dies. The holder also dies if a meeting is called or a body is reported. Trying to pass the bomb to Pestilence kills the current holder. When Auto Report Bait is enabled, the Agitator can kill a Bait normally instead of passing them the bomb.

With no Impostors left, the Agitater team wins at parity when it is the only surviving counted Neutral team.

### Settings

- **Maximum number:** Maximum number of Agitators in a match.
- **Agitator bomb cooldown:** Time before the Agitator can send out another bomb.
- **Bomb pass cooldown:** Time before the current holder can pass the bomb again.
- **Bomb explode cooldown:** Time before the bomb kills its holder.
- **Agitator can get bomb:** Whether the Agitator can receive a bomb.
- **Agitator Auto Report Bait:** Whether the Agitator can kill Bait normally instead of passing them the bomb.
- **Impostor vision:** Whether the Agitator has Impostor vision.
