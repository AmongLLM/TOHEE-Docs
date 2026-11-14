---
{"id":"role-spiritualist","kind":"role","category":"crewmate","title":{"zh-CN":"灵魂论者","en":"Spiritualist"},"summary":{"zh-CN":"灵魂论者会看到指向最近一次报告的尸体玩家的箭头；会议结束后，该玩家会收到提示。","en":"The Spiritualist sees an arrow to the player whose body was most recently reported; after the meeting, that player receives a notice."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Spiritualist.cs"}
---

<!-- zh-CN -->
## 职业能力

灵魂论者会看到指向最近一次报告的尸体玩家（其鬼魂）的箭头；会议结束后，该玩家会收到提示。箭头按设置的间隔和持续时间显示。实现中不按鬼魂阵营改变目标或引导方向。

## 设置

- **数量上限**：设置一局中灵魂论者的最大人数。
- **鬼魂箭头间隔**：设置灵魂论者等待鬼魂箭头出现的时间间隔。
- **鬼魂箭头持续时间**：设置箭头每次显示多久。

<!-- en -->
## Role

The Spiritualist sees an arrow pointing to the ghost of the player whose body was most recently reported. After the meeting, that player receives a notice. The arrow appears according to its configured interval and duration; its direction does not depend on ghost alignment.

## Settings

- **Maximum count**: Sets the maximum number of Spiritualists in a match.
- **Ghost arrow interval**: Sets how long the Spiritualist waits between ghost-arrow appearances.
- **Ghost arrow duration**: Sets how long each ghost arrow remains visible.
