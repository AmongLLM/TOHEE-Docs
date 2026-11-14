---
{"id":"role-doubleagent","kind":"role","category":"impostor","title":{"zh-CN":"双面特工","en":"Double Agent"},"summary":{"zh-CN":"会议中将定时炸弹交给一名非内鬼玩家；成为最后一名内鬼时可按设置更换职业。","en":"Passes a timed bomb to one non-Impostor during a meeting; can change roles when becoming the last Impostor, depending on settings."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/DoubleAgent.cs"}
---

<!-- zh-CN -->
## 技能

双面特工没有击杀按钮。会议中可选择一名存活的非内鬼玩家交付炸弹，每次只能交给一人，之后仍可投票。会议结束后倒计时开始，爆炸范围内的玩家会死亡。进入通风口时，可按设置拆除埋雷兵或煽动者的炸弹。只有本局开始时有多名内鬼，双面特工成为最后一名内鬼时才会触发职业更换选项。

## 选项

- **可以拆除其他职业的炸弹**：开启时可在通风口拆除埋雷兵或煽动者的炸弹。
- **会议开始时拆除活动炸弹**：开启时，会议会取消已交付的炸弹；关闭时不会取消。
  - **拆除后可在当前会议再次使用技能**：若前一枚炸弹被会议取消，开启时可在同一会议再交付一枚；关闭时需等下一次会议。
- **爆炸时间**：设置会议结束后到爆炸的时间。
- **爆炸半径**：设置爆炸范围倍率。
- **成为最后一名内鬼时更换职业**：可选择不更换、随机职业、崇拜者内鬼、叛徒或骗术师。

<!-- en -->
## Ability

The Double Agent has no kill button. During a meeting, select one living non-Impostor to receive a bomb; only one player can be selected, and the Double Agent can still vote afterward. The countdown starts when the meeting ends, and players within the blast radius die. Depending on settings, entering a vent can defuse bombs from Bastion or Agitator. Role change is checked only if the game started with multiple Impostors and the Double Agent becomes the last one.

## Options

- **Can Diffuse Bombs from Other Roles**: When enabled, vents can defuse bombs from Bastion or Agitator.
- **Diffuse Active Bomb on Meeting Call**: When enabled, a meeting cancels a bomb already passed to a player; when disabled, it does not.
  - **If Diffused, Can Use Ability in Called Meeting**: When enabled, the Double Agent can pass another bomb during that same meeting; otherwise it must wait for the next meeting.
- **Explosion Time**: Time from the end of the meeting until the bomb explodes.
- **Explosion Radius**: Blast-radius multiplier.
- **Change Role on Last Impostor**: Choose no change, a random role, Admired Impostor, Traitor, or Trickster.
