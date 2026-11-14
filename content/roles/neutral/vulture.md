---
{"id":"role-vulture","kind":"role","category":"neutral","title":{"en":"Vulture","zh-CN":"秃鹫"},"summary":{"zh-CN":"通过报告尸体来吞食并阻止他人再次报告；吞食足够尸体即可获胜。","en":"Eat bodies by reporting them so they cannot be reported again; eat enough bodies to win."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Vulture.cs"}
---
<!-- zh-CN -->
## 秃鹫

秃鹫通过吞食尸体获胜。报告尸体时，若进食冷却结束且本轮还可进食，秃鹫会吞掉尸体，使其无法再次报告；否则尸体会被正常报告。每次会议后，本轮进食次数和冷却重置。

### 设置

- **人数上限**：一局中可出现的秃鹫数量上限。
- **显示尸体箭头**：开启后，秃鹫会看到指向尸体的箭头。
- **获胜所需尸体数**：秃鹫必须吞食的尸体数量。
- **可使用通风口**：设置秃鹫能否使用通风口。
- **进食冷却**：再次吞食尸体前的等待时间。
- **每轮吞食上限**：每轮可吞食的尸体数量上限。
- **内鬼视野**：设置秃鹫是否拥有内鬼视野。

<!-- en -->
## Vulture

The Vulture wins by eating enough bodies. When reporting a body, the Vulture eats it if the eat cooldown has ended and they have not reached the per-round limit; the body then cannot be reported again. Otherwise, the body is reported normally. The eat limit and cooldown reset after each meeting.

### Settings

- **Maximum number:** Maximum number of Vultures in a match.
- **Arrows to dead bodies:** Whether the Vulture receives arrows pointing to bodies.
- **Bodies needed to win:** Number of bodies the Vulture must eat.
- **Can vent:** Whether the Vulture can use vents.
- **Eat cooldown:** Time before eating another body.
- **Maximum eaten bodies per round:** Per-meeting limit on eaten bodies.
- **Impostor vision:** Whether the Vulture has Impostor vision.
