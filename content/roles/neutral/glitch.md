---
{"id":"role-glitch","kind":"role","category":"neutral","title":{"en":"Glitch","zh-CN":"缺点者"},"summary":{"zh-CN":"通过黑入限制玩家行动并伪装成随机玩家；内鬼消失后，若缺点者是唯一存活的计数中立阵营且人数不少于船员，即可获胜。","en":"Hack players to restrict their actions and mimic a random player; after Impostors are gone, win when Glitch is the only surviving counted Neutral team and at least as numerous as Crew."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Glitch.cs"}
---
<!-- zh-CN -->
## 缺点者

缺点者可以黑入玩家，暂时阻止其击杀、使用通风口和报告尸体。单击使用黑入，双击使用击杀。

缺点者还可以使用破坏按钮，在有限时间内伪装成随机玩家。按下按钮会执行伪装，而不会真的触发破坏。

内鬼阵营消失后，若缺点者是唯一存活的计数中立阵营且人数不少于船员，缺点者即可获胜。

## 设置

- **击杀冷却**：再次击杀前的等待时间。
- **黑入冷却**：再次黑入玩家前的等待时间。
- **黑入持续时间**：目标被黑入的时长。
- **伪装冷却**：再次伪装前的等待时间。
- **伪装持续时间**：伪装持续的时长。
- **可使用通风口**：设置缺点者能否使用通风口。
- **内鬼视野**：开启后拥有内鬼视野；关闭后不拥有内鬼视野。

<!-- en -->
## Glitch

The Glitch can hack a player, temporarily preventing them from killing, venting, or reporting bodies. Single-click to hack and double-click to kill.

The Glitch can also use the sabotage button to mimic a random player for a limited time. The button press triggers the mimic and the sabotage itself does not happen.

After Impostors are gone, Glitch wins when it is the only surviving counted Neutral team and at least as numerous as Crew.

## Settings

- **Kill cooldown:** Time before the Glitch can kill again.
- **Hack cooldown:** Time before hacking another player.
- **Hack duration:** How long the target remains hacked.
- **Mimic cooldown:** Time before mimicking a player again.
- **Mimic duration:** How long the mimic lasts.
- **Can vent:** Whether the Glitch can use vents.
- **Impostor vision:** When enabled, the Glitch has Impostor vision.
