---
{
  "id": "guide-setup",
  "kind": "guide",
  "category": "guide",
  "title": {
    "zh-CN": "设置房间",
    "en": "Set Up a Room"
  },
  "summary": {
    "zh-CN": "从基础游戏规则开始，再逐步配置模式、角色和其他模组设置。",
    "en": "Start with the base game rules, then configure the mode, roles, and other mod options."
  },
  "source": "https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Modules/OptionHolder.cs",
  "order": 4
}
---
<!-- zh-CN -->
## 创建房间

确认游戏主菜单已显示 TOHEE 版本信息，再创建或加入房间。房主的模组控制自定义角色、规则与模式；其他玩家可以使用未修改客户端加入。开局前告诉玩家房间使用的模式，以及角色介绍和聊天命令如何查看。

## 推荐的首次设置流程

1. 在**游戏设置（Game Settings）**中设置地图、玩家数、会议时间、移动速度、视野、击杀距离和任务数量等基础规则。这些设置会影响所有模式。
2. 在**模组设置（Mod Settings）**中选择模式。首次体验建议选标准模式（Standard）；切换模式后，可见设置项会随模式变化。
3. 在**系统设置（System Settings）**中检查开房、玩家加入、信息显示和反作弊保护相关设置。初次开房建议保留默认值，逐项调整并观察效果。
4. 使用标准模式时，再调整船员（Crewmate）、内鬼（Impostor）、中立（Neutral）角色和附加职业（Add-ons）。先少量启用熟悉的角色，确认每个角色的最大数量和出现几率，避免随机分配超出预期。
5. 先开一局短测试，确认玩家人数、角色数量、击杀冷却和胜利条件都合适，再保存到[预设槽](/docs/guide-presets)。

菜单分组说明见[游戏设置](/docs/settings-game)、[系统设置](/docs/settings-system)、[模组设置](/docs/settings-mod)和[设置索引](/docs/settings-index)。旧版上游教程中的选项名称可能与当前客户端不同；具体名称和可用范围以游戏内当前菜单为准。

## Cloud 可选功能

TOHEE Cloud 的账号、绑定游戏账号、玩家标签和房间浏览是独立于本地房间设置的网页功能。使用 Cloud 需要按页面流程登录并绑定账号；开始普通房间游戏不要求 Cloud 账号。详情见[TOHEE Cloud 指南](/docs/cloud-overview)。

<!-- en -->
## Create a room

Confirm that the TOHEE version appears on the main menu, then create or join a room. The host's mod controls custom roles, rules, and modes; other players can join with unmodified clients. Before starting, tell players which mode the room uses and how to check role descriptions and chat commands.

## A good first setup

1. In **Game Settings**, set the basic rules such as map, player count, meeting timers, movement speed, vision, kill distance, and task counts. These settings affect every mode.
2. Choose a mode in **Mod Settings**. Standard is a good place to start; the available settings change when you switch modes.
3. Review **System Settings** for room access, player joining, information display, and anti-blackout protection. Keep the defaults for a first room, then change one setting at a time and observe the result.
4. In Standard, configure Crewmate, Impostor, and Neutral roles plus Add-ons. Start with a small set of familiar roles, and check each role's maximum count and spawn chance so random assignment stays predictable.
5. Play a short test round to check player count, role count, kill cooldown, and win conditions. Save a suitable setup to a [preset slot](/docs/guide-presets).

See [game settings](/docs/settings-game), [system settings](/docs/settings-system), [mod settings](/docs/settings-mod), and the [settings index](/docs/settings-index) for the menu groups. Option names in older upstream guides may differ from the current client; use the labels and choices shown in your in-game menu.

## Optional Cloud features

TOHEE Cloud accounts, linked game accounts, player tags, and room browsing are web features separate from local room settings. Follow the Cloud pages to sign in and link an account; a Cloud account is not required to host a regular game. See the [TOHEE Cloud guide](/docs/cloud-overview).
