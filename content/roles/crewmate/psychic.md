---
{"id":"role-psychic","kind":"role","category":"crewmate","title":{"zh-CN":"愚者","en":"Psychic"},"summary":{"zh-CN":"愚者会议期间会看到若干红名，其中至少一名从邪恶候选池中抽取；其他红名从其余存活玩家中抽取。成为叛徒后可看到带刀中立、邪恶中立和带刀船员红名。","en":"The Psychic sees several red names in meetings, including one drawn from an Evil candidate pool; the remaining red names come from other living players. As a Madmate, they see Neutral Killing, Neutral Evil, and Killing Crewmates in red."},"source":"https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/Crewmate/Psychic.cs"}
---

<!-- zh-CN -->
## 职业能力

愚者在会议中会看到若干玩家的名字显示为红色，其中至少一名从邪恶候选池中抽取；其他红名从其余存活玩家中抽取。成为叛徒时会看到带刀中立、邪恶中立和带刀船员显示为红名。

## 设置

- **数量上限**：设置一局中愚者的最大人数。
- **每次会议红名数**：设置每次会议显示的红名人数；至少一名红名玩家是坏人。
- **每次会议刷新红名**：开启时每次会议都会重新抽取红名；关闭时复用现有名单，名单为空时才重新抽取。

下列阵营开关只影响至少一名邪恶红名的候选池；其余红名仍从其他存活玩家中抽取，因此关闭某类别不代表该类别永远不会显示为红名。

- **带刀船员可进入邪恶候选池**：开启时带刀船员可作为必定红名的候选；关闭时不会进入该候选池。
- **友善中立可进入邪恶候选池**：开启时友善中立可作为必定红名的候选；关闭时不会进入该候选池。
- **邪恶中立可进入邪恶候选池**：开启时邪恶中立可作为必定红名的候选；关闭时不会进入该候选池。
- **混乱中立可进入邪恶候选池**：开启时混乱中立可作为必定红名的候选；关闭时不会进入该候选池。
- **灾厄中立可进入邪恶候选池**：开启时灾厄中立可作为必定红名的候选；关闭时不会进入该候选池。
- **带刀中立可进入邪恶候选池**：开启时带刀中立可作为必定红名的候选；关闭时不会进入该候选池。

<!-- en -->
## Role

During meetings, the Psychic sees several players' names in red, including one drawn from an Evil candidate pool; the remaining red names are drawn from other living players. As a Madmate, the Psychic sees Neutral Killing, Neutral Evil, and Killing Crewmates as red.

## Settings

- **Maximum count**: Sets the maximum number of Psychics in a match.
- **Maximum red names**: Sets how many red names can appear each meeting; at least one red-named player is Bad.
- **New red names every meeting**: ON triggers another red-name draw each meeting; OFF reuses the current selection and draws again only when the list is empty.

The following team switches affect only the pool for the guaranteed Evil red name. The remaining red names are still drawn from other living players, so OFF does not guarantee a category will never appear red.

- **Killing Crewmates can fill the Evil slot**: ON adds them to the guaranteed Evil candidate pool; OFF removes them from that pool.
- **Neutral Benign can fill the Evil slot**: ON adds them to the guaranteed Evil candidate pool; OFF removes them from that pool.
- **Neutral Evil can fill the Evil slot**: ON adds them to the guaranteed Evil candidate pool; OFF removes them from that pool.
- **Neutral Chaos can fill the Evil slot**: ON adds them to the guaranteed Evil candidate pool; OFF removes them from that pool.
- **Neutral Apocalypse can fill the Evil slot**: ON adds them to the guaranteed Evil candidate pool; OFF removes them from that pool.
- **Neutral Killing can fill the Evil slot**: ON adds them to the guaranteed Evil candidate pool; OFF removes them from that pool.
