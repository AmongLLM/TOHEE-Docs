---
{"id":"role-altruist","kind":"role","category":"crewmate","title":{"zh-CN":"殉道者","en":"Altruist"},"summary":{"zh-CN":"殉道者可切换报告模式与复活模式；在复活模式报告尸体会牺牲自己并复活死者。","en":"The Altruist can switch between normal reporting and revival mode; reporting a body in revival mode sacrifices themself to revive the dead player."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Altruist.cs"}
---

<!-- zh-CN -->
## 职业能力

殉道者可以切换复活模式与普通报告模式。处于复活模式时报告尸体会牺牲自己并复活死者；若死者已经离开游戏，则按普通报告处理。复活的玩家不能报告自己的尸体。

## 设置

- **数量上限**：设置一局中殉道者的最大人数。
- **复活者的尸体无法被报告**：开启时，复活者的尸体不能再次报告；关闭时可以报告。
- **内鬼知道有人被复活**：开启时内鬼收到提示；关闭时不收到。
- **内鬼看到复活者箭头**：开启时内鬼看到指向复活者的箭头；关闭时不显示。
- **带刀中立知道有人被复活**：开启时带刀中立收到提示；关闭时不收到。
- **带刀中立看到复活者箭头**：开启时带刀中立看到指向复活者的箭头；关闭时不显示。

<!-- en -->
## Role

The Altruist can switch between revival mode and normal reporting. In revival mode, reporting a body sacrifices the Altruist to revive that dead player. If the dead player has left the game, the report proceeds normally. A revived player cannot report their own dead body.

## Settings

- **Maximum count**: Sets the maximum number of Altruists in a match.
- **Revived dead body cannot be reported**: ON prevents the revived player's body from being reported again; OFF allows it to be reported.
- **Impostors know a player was revived**: ON sends Impostors an alert; OFF does not.
- **Impostors get an arrow to the revived player**: ON shows them an arrow; OFF hides it.
- **Neutral Killers know a player was revived**: ON sends Neutral Killers an alert; OFF does not.
- **Neutral Killers get an arrow to the revived player**: ON shows them an arrow; OFF hides it.
