---
{"id":"role-timethief","kind":"role","category":"impostor","title":{"zh-CN":"蚀时者","en":"Time Thief"},"summary":{"zh-CN":"每次击杀都会缩短会议投票时间；蚀时者死亡后可按设置恢复被偷走的时间。","en":"Each kill reduces meeting voting time; the stolen time can be restored when the Time Thief dies."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/TimeThief.cs"}
---

<!-- zh-CN -->
## 技能

每次击杀都会缩短会议投票时间。缩短时间按击杀数累计，最低不会低于房主设定的投票时间下限。蚀时者死亡后是否恢复被缩短的时间，由选项决定。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名蚀时者。
- **击杀冷却**：设置击杀冷却。
- **每次击杀缩短的会议时间**：设置每次击杀减少的投票时间。
- **最低投票时间**：设置投票时间可缩短到的最低值。
- **死亡后恢复被偷走的时间**：开启时，蚀时者死亡后恢复时间；关闭时，减少的时间保留。

<!-- en -->
## Ability

Each kill reduces meeting voting time. The reduction accumulates with the kill count, down to the configured minimum voting time. Whether the stolen time is restored when the Time Thief dies is controlled by a setting.

## Options

- **Max**: Maximum number of Time Thieves in a match.
- **Kill Cooldown**: Time before the Time Thief can kill again.
- **Lower Meeting Time By**: Voting time removed for each kill.
- **Minimum Voting Time**: Lowest voting time can be reduced to.
- **Return Stolen Time Upon Death**: When enabled, voting time is restored when the Time Thief dies; otherwise the reduction remains.
