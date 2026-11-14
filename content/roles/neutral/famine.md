---
{"id":"role-famine","kind":"role","category":"neutral","title":{"en":"Famine","zh-CN":"饥荒"},"summary":{"zh-CN":"面包师达到存活面包玩家门槛后转变为饥荒；未被放逐时会使无面包的非灾厄玩家饿死，并标记其他非灾厄玩家在下次会议死亡。","en":"The Baker transforms into Famine after enough breaded players survive; if not voted out, Famine starves unbreaded non-Apocalypse players and marks the remaining non-Apocalypse players to die at the next meeting."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Baker.cs"}
---
<!-- zh-CN -->
## 饥荒

面包师达到设定数量的存活面包玩家后，会转变为饥荒。若饥荒在转变后的会议中没有被投出，所有没有面包的非灾厄玩家都会在会议结算时饿死。之后，饥荒可以使用击杀按钮标记剩余的非灾厄玩家；被标记者会在下一次会议开始时死亡。

饥荒无敌，转变后的下一次会议中会向所有人公布其存在。

### 设置

- **饥荒饥饿冷却**：饥荒再次使用饥饿能力前的等待时间。

<!-- en -->
## Famine

The Baker transforms into Famine once the configured number of breaded players are alive. If Famine is not voted out at the transformation meeting, every living non-Apocalypse player without bread is queued to die when the meeting resolves. Afterward, Famine can use the kill button to mark the remaining non-Apocalypse players; marked players die when the next meeting is called.

Famine is invincible, and their presence is announced to everyone at the meeting after the transformation.

### Settings

- **Famine starve cooldown:** Time before Famine can use Starve again.
