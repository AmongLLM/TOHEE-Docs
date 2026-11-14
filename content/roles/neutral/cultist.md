---
{"id":"role-cultist","kind":"role","category":"neutral","title":{"en":"Cultist","zh-CN":"魅魔"},"summary":{"zh-CN":"用击杀按钮魅惑玩家，使其保留技能并加入魅魔阵营；内鬼消失且魅魔人数不少于船员时可按中立阵营胜利条件获胜。","en":"Charm players with the kill button; they keep their abilities and join the Cultist team. After Impostors are gone, Cultists can win at parity if no other counted Neutral team remains."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Cultist.cs"}
---
<!-- zh-CN -->
## 魅魔

内鬼阵营消失后，若魅魔是唯一存活的计数中立阵营，且魅魔人数不少于船员人数，魅魔即可获胜。魅魔可以使用击杀按钮魅惑非中立玩家；开启选项后也能魅惑可转换的中立玩家。被魅惑者保留原有技能，但会计入魅魔阵营，并失去原本的胜利条件。

## 设置

- **魅惑冷却**：再次魅惑前的等待时间。
- **每次魅惑增加的冷却**：每成功魅惑一人，冷却增加的时长。
- **魅惑次数上限**：魅魔可魅惑玩家的次数。
- **知道被魅惑玩家职业**：开启后可看到被魅惑玩家的职业。
- **被魅惑者互相认识**：开启后，被魅惑者能看到彼此。
- **被魅惑者计入**：设置被魅惑者计为无阵营、魅魔阵营或其原阵营。
- **可魅惑中立职业**：开启后可以魅惑中立玩家；关闭后尝试魅惑中立玩家会收到无法魅惑的提示。

<!-- en -->
## Cultist

After Impostors are gone, the Cultist wins when it is the only surviving counted Neutral team and its count is at least the Crewmate count. The Cultist can use the kill button to charm a non-Neutral player; an option also allows charming eligible Neutrals. Charmed players keep their abilities, but their count follows the selected Charmed Count Mode and they lose their original win conditions.

## Settings

- **Charm cooldown:** Time before charming another player.
- **Cooldown increase per charm:** Additional cooldown after each charm.
- **Maximum charms:** Number of players the Cultist can charm.
- **Know charmed players' roles:** Whether the Cultist sees the roles of charmed players.
- **Charmed players know each other:** Whether charmed players can see other charmed players.
- **Charmed players count as:** Choose Nothing, Cultist, or their original team.
- **Neutral roles can be charmed:** When enabled, Neutrals can be charmed; otherwise, attempting to charm one displays “This player cannot be Charmed.”
