---
{
  "id": "role-lazy",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Lazy",
    "zh-CN": "懒人"
  },
  "summary": {
    "zh-CN": "只分配给船员；不会获得任务，术士和傀儡师无法对其使用控制能力。",
    "en": "Assigned only to Crewmates; receives no tasks and cannot be targeted by Warlock or Puppeteer control abilities."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Crewmate/Lazy.cs"
}
---
<!-- zh-CN -->

## 效果

懒人只分配给船员，并且不会被分配任务。术士和傀儡师不能对懒人使用各自的控制能力。是否允许无任务的 taskless 船员或任务型船员获得该附加身份分别由设置控制。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。
- **TasklessCrewCanBeLazy（无任务型船员可获得）**：控制无任务型船员角色能否获得懒人。
- **TaskBasedCrewCanBeLazy（任务型船员可获得）**：控制任务型船员角色能否获得懒人。

<!-- en -->

## Effect

Lazy is assigned only to Crewmates and receives no tasks. Warlock and Puppeteer cannot use their control abilities on Lazy. Separate settings control whether taskless Crewmate roles and task-based Crewmate roles can receive it.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
- **TasklessCrewCanBeLazy**: Whether taskless Crewmate roles can receive Lazy.
- **TaskBasedCrewCanBeLazy**: Whether task-based Crewmate roles can receive Lazy.
