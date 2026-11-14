---
{
  "id": "guide-features",
  "kind": "guide",
  "category": "guide",
  "title": {
    "zh-CN": "命令与快捷键",
    "en": "Commands and Hotkeys"
  },
  "summary": {
    "zh-CN": "查看常用聊天命令、房主功能和键盘快捷键。",
    "en": "Find common chat commands, host tools, and keyboard shortcuts."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Patches/ChatCommandPatch.cs",
  "order": 5
}
---
<!-- zh-CN -->
## 聊天命令

在游戏聊天框中输入命令。输入 `/help` 可查看当前版本的帮助信息；命令、别名和权限可能随角色、模式、设置或客户端版本变化。

| 命令 | 用途 |
| --- | --- |
| `/m` 或 `/myrole` | 查看自己的角色说明；通常在游戏中使用。 |
| `/d` 或 `/death` | 查看自己的死亡信息；只在死亡后有完整信息。 |
| `/l` 或 `/lastresult` | 查看上一局击杀记录、角色和结果。 |
| `/gr` | 查看上一局结果。 |
| `/kh` | 查看上一局击杀记录。 |
| `/rs` | 查看上一局角色摘要。 |
| `/dump` | 导出模组日志，便于提交故障报告。 |
| `/t <名称>` | 发送 `TOHEE-DATA/template.txt` 中对应名称的聊天模板。 |
| `/id` | 查看房间内玩家编号；可能受当前设置或命令规则限制。 |
| `/kcount` | 查看存活击杀阵营数量；房主必须开启对应系统选项。 |

房主还可以在大厅用 `/save <名称>` 保存当前设置，或用 `/load <名称>` 将本机文件夹中的预设载入当前槽位。更详细的文件位置和版本限制见[预设指南](/docs/guide-presets)。这些命令是本地文件操作，不是从旧上游网站下载预设。

`/tags reload` 用于房主重载模组的本地标签文件。TOHEE Cloud 的网页玩家标签使用 Cloud 账号和绑定的游戏账号管理，和此命令不是同一功能；详情见[Cloud 指南](/docs/cloud-overview)。

管理命令（例如开始游戏、踢人或封禁）由房主权限、玩家权限和目标保护共同限制。不要假设每个玩家或每个房间都能使用相同命令。

## 常用键盘快捷键

| 快捷键 | 用途 |
| --- | --- |
| `Ctrl` + `F1` | 导出日志。 |
| `F1` | 标准模式（Standard）中显示自己的角色说明。 |
| `F2` | 标准模式中依次查看附加职业（Add-ons）说明。 |
| `F3` | 标准模式中显示自己的角色设置。 |
| `F4` | 标准模式中依次查看附加职业设置。 |
| `Alt` + `C` | 复制当前房间设置。 |
| `Alt` + `F11` | 循环切换几种窗口分辨率。 |
| `F5` + `T` | 重新载入自定义翻译文件。 |
| `F5` + `X` | 导出自定义翻译和角色颜色文件。 |

某些快捷键只在标准模式或游戏中可用。旧版上游 Features 页面列出了大量开发调试热键；它们不一定存在于当前 TOHEE 发行版，以上清单以当前代码中的常用功能为准。

<!-- en -->
## Chat commands

Enter commands in the in-game chat box. Type `/help` to see the current build's help. Commands, aliases, and permissions can depend on your role, mode, settings, or client version.

| Command | Use |
| --- | --- |
| `/m` or `/myrole` | Read your role description; normally used during a game. |
| `/d` or `/death` | Read your death information; full details are available after you die. |
| `/l` or `/lastresult` | Show the previous round's kill log, roles, and result. |
| `/gr` | Show the previous round's result. |
| `/kh` | Show the previous round's kill log. |
| `/rs` | Show the previous round's role summary. |
| `/dump` | Export the mod log for a bug report. |
| `/t <name>` | Send the chat template with that name from `TOHEE-DATA/template.txt`. |
| `/id` | List player IDs in the room; current settings or command rules may restrict it. |
| `/kcount` | Show the number of living killer factions; the host must enable the related system option. |

In the lobby, the host can use `/save <name>` to save the current settings or `/load <name>` to load a local file into the current slot. See the [preset guide](/docs/guide-presets) for paths and version restrictions. These commands use local files; they do not download presets from an old upstream site.

The host uses `/tags reload` to reload the mod's local tag files. TOHEE Cloud player tags are managed on the website with a Cloud account and linked game account; this is a separate feature. See the [Cloud guide](/docs/cloud-overview).

Management commands such as starting a game, kicking, or banning are controlled by host permissions, player permissions, and target protections. Do not assume every player or room can use the same commands.

## Common keyboard shortcuts

| Shortcut | Use |
| --- | --- |
| `Ctrl` + `F1` | Export the log. |
| `F1` | Show your role description in Standard mode. |
| `F2` | Cycle through your Add-on descriptions in Standard mode. |
| `F3` | Show your role settings in Standard mode. |
| `F4` | Cycle through your Add-on settings in Standard mode. |
| `Alt` + `C` | Copy the current room settings. |
| `Alt` + `F11` | Cycle through several window resolutions. |
| `F5` + `T` | Reload custom translation files. |
| `F5` + `X` | Export custom translations and role colors. |

Some shortcuts work only in Standard or during a game. The old upstream Features page listed many developer and debug hotkeys that may not exist in current TOHEE releases; this list reflects common functions in the current source.
