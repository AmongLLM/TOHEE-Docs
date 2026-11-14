---
{"id":"role-jailer","kind":"role","category":"crewmate","title":{"zh-CN":"狱警","en":"Jailer"},"summary":{"zh-CN":"狱警用击杀按钮监禁玩家，使其下一次会议无法投票或被投票；狱警可投票处决囚犯。处决不属于已启用类别或内鬼阵营的目标后，会失去剩余处决次数。","en":"The Jailer confines a player so they cannot vote or be voted in the next meeting, and can execute prisoners. Executing a target outside the enabled categories and Impostor team consumes all remaining execution uses."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Jailer.cs"}
---

<!-- zh-CN -->
## 职业能力

狱警使用击杀按钮将玩家关进监狱。被监禁者在下一次会议中不能投票，也不能被其他人投票（其票数为 0）。狱警可以投票处决囚犯；若处决无辜玩家，狱警在本局剩余时间内会失去处决能力。狱警的处决次数有限。

被监禁者不能被职业猜测或法官审判；若被监禁者能进行猜测，则只能猜测狱警。狱警在有剩余次数时投票给囚犯，就会在会议后处决目标；类别设置不会阻止这次处决，只决定目标类别是否能保留剩余次数。不属于已启用类别或内鬼阵营的目标仍会被处决，但狱警的剩余次数会全部清零。

## 设置

- **数量上限**：设置一局中狱警的最大人数。
- **监禁冷却**：设置再次监禁玩家前的等待时间。
- **处决次数上限**：设置狱警最多可以处决的次数。
- **处决后保留友善中立/混乱中立/邪恶中立/带刀中立/灾厄中立次数**：分别设置处决对应中立类别后是否保留剩余次数；未启用的类别仍会被处决，但会清空剩余次数。
- **处决后保留带刀船员次数**：处决带刀船员后是否保留剩余次数；未启用时目标仍会被处决，但会清空剩余次数。
- **会议开始时通知被监禁者**：开启时会议开始会通知囚犯；关闭时不通知。

<!-- en -->
## Role

The Jailer uses the kill button to put a player in jail. During the next meeting, the jailed player cannot vote or be voted for, and their vote count is zero. The Jailer may execute a prisoner by voting for them. If they execute an innocent player, they lose the ability to execute for the rest of the game. Executions are limited.

Jailed players cannot be guessed or judged. If a jailed player can guess, they can guess only the Jailer. If the Jailer has an execution use and votes for the prisoner, the target is executed after the meeting. Category settings do not block that execution; they determine whether uses remain afterward. A target outside the enabled categories and Impostor team is still executed, but the Jailer loses all remaining uses.

## Settings

- **Maximum count**: Sets the maximum number of Jailers in a match.
- **Jail cooldown**: Sets how long the Jailer must wait before jailing someone again.
- **Maximum executions**: Sets how many times the Jailer can execute.
- **Preserve executions after Neutral Benign / Neutral Chaos / Neutral Evil / Neutral Killing / Neutral Apocalypse**: Each setting controls whether uses remain after executing that Neutral category; a disabled category is still executed but clears the remaining uses.
- **Preserve executions after Crew Killing**: Controls whether uses remain after executing a Killing Crewmate; a disabled category is still executed but clears the remaining uses.
- **Notify jailed player when meeting starts**: ON notifies jailed players when the meeting begins; OFF does not.
