---
{"id":"role-jester","kind":"role","category":"neutral","title":{"en":"Jester","zh-CN":"小丑"},"summary":{"zh-CN":"满足会议数要求后被投票放逐即可获胜；可与某些目标相关职业同时获胜。","en":"Win when voted out after the required meetings; can share the result with certain target-related roles."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Jester.cs"}
---
<!-- zh-CN -->
## 小丑

小丑达到房主设置的会议数要求后被投票放逐时获胜；游戏结束时仍存活则不会获得小丑胜利。若处刑人正在追逐被放逐的小丑，处刑人也可同时获胜；无辜者若被该小丑放逐，也可同时获胜。

### 设置

- **人数上限**：一局中可出现的小丑数量上限。
- **可召开紧急会议**：设置小丑能否召开会议。
- **可使用通风口**：设置小丑能否使用通风口。
- **进入通风口后不能移动**：开启后，小丑在通风口中不能移动；该选项在Dleks地图不稳定。
- **内鬼视野**：设置小丑是否拥有内鬼视野。
- **隐藏投票**：设置小丑的投票是否对其他玩家隐藏。
- **获胜所需会议数**：小丑获胜前必须经过的会议数。
- **放逐时公开身份**：设置小丑被放逐时是否公开职业。
- **阳光开朗大男孩替换概率**：设置隐藏角色阳光开朗大男孩替换小丑的概率。

<!-- en -->
## Jester

The Jester wins when voted out after the configured number of meetings; surviving to the end does not grant a Jester win. An Executioner targeting the exiled Jester can also win, and an Innocent whose target is the exiled Jester can share that result.

### Settings

- **Maximum number:** Maximum number of Jesters in a match.
- **Can call emergency meetings:** Whether the Jester can call a meeting.
- **Can vent:** Whether the Jester can use vents.
- **Cannot move on vents:** When enabled, the Jester cannot move while in a vent; this is unstable on the Dleks map.
- **Impostor vision:** Whether the Jester has Impostor vision.
- **Hide vote:** Whether the Jester's vote is hidden from other players.
- **Meetings needed for win:** Number of meetings required before the Jester can win by ejection.
- **Reveal upon eject:** Whether the Jester's role is revealed when ejected.
- **Sunnyboy chance:** Probability that the hidden role Sunnyboy replaces the Jester.
