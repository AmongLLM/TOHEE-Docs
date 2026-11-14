---
{"id":"role-plaguedoctor","kind":"role","category":"neutral","title":{"en":"Plague Scientist","zh-CN":"瘟疫学家"},"summary":{"zh-CN":"直接感染玩家并通过近距离接触继续传播；感染所有存活玩家后获胜。","en":"Directly infect a player and spread through proximity; infect every living player to win."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/PlagueDoctor.cs"}
---
<!-- zh-CN -->
## 瘟疫学家

瘟疫学家的目标是感染所有符合设置的存活玩家。可以使用击杀按钮直接感染一名玩家；之后，感染者附近的玩家停留达到设定时间也会被感染。开启自我感染后，瘟疫学家本人也可成为感染目标。感染进度会累积，不会因距离拉远或召开会议而重置。会议结束后会暂停传播一段时间，但开局时不会应用此延迟。所有符合设置的存活玩家都被感染后，瘟疫学家获胜。直接感染上限设为大于1时，实际仍只有第一次直接感染；该操作会耗尽全部剩余次数。

### 设置

- **直接感染上限**：设置界面显示的次数；实际只有第一次直接感染，该操作会耗尽全部次数，因此设为大于1不会增加直接感染次数。
- **被击杀时感染凶手**：开启后，如果瘟疫学家仍有直接感染次数，击杀者会被感染。
- **感染所需时间**：玩家在感染者附近停留多久才会被感染。
- **感染距离**：感染传播所需的距离范围。
- **会议后感染延迟**：会议结束后暂停感染传播的时间；开局时不会应用此延迟。
- **可以感染自己**：设置瘟疫学家能否感染自己。
- **可在通风口中感染**：设置处于通风口内外的玩家能否相互传播感染。

<!-- en -->
## Plague Scientist

The Plague Scientist's goal is to infect every living player eligible under the settings. They can directly infect a player with the kill button, then infection spreads to players who stay within range of an infected player for the configured time. When self-infection is enabled, the Plague Scientist can also become an infection target. Progress is cumulative and does not reset when players move apart or after meetings. Spread pauses for the configured delay after each meeting, but not at game start. The Plague Scientist wins once all eligible living players are infected. The direct-infection limit setting can display multiple charges, but only one direct infection is available; using it consumes all remaining charges.

### Settings

- **Direct infection limit:** The displayed number of charges. Only one direct infection is available; using it consumes all remaining charges, so a value above one does not provide more direct infections.
- **Infect killer when killed:** When enabled, the player who kills the Plague Scientist becomes infected if a direct infection remains.
- **Infection time:** Time a player must spend near an infected player to become infected.
- **Infection distance:** Range for infection spread.
- **Delay after meetings:** Time before infection spreads after a meeting ends. The delay does not apply at game start.
- **Can infect self:** Whether the Plague Scientist can infect themself.
- **Can infect while in vent:** Whether players inside and outside vents can infect one another.
