---
{"id":"role-jackal","kind":"role","category":"neutral","title":{"en":"Jackal","zh-CN":"豺狼"},"summary":{"zh-CN":"可击杀并招募跟班；仅剩豺狼与船员阵营且豺狼人数不少于船员时获胜。","en":"Kill and recruit Sidekicks; win when only the Jackal and Crew remain and the Jackal team is at least as large as Crew."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Jackal.cs"}
---
<!-- zh-CN -->
## 豺狼

豺狼可以击杀玩家。仅剩豺狼阵营与船员阵营，且豺狼阵营人数不少于船员时，豺狼获胜。豺狼可使用击杀按钮招募玩家；根据招募模式，目标会成为跟班或获得招募附加职业。若没有可招募目标或次数用尽，击杀按钮会正常击杀。豺狼可按设置使用破坏、通风口和内鬼视野。

### 设置

- **击杀冷却**：再次击杀前的等待时间。
- **可使用通风口 / 破坏 / 内鬼视野**：分别设置豺狼是否能使用通风口、发动破坏或拥有内鬼视野。
- **内鬼全部死亡后可通过破坏获胜**：开启后，内鬼全部死亡时以破坏结束游戏可使豺狼获胜。
- **其他玩家被击杀时重置冷却**：开启后，其他玩家击杀第三方目标时重置豺狼冷却；可设置重置后的冷却时间。
- **豺狼可击杀跟班**：设置豺狼能否击杀自己的跟班。
- **可招募跟班**：开启后可设置招募人数上限、招募分配模式（跟班与招募附加职业、仅跟班、仅招募附加职业），以及跟班的击杀冷却、通风口和破坏权限。
- **跟班可击杀豺狼 / 其他跟班**：分别设置跟班能否击杀豺狼和其他跟班。
- **跟班计入阵营**：设置跟班计为豺狼阵营、不计入人数或计为原阵营。

<!-- en -->
## Jackal

The Jackal can kill players. The Jackal team wins when only it and Crew remain and the Jackal team is at least as large as the Crew. The Jackal can use the kill button to recruit players. Depending on the assignment mode, a target becomes a Sidekick or receives the Recruit addon. If no eligible target is available or recruit uses are exhausted, the button kills normally. Settings can also allow sabotage, venting, and Impostor vision.

### Settings

- **Kill cooldown:** Time before the Jackal can kill again.
- **Can vent / sabotage / Impostor vision:** Whether the Jackal can use vents, sabotage, or have Impostor vision.
- **Can win by sabotage when no Impostors are alive:** When enabled, ending the game with sabotage after all Impostors are dead gives the Jackal the win.
- **Reset kill cooldown when another player gets killed:** When enabled, a third-party kill resets the Jackal's cooldown; configure the cooldown applied on reset.
- **Jackal can kill Sidekick:** Whether the Jackal can kill their Sidekicks.
- **Can recruit Sidekicks:** When enabled, configure the recruit limit, assignment mode (Sidekick and Recruit addon, Sidekick only, or Recruit addon only), and Sidekick kill cooldown, vent access, and sabotage access.
- **Sidekick can kill Jackal / other Sidekicks:** Separately allow Sidekicks to kill the Jackal and other Sidekicks.
- **Sidekick count mode:** Count Sidekicks as Jackal, as no team, or as their original team.
