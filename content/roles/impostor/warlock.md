---
{"id":"role-warlock","kind":"role","category":"impostor","title":{"zh-CN":"术士","en":"Warlock"},"summary":{"zh-CN":"未变形时给玩家下咒；随后变形会令被咒者击杀离自己最近的玩家，变形状态下术士仍可正常击杀。","en":"Curses a player while unshifted; shifting makes the cursed player kill the nearest player, while the Warlock can still kill normally when shifted."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Warlock.cs"}
---

<!-- zh-CN -->
## 技能

未变形时使用击杀键给目标下咒。之后变形时，被咒者会击杀离自己最近的玩家，不受距离限制；术士在变形状态下仍可正常击杀。会议开始会清除尚未触发的咒语。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名术士。
- **被咒者可以击杀内鬼**：开启时，被咒者若离内鬼队友最近，也会击杀该队友；关闭时不会。
- **被咒者可以击杀术士本人**：开启时，若术士是最近目标，被咒者可以击杀术士；关闭时不会。
- **变形持续时间**：设置术士保持变形的时间。

<!-- en -->
## Ability

While unshifted, use the kill button to curse a target. When the Warlock shapeshifts afterward, the cursed player kills the nearest player regardless of distance. The Warlock can still make normal kills while shifted. A meeting clears any curse that has not yet triggered.

## Options

- **Max**: Maximum number of Warlocks in a match.
- **Can Kill Impostors**: When enabled, the cursed target can kill an Impostor teammate if that teammate is nearest; otherwise the target cannot kill Impostors.
- **Can Kill Themself**: When enabled, the cursed target can kill the Warlock if the Warlock is nearest; otherwise the target cannot kill the Warlock.
- **Shapeshift Duration**: How long the Warlock remains shifted.
