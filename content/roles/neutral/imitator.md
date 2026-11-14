---
{"id":"role-imitator","kind":"role","category":"neutral","title":{"en":"Imitator","zh-CN":"效仿者"},"summary":{"zh-CN":"每局可用一次击杀按钮效仿玩家；根据目标职业转变为警长、逃亡者、指定职业或不兼容中立职业的替代职业。","en":"Use the kill button once to imitate a player; depending on the target, become a Sheriff, Refugee, a supported copied role, or the fallback for a designated incompatible Neutral role."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Imitator.cs"}
---
<!-- zh-CN -->
## 效仿者

效仿者每局只有一次效仿机会。使用击杀按钮后，若目标是船员会变为警长，若目标是内鬼会变为逃亡者。效仿者还可以直接变为代码支持的职业（豺狼、巫师、毒师、主宰、嗜血骑士或警长）。代码列出的另一组中立职业会使用设置指定的替代职业；不在处理列表中的职业不会触发转变，效仿机会也不会消耗。

## 设置

- **人数上限**：一局中可出现的效仿者数量上限。
- **效仿冷却**：再次效仿玩家前的等待时间。
- **不兼容中立职业的替代职业**：目标职业与效仿者不兼容时，选择效仿者转变为失忆者、效仿者、起诉人、赌徒或独行者。

<!-- en -->
## Imitator

The Imitator has one use per game. Using the kill button on a Crewmate changes the Imitator into a Sheriff; using it on an Impostor changes them into a Refugee. The Imitator can also copy supported roles directly (Jackal, Hex Master, Poisoner, Juggernaut, Blood Knight, or Sheriff). A separate listed group of Neutral roles uses the fallback selected in the settings. Roles outside the handled lists do not trigger a transformation or consume the use.

## Settings

- **Maximum number:** Maximum number of Imitators in a match.
- **Imitate cooldown:** Time before imitating another player.
- **Role for an incompatible Neutral:** If the target's role is incompatible, choose whether the Imitator becomes an Amnesiac, Imitator, Pursuer, Follower, or Maverick.
