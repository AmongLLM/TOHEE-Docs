---
{
  "id": "guide-templates",
  "kind": "guide",
  "category": "guide",
  "title": {
    "zh-CN": "聊天模板",
    "en": "Chat Templates"
  },
  "summary": {
    "zh-CN": "编辑房间欢迎词和自定义聊天消息。",
    "en": "Edit the lobby welcome message and custom chat messages."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Modules/TemplateManager.cs",
  "order": 7
}
---
<!-- zh-CN -->
## 模板文件

TOHEE 在游戏目录的 `TOHEE-DATA/template.txt` 中保存聊天模板。首次运行会根据游戏语言生成默认模板；旧位置的 `template.txt` 可能会被复制到新目录。编辑前先备份文件，使用纯文本编辑器保存为 UTF-8。

每行使用 `名称:消息` 格式，冒号是分隔符。例如：

```text
welcome:欢迎来到房间，{{PlayerName}}！房主是 {{HostName}}。
onMeeting:请讨论并投票。房间代码：{{RoomCode}}
example:第一行\n第二行
```

在聊天框输入 `/t welcome` 或 `/t example`，即可发送匹配名称的消息。`\n` 会换行；消息正文中的额外冒号会保留。名称不区分大小写。相同名称可以出现多次，模组会分别发送匹配的消息。不存在的名称不会发送内容，可用 `/help` 查看当前帮助。

当前默认模板通常包含 `welcome`、`onMeeting` 等触发名称；更新或修改模板时，请以你本机 `template.txt` 的内容为准，不要假定每个版本都有相同默认模板。

## 可替换变量

模板可以包含 `{{...}}` 变量，模组发送时会用当前信息替换，例如：

| 变量 | 含义 |
| --- | --- |
| `{{PlayerName}}` | 接收模板的玩家名称；在大厅广播时可能为空。 |
| `{{HostName}}` | 房主游戏昵称。 |
| `{{RoomCode}}` | 房间代码。 |
| `{{AmongUsVersion}}` | 当前游戏版本。 |
| `{{ModVersion}}` | TOHEE 显示版本。 |
| `{{Map}}` | 当前地图名称。 |
| `{{LobbyTimer}}` | 大厅开始倒计时；不在大厅时为空。 |

普通模式还支持游戏时间、讨论/投票时长、速度、视野和任务数量等模板变量；Hide & Seek 使用的可替换选项较少。变量名称需完全匹配，包括大括号。

## 格式注意事项

聊天消息支持模组采用的 Among Us 富文本标记。改动后保存文件并重新发送模板；如果没有输出或显示异常，检查是否缺少冒号、变量拼写错误或文本中存在格式未闭合。`TOHE-DATA` 是旧版目录名；当前默认目录为 `TOHEE-DATA`。

<!-- en -->
## Template file

TOHEE stores chat templates in `TOHEE-DATA/template.txt` in the game directory. On first run it creates a default file for the game language; an old `template.txt` in the previous location may be copied into the new directory. Back up the file before editing, use a plain-text editor, and save it as UTF-8.

Each line uses `name:message`, with a colon as the separator. For example:

```text
welcome:Welcome to the room, {{PlayerName}}! Your host is {{HostName}}.
onMeeting:Discuss and vote. Room code: {{RoomCode}}
example:First line\nSecond line
```

Enter `/t welcome` or `/t example` in chat to send a matching message. `\n` creates a line break; extra colons in the message body are preserved. Names are case-insensitive. Duplicate names send each matching message separately. An unknown name produces no template content; use `/help` for current command help.

The default file commonly includes names such as `welcome` and `onMeeting`. Use the names in your own `template.txt` when editing or updating it; do not assume every release has the same default templates.

## Replacement variables

Templates can include `{{...}}` variables that TOHEE replaces when it sends the message:

| Variable | Meaning |
| --- | --- |
| `{{PlayerName}}` | Name of the player receiving the template; it may be empty in a lobby broadcast. |
| `{{HostName}}` | Host's in-game name. |
| `{{RoomCode}}` | Room code. |
| `{{AmongUsVersion}}` | Current game version. |
| `{{ModVersion}}` | TOHEE display version. |
| `{{Map}}` | Current map name. |
| `{{LobbyTimer}}` | Lobby start countdown; empty outside the lobby. |

Standard mode also supports variables for game time, discussion and voting time, speed, vision, and task counts. Hide & Seek exposes fewer option variables. Variable names must match exactly, including braces.

## Formatting tips

Chat messages support the Among Us rich-text markup used by the mod. After editing, save the file and send the template again. If it sends nothing or appears incorrectly, check for a missing colon, a misspelled variable, or unclosed formatting. `TOHE-DATA` is the old directory name; the current default directory is `TOHEE-DATA`.
