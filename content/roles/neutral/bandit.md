---
{"id":"role-bandit","kind":"role","category":"neutral","title":{"en":"Bandit","zh-CN":"强盗"},"summary":{"en":"Use a single kill-button press to steal an addon; double-click to kill instead. After Impostors are gone, Bandits win when they are the only counted Neutral team and at least as numerous as Crew.","zh-CN":"单击击杀按钮偷取附加职业，双击则会击杀目标。内鬼阵营消失后，若强盗是唯一存活的计数中立阵营且人数不少于船员，即可获胜。"},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Bandit.cs"}
---
<!-- zh-CN -->
## 强盗

强盗使用击杀按钮偷取玩家的附加职业。单击会开始偷取；若没有在双击判定时间内再次点击，附加职业就会被偷取。双击同一目标则会正常击杀目标。根据设置，偷取立即生效，或在下一次会议开始时生效。达到偷取次数上限后，强盗可以正常击杀；目标没有可偷附加职业或带有顽固附加职业时也会被击杀。内鬼阵营消失后，若强盗是唯一存活的计数中立阵营且人数不少于船员，强盗即可获胜。

干净者、绝境者和恋人不能被偷取；开启通风口选项后，敏捷者也不能被偷取。

### 设置

- **人数上限**：一局中可出现的强盗数量上限。
- **偷取次数上限**：强盗可偷取附加职业的次数。
- **击杀冷却**：再次使用击杀按钮前的等待时间。
- **偷取冷却**：再次偷取附加职业前的等待时间。
- **偷取模式**：立即偷取，或在会议开始时偷取。
- **可偷取背叛类附加职业**：设置强盗能否偷取背叛类附加职业。
- **可偷取仅限内鬼的附加职业**：设置强盗能否偷取仅限内鬼的附加职业。
- **可使用破坏**：设置强盗能否发动破坏。
- **可使用通风口**：设置强盗能否使用通风口。

<!-- en -->
## Bandit

The Bandit uses the kill button to steal an addon. A single click starts a steal; if the Bandit does not click the same target again within the double-click window, the addon is stolen. Double-clicking the same target kills them instead. Depending on the selected mode, the addon is stolen immediately or when the next meeting starts. After reaching the steal limit, the Bandit can kill normally. A target with no stealable addon or a Stubborn addon is killed instead. After Impostors are gone, the Bandit wins when it is the only surviving counted Neutral team and is at least as numerous as Crew.

Cleansed, Last Impostor, and Lovers cannot be stolen. If Bandit can vent is enabled, Nimble cannot be stolen either.

### Settings

- **Maximum number:** Maximum number of Bandits in a match.
- **Maximum steals:** Number of addons the Bandit can steal.
- **Kill cooldown:** Time before using the kill button again.
- **Steal cooldown:** Time before stealing an addon again.
- **Steal mode:** Steal immediately or when a meeting starts.
- **Can steal Betrayal addons:** Whether Betrayal addons can be stolen.
- **Can steal Impostor-only addons:** Whether Impostor-only addons can be stolen.
- **Can sabotage:** Whether the Bandit can sabotage.
- **Can vent:** Whether the Bandit can use vents.
