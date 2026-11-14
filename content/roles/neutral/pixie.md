---
{"id":"role-pixie","kind":"role","category":"neutral","title":{"en":"Pixie","zh-CN":"小精灵"},"summary":{"zh-CN":"每轮标记目标，并在会议中促成至少一名目标被放逐以得分；达到分数后随胜利阵营获胜。","en":"Mark targets each round and get at least one voted out at the meeting to score; reach the required score to win with the winning team."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Pixie.cs"}
---
<!-- zh-CN -->
## 小精灵

小精灵每轮可以使用击杀按钮标记至多设定数量的目标，目标会以彩色名字显示。会议放逐一名标记目标时，小精灵获得一分。若实际有人被放逐，但放逐的不是标记目标，且仍有标记目标存活，开启自杀选项后小精灵会自杀；跳过会议、没有标记目标或所有标记目标都已死亡时不会因此自杀。通常在会议放逐后会清空本轮目标；达到获胜分数后，目标列表可能不会清空。

达到房主设置的分数后，小精灵会随获胜阵营获胜。

## 设置

- **人数上限**：一局中可出现的小精灵数量上限。
- **获胜所需分数**：小精灵获胜需要的分数。
- **每轮目标上限**：每轮可标记的玩家数量。
- **标记冷却**：标记下一名玩家前的等待时间。
- **目标未被放逐时自杀**：默认关闭。开启后，只有在有人被放逐、放逐者不是标记目标且仍有标记目标存活时，小精灵才会自杀；跳过会议不会触发自杀，也不会重置目标名单。

<!-- en -->
## Pixie

Each round, the Pixie can use the kill button to mark up to the configured number of targets. Their names appear in color. When a marked target is voted out, the Pixie earns one point. If someone else is voted out while at least one marked target is still alive, the Pixie suicides only when the suicide option is enabled. Skipping the meeting, marking nobody, or having all marked targets already dead does not trigger this suicide. The target list normally clears after an ejection; once the Pixie has reached the required score, the list may remain uncleared.

The Pixie wins with the winning team after reaching the host-configured score.

## Settings

- **Maximum number:** Maximum number of Pixies in a match.
- **Points required to win:** Score needed for victory.
- **Maximum targets per round:** Number of players the Pixie can mark each round.
- **Mark cooldown:** Time before marking another player.
- **Suicide if no target is voted out:** Off by default. When enabled, the Pixie suicides only if someone is voted out, that player was not a marked target, and at least one marked target is still alive. Skipping the meeting does not trigger the suicide or reset the target list.
