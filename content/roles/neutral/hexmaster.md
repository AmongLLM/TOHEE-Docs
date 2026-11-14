---
{"id":"role-hexmaster","kind":"role","category":"neutral","title":{"en":"Hex Master","zh-CN":"巫师"},"summary":{"zh-CN":"可切换击杀与下咒模式；会议结束时，若巫师存活，被下咒的玩家会死亡。","en":"Switch between killing and hexing; hexed players die after a meeting if the Hex Master is still alive."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/HexMaster.cs"}
---
<!-- zh-CN -->
## 巫师

巫师可以切换击杀与下咒模式。下咒效果与女巫的法术相同；会议期间，下咒目标会显示标记。会议结束时，若巫师仍存活，被下咒的玩家会死亡。每次会议后，下咒目标会清除。

### 设置

- **切换模式方式**：设置切换击杀/下咒模式的操作方式。
- **下咒显示为法术**：开启后，下咒标记显示为法术样式；关闭后显示巫师专属标记。
- **内鬼视野**：设置巫师是否拥有内鬼视野。

<!-- en -->
## Hex Master

The Hex Master can switch between killing and hexing. Hexing works like a Witch's spell; hexed players are marked during meetings and die at the end of a meeting if the Hex Master is still alive. Hex marks are cleared after each meeting.

### Settings

- **Switch action via:** Choose how to switch between kill and hex modes.
- **Hexes look like spells:** When enabled, hex marks use the spell appearance; otherwise, they use the Hex Master's mark.
- **Impostor vision:** Whether the Hex Master has Impostor vision.
