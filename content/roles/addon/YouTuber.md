---
{
  "id": "role-youtuber",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "YouTuber",
    "zh-CN": "UP主"
  },
  "summary": {
    "zh-CN": "仅船员可获得；若是游戏中首名被直接击杀的玩家则立刻以 UP主胜利，凶手是否一同获胜可设置。",
    "en": "Only Crewmates can receive it; the first direct murder victim wins as YouTuber, and the killer can optionally win too."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Common/Youtuber.cs"
}
---
<!-- zh-CN -->

## 效果

UP主只分配给船员。若 UP主是游戏中首名被直接击杀的玩家，会立即触发 UP主胜利；被杀戮机器击杀时不触发。主持人可设置凶手是否也加入 UP主胜利。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **Youtuber_KillerWinsWithYouTuber（凶手与 YouTuber 一同获胜）**：控制击杀 UP主的玩家是否也一同获胜。

<!-- en -->

## Effect

YouTuber is assigned only to Crewmates. If YouTuber is the first player directly murdered in the game, a YouTuber win is triggered immediately; a kill by KillingMachine does not trigger it. The host can choose whether the killer also wins with YouTuber.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
- **Youtuber_KillerWinsWithYouTuber**: Whether the player who kills the YouTuber also wins with them.
