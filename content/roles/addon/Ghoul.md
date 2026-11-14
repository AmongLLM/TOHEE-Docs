---
{
  "id": "role-ghoul",
  "kind": "role",
  "category": "addon",
  "title": {
    "en": "Ghoul",
    "zh-CN": "食尸鬼"
  },
  "summary": {
    "zh-CN": "完成全部任务时，存活的食尸鬼会自杀；死去的食尸鬼完成全部任务时，会击杀所有仍存活且曾击杀食尸鬼的玩家。",
    "en": "After all tasks are complete, a living Ghoul dies by suicide; a dead Ghoul kills every living player marked as having killed a Ghoul."
  },
  "source": "https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Roles/AddOns/Crewmate/Ghoul.cs"
}
---
<!-- zh-CN -->

## 效果

食尸鬼只分配给船员，不分配给没有任务或以任务为基础的角色。完成全部任务时，若食尸鬼仍存活则会自杀；若死去的食尸鬼完成全部任务，会击杀所有仍存活且被标记为食尸鬼击杀者的玩家。

## 设置

- **Max（最大数量）**：本局中该附加身份可出现的数量上限。
- **Spawn Chance（生成概率）**：玩家获得此附加身份的概率。

<!-- en -->

## Effect

Ghoul is assigned only to Crewmates, not to Crewmates without tasks or task-based roles. After all tasks are complete, a living Ghoul dies by suicide. If a dead Ghoul completes all tasks, it kills every living player marked as having killed a Ghoul.

## Settings

- **Max**: Maximum number that can appear in one match.
- **Spawn Chance**: Chance for a player to receive this add-on.
