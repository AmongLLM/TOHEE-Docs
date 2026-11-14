---
{"id":"role-workaholic","kind":"role","category":"neutral","title":{"en":"Workaholic","zh-CN":"工作狂"},"summary":{"zh-CN":"完成所有任务后单独获胜；房主可允许其死亡后继续做幽灵任务并获胜。","en":"Complete all tasks to win alone; the host can allow the Workaholic to finish ghost tasks and win after death."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Neutral/Workaholic.cs"}
---
<!-- zh-CN -->
## 工作狂

工作狂完成分配给自己的所有任务后单独获胜；是否比其他玩家有更多任务取决于任务设置。根据房主设置，工作狂可能必须存活才能获胜，也可能在死亡后继续完成幽灵任务并获胜。

## 设置

- **人数上限**：一局中可出现的工作狂数量上限。
- **死亡后不能获胜**：开启后，工作狂被击杀或放逐后不能获胜；关闭后，若能继续完成任务，死亡后仍可获胜。
- **通风冷却**：工作狂再次使用通风口前的等待时间。
- **所有人知道工作狂身份**：开启后，每次会议都会向所有人揭示存活工作狂；关闭后工作狂看起来与普通玩家相同。
- **首次会议提示**：开启后，若工作狂存活且允许死亡后获胜、幽灵任务也已开启，工作狂会得到相应提示；关闭后不提供提示。
- **覆盖任务数**：开启后，可单独设置工作狂是否有普通任务，以及长、短任务数量；关闭后使用与其他玩家相同的任务数。
- **猜测模式中可猜职业**：设置工作狂能否在猜测模式中猜测。

<!-- en -->
## Workaholic

The Workaholic wins alone by completing all assigned tasks; whether they have more tasks than other players depends on the task settings. Depending on host settings, they may need to survive or may continue tasks as a ghost and win after death.

## Settings

- **Maximum number:** Maximum number of Workaholics in a match.
- **Cannot win after death:** When enabled, the Workaholic cannot win after being killed or voted out. When disabled, they can still win after death if they continue completing tasks.
- **Vent cooldown:** Time before the Workaholic can vent again.
- **Everyone knows the Workaholic:** When enabled, the Workaholic is revealed at every meeting; otherwise, they appear as a normal player.
- **Advice at the first meeting:** When enabled, an alive Workaholic is told whether they can win after death when ghost tasks are enabled. When disabled, no advice is given.
- **Override tasks:** When enabled, configure whether the Workaholic has common tasks and the number of long and short tasks. When disabled, use the same tasks as other players.
- **Can guess in Guesser Mode:** Whether the Workaholic can guess roles in Guesser Mode.
