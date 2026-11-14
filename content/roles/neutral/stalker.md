---
{"id":"role-stalker","kind":"role","category":"neutral","title":{"en":"Stalker","zh-CN":"潜藏者"},"summary":{"zh-CN":"在会议外造成击杀会于电力未被破坏时触发电力破坏；存活的潜藏者可按指定阵营和胜利方式夺取胜利。","en":"A non-suicide kill outside a meeting triggers electrical sabotage when none is active; a living Stalker can take eligible Impostor or configured Crewmate wins."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Stalker.cs"}
---
<!-- zh-CN -->
## 潜藏者

潜藏者可以击杀任何人；在会议外造成非自杀击杀时，若电力未被破坏就会立即触发电力破坏。潜藏者可按设置使用通风口。

潜藏者存活时，内鬼通过非破坏胜利结束游戏，潜藏者会夺取胜利。开启“抢夺胜利”后，潜藏者会计入船员阵营；若其击杀过内鬼，且船员不是通过完成任务获胜，潜藏者也会夺取船员胜利。再开启“船员击杀中立后可夺取胜利”后，潜藏者击杀特定带刀中立也可满足这项条件；此选项不包括纵火犯和革命家。潜藏者不会夺取破坏胜利或其他阵营的胜利。

关闭“抢夺胜利”时，潜藏者属于独立的中立阵营，也可按中立阵营人数结算规则获胜。

### 设置

- **击杀冷却**：再次击杀前的等待时间。
- **内鬼视野**：设置潜藏者是否拥有内鬼视野。
- **可使用通风口**：设置潜藏者能否使用通风口。
- **船员击杀中立后可夺取胜利**：设置击杀特定带刀中立能否满足夺取船员胜利的条件；此选项需同时开启“抢夺胜利”，且不包括纵火犯和革命家。
- **抢夺胜利**：开启后，潜藏者计入船员阵营；击杀过内鬼后可夺取非任务导致的船员胜利。此选项不影响破坏胜利。

<!-- en -->
## Stalker

The Stalker can kill anyone. A non-suicide kill outside a meeting immediately triggers electrical sabotage unless one is already active. The Stalker can vent if the setting is enabled.

The living Stalker takes a non-sabotage Impostor win. When “Snatches victory” is enabled, the Stalker counts as Crew and can also take a Crewmate win that was not caused by tasks if the Stalker has killed an Impostor. The “Can count Neutral Killer” option also lets a kill on certain Neutral Killers qualify, except Arsonist and Revolutionist. The Stalker does not take sabotage wins or wins for other teams.

When “Snatches victory” is disabled, the Stalker counts as its own Neutral team and can also win under the counted-neutral endgame rule.

### Settings

- **Kill cooldown:** Time before the Stalker can kill again.
- **Impostor vision:** Whether the Stalker has Impostor vision.
- **Can vent:** Whether the Stalker can use vents.
- **Can count Neutral Killer:** Whether a kill on an eligible Neutral Killer can qualify the Stalker to take a Crewmate win. This requires “Snatches victory” and excludes Arsonist and Revolutionist.
- **Snatches victory:** When enabled, the Stalker counts as Crew and can take qualifying Crewmate wins; it does not steal every type of win.
