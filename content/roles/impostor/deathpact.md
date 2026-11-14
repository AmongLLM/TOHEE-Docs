---
{"id":"role-deathpact","kind":"role","category":"impostor","title":{"zh-CN":"死亡契约","en":"Deathpact"},"summary":{"zh-CN":"变形标记玩家；达到人数后必须在限时内会合，否则契约玩家死亡，会议也可按设置触发死亡。","en":"Shapeshifts to mark players; once the pact is complete they must meet before the deadline or die, and meetings can trigger deaths by setting."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Impostor/Deathpact.cs"}
---

<!-- zh-CN -->
## 技能

变形标记目标进入死亡契约。达到设定人数后，契约玩家必须在时限内彼此靠近；若到期仍未会合，他们都会死亡。任何契约玩家在完成前死亡或断线都会使契约撤销。会议开始会解除所有当前契约，也可按设置杀死契约成员。契约成立期间，玩家可按设置获知其他契约成员并受到视野限制。

## 选项

- **数量上限（Max）**：设置本局最多可有多少名死亡契约者。
- **击杀冷却**：设置击杀冷却。
- **契约分配冷却**：设置再次变形标记前的等待时间。
- **契约持续时间**：设置玩家完成会合前的时限。
- **契约所需人数**：设置组成契约的玩家数量。
- **显示契约玩家箭头**：开启时显示指向其他契约玩家的箭头。
- **降低契约玩家视野**：开启时降低契约玩家视野，并可设置视野倍率；关闭时不降低。
- **会议开始时杀死契约玩家**：开启时，会议开始会杀死当前契约玩家；关闭时会议只会解除契约。
- **契约玩家可以召开会议**：开启时契约玩家可以报告尸体或召开会议；关闭时禁止这些操作。
- **显示变形动画**：开启时显示变形动画；关闭时不显示。

<!-- en -->
## Ability

Shapeshifting marks a target for a death pact. Once the configured number of players are marked, they must meet within the time limit. All pact members die if they fail to meet before it expires. If any member dies or disconnects before the pact is completed, it is cancelled. A meeting clears active pacts and can kill their members depending on the setting. Pact members can receive arrows to each other and have reduced vision according to the settings.

## Options

- **Max**: Maximum number of Deathpact roles in a match.
- **Kill Cooldown**: Kill cooldown.
- **Death Pact Assign Cooldown**: Time before another target can be marked.
- **Death Pact Duration**: Time allowed for pact members to meet.
- **Number of Players in Death Pact**: Number of players required to form a pact.
- **Show Arrows to Other Players in Death Pact**: When enabled, arrows point to other pact members.
- **Reduce Vision for Players in Death Pact**: When enabled, pact members have reduced vision, with a configurable multiplier.
- **Kill Players in Death Pact on Meeting**: When enabled, starting a meeting kills members of an active pact; otherwise the pact is only cleared.
- **Players in Active Death Pact Can Call Meeting**: When enabled, pact members can report or call a meeting; otherwise they cannot.
- **Show Shapeshift Animations**: When enabled, shapeshift animations are shown; otherwise they are hidden.
