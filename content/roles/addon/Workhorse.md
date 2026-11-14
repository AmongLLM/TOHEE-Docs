---
{
  "id": "role-workhorse",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Workhorse",
    "zh-CN": "加班狂"
  },
  "summary": {
    "zh-CN": "完成全部现有任务的合格玩家会转为加班狂并获得额外任务，人数受上限控制。",
    "en": "Eligible players who finish all existing tasks become Workhorse and receive extra tasks, up to a configured limit."
  },
  "source": "https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Crewmate/Workhorse.cs"
}
---
<!-- zh-CN -->

## 效果

当玩家完成全部现有任务时，若满足条件且加班狂数量未达到上限，系统会将其转为加班狂并增加任务。默认只允许船员；关闭对应选项后，也可由完成任务且拥有可扩展任务集的其他角色成为加班狂。摆烂人、懒人不能成为目标；告密者是否允许成为加班狂单独设置。

## 设置

- **Workhorse enabled（启用 Workhorse）**：控制是否启用加班狂分配；没有百分比生成概率。
- **Maximum（人数上限）**：单局中最多可成为加班狂的玩家数量。
- **AssignOnlyToCrewmate（仅分配给 Crewmates）**：控制是否只允许船员成为加班狂。
- **WorkhorseNumLongTasks（额外长任务）**：成为加班狂时增加的长任务数量。
- **WorkhorseNumShortTasks（额外短任务）**：成为加班狂时增加的短任务数量。
- **SnitchCanBeWorkhorse（Snitch 可成为 Workhorse）**：控制告密者能否成为加班狂。

<!-- en -->

## Effect

When a player finishes all existing tasks, they become Workhorse and receive more tasks if eligible and below the configured limit. By default only Crewmates can qualify; if that restriction is disabled, other roles can qualify if they have tasks and do not override their task data. Lazy Guy and Lazy are excluded. Snitch eligibility has its own setting.

## Settings

- **Workhorse enabled**: A zero-or-one selector enables or disables Workhorse assignment; there is no percentage spawn chance.
- **Maximum**: Maximum number of players who can become Workhorse in one game.
- **AssignOnlyToCrewmate**: Whether only Crewmates can become Workhorse.
- **WorkhorseNumLongTasks**: Number of additional long tasks assigned when becoming Workhorse.
- **WorkhorseNumShortTasks**: Number of additional short tasks assigned when becoming Workhorse.
- **SnitchCanBeWorkhorse**: Whether Snitch can become Workhorse.
