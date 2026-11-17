---
{
  "id": "guide-local-tags",
  "kind": "guide",
  "category": "guide",
  "title": {
    "zh-CN": "本地标签与权限",
    "en": "Local tags and permissions"
  },
  "summary": {
    "zh-CN": "为玩家制作本地标签，设置命令权限和 GM 身份。",
    "en": "Create local player tags and set command access and GM status."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/4e8abab82a3a43761992fab30e4425067d090042/Modules/PlayerTagFiles.cs",
  "order": 9.1
}
---
<!-- zh-CN -->
房主可以用本地 Tags 文件，为房间里的玩家设置标签、命令权限和 GM 身份。每位玩家对应一个以完整好友代码命名的 `.txt` 文件，保存在游戏目录的 `TOHEE-DATA/Tags/` 中。

## 用生成器制作标签

1. 打开 [MAUL 标签生成器](https://moddedamong.us/tags.html)，选择 `TONE/TOHE:E`。
2. 填入玩家的完整好友代码，编辑标签文字、颜色和样式，再设置权限等级与各项开关。
3. 点击 `Download .txt` 下载完整配置，将文件放入 `TOHEE-DATA/Tags/`。例如，好友代码为 `sampleuser#1234`，文件名就是 `sampleuser#1234.txt`。
4. 在大厅中由房主输入 `/tags reload`，刷新标签和权限。

使用 `Download .txt` 可以一次保存标签和权限；`Copy generated tag` 复制的是标签样式文字，适合粘贴到 `TagName` 字段。

## 手动创建和编辑

首次启动模组后，`TOHEE-DATA/Tags/` 中会生成模板。复制 `Tag_Template.txt`，将副本改名为玩家的完整好友代码加 `.txt`，用纯文本编辑器以 UTF-8 保存。也可以直接新建文件，填入以下内容：

```text
TagName: 房间伙伴
TagColor: 33CCFF
PermissionLevel: 0
SayCommandAccess: false
EndCommandAccess: false
ExecuteCommandAccess: false
AssignGameMaster: false
```

- `TagName`：显示在玩家名字前的标签文字。用 `\n` 换行；需要与昵称空一格时，在文字末尾加一个空格。
- `TagColor`：标签颜色，填写不带 `#` 的六位十六进制颜色，例如 `33CCFF`。
- `PermissionLevel`：玩家的命令权限等级，见下表。
- 其余四项填写 `true` 开启、`false` 关闭。

生成器输出的 `y` / `n` 也分别表示开启 / 关闭。

`VIP_Template.txt` 的初始权限为 1 级，`Moderator_Template.txt` 为 5 级，也可以复制后按需修改。

文件可以直接放在 `Tags` 中，也可以放在一层子文件夹中，例如 `Tags/friends/sampleuser#1234.txt`。文件夹名用于分类，权限由文件内容决定。

## 配置命令权限

`PermissionLevel` 填写 `0` 至 `5`。高等级包含低等级的命令权限。

| 等级 | 额外开放的命令 |
| --- | --- |
| 0 | 保持普通玩家权限。 |
| 1 | `/rn` 修改自己的名字；`/color` 修改自己的颜色，均在大厅使用。 |
| 2 | `/warn` 警告玩家；`/mid` 查看玩家列表；`/me <ID>` 查看其他玩家信息；`/fix <ID>` 为其他玩家请求修复。 |
| 3 | `/start` 开始游戏。 |
| 4 | `/kick <ID>` 踢出玩家。 |
| 5 | `/ban <ID> <原因>` 封禁玩家。 |

例如，将 `PermissionLevel: 0` 改为 `PermissionLevel: 4`，该玩家就能使用 1 至 4 级的命令。

以下开关单独设置，与权限等级分开生效：

| 字段 | 设为 `true` 的效果 |
| --- | --- |
| `SayCommandAccess` | 使用 `/say` 发送公告。 |
| `EndCommandAccess` | 使用 `/end` 结束游戏。 |
| `ExecuteCommandAccess` | 使用 `/exe` 处决玩家。 |
| `AssignGameMaster` | 开局时分配 GM 身份。管理命令由权限等级和上面的开关设置。 |

只配置权限时，将 `TagName` 留空即可。

## 颜色与样式

要显示渐变、字号或字体等富文本样式，在系统设置中开启“启用渐变标记”。生成器会把渐变样式写入 `TagName` 并将 `TagColor` 留空；保留这种写法即可。

手动设置双色渐变时，可填写 `TagColor: 33CCFF FF99CC`。纯色标签直接填写一种颜色。

## 保存后生效

修改文件并保存后，房主在大厅输入 `/tags reload`，即可重新读取标签和权限并刷新玩家名字；GM 身份在下次开局时分配。“自动重载标签”默认开启，每 5 秒检查文件变化；也可以在 Client Options 中切换此选项。

删除某位玩家的 `.txt` 文件并重载，即可移除该文件提供的标签、权限和 GM 配置。

聊天命令 `/addtag` 使用的 `TOHEE-DATA/tags.txt` 用来保存外观标签。需要设置权限或 GM 身份时，编辑上面的单玩家 TXT 文件；两处都设置了标签时，单玩家文件中的标签优先显示。

<!-- en -->
Hosts can use local Tags files to set player tags, command access and GM status in their rooms. Each player has one `.txt` file named after their full friend code, stored under `TOHEE-DATA/Tags/` in the game directory.

## Create a tag with the generator

1. Open the [MAUL tag generator](https://moddedamong.us/tags.html) and select `TONE/TOHE:E`.
2. Enter the player's full friend code, edit the tag text, colour and style, then choose a permission level and individual switches.
3. Select `Download .txt` to download the complete configuration and place it in `TOHEE-DATA/Tags/`. For the friend code `sampleuser#1234`, the filename is `sampleuser#1234.txt`.
4. As the host, enter `/tags reload` in the lobby to refresh tags and permissions.

`Download .txt` saves both the tag and permissions. `Copy generated tag` copies the styled tag text for pasting into `TagName`.

## Create and edit a file manually

The mod creates templates in `TOHEE-DATA/Tags/` on first launch. Copy `Tag_Template.txt`, rename the copy to the player's full friend code plus `.txt`, and save it as UTF-8 in a plain-text editor. You can also create a file with these contents:

```text
TagName: Lobby friend
TagColor: 33CCFF
PermissionLevel: 0
SayCommandAccess: false
EndCommandAccess: false
ExecuteCommandAccess: false
AssignGameMaster: false
```

- `TagName`: The text shown before the player's name. Use `\n` for a line break, or add a trailing space to separate the tag from the name.
- `TagColor`: A six-digit hexadecimal colour without `#`, such as `33CCFF`.
- `PermissionLevel`: The player's command permission level, listed below.
- Set each of the other four fields to `true` to enable it or `false` to disable it.

The generator's `y` / `n` values also mean enabled / disabled.

`VIP_Template.txt` starts at level 1 and `Moderator_Template.txt` at level 5. You can copy either and adjust its fields.

Place files directly in `Tags` or in an immediate subfolder, such as `Tags/friends/sampleuser#1234.txt`. Folder names organise files; the fields inside each file determine permissions.

## Set command permissions

Set `PermissionLevel` to a number from `0` to `5`. Higher levels include the commands from lower levels.

| Level | Additional commands |
| --- | --- |
| 0 | Keeps ordinary player access. |
| 1 | `/rn` to rename yourself and `/color` to change your colour, both in the lobby. |
| 2 | `/warn` to warn players; `/mid` to list players; `/me <ID>` to view another player's information; `/fix <ID>` to request a fix for another player. |
| 3 | `/start` to start the game. |
| 4 | `/kick <ID>` to kick a player. |
| 5 | `/ban <ID> <reason>` to ban a player. |

For example, changing `PermissionLevel: 0` to `PermissionLevel: 4` gives the player the commands from levels 1 through 4.

These switches work independently of the permission level:

| Field | Effect when set to `true` |
| --- | --- |
| `SayCommandAccess` | Use `/say` to send announcements. |
| `EndCommandAccess` | Use `/end` to end the game. |
| `ExecuteCommandAccess` | Use `/exe` to execute a player. |
| `AssignGameMaster` | Assign GM status when a round starts. Command access is set through the permission level and switches above. |

Leave `TagName` empty to configure permissions alone.

## Colours and styling

Enable **Enable Gradient Tags** in System Settings to display rich-text effects such as gradients, sizes and fonts. The generator puts gradient markup in `TagName` and leaves `TagColor` empty; keep those values as generated.

To set a two-colour gradient manually, use a value such as `TagColor: 33CCFF FF99CC`. For a solid tag, enter one colour.

## Apply your changes

Save the file, then enter `/tags reload` as the host in the lobby to reload tags and permissions and refresh player names. GM status is assigned when the next round starts. **Auto Reload Tags** is on by default and checks for file changes every 5 seconds. You can toggle it in Client Options.

To remove the tag, permissions and GM configuration provided by a player's file, delete that `.txt` file and reload.

The `/addtag` chat command stores cosmetic tags in `TOHEE-DATA/tags.txt`. To set permissions or GM status, edit the per-player TXT file described above. When both sources contain a tag, the per-player file takes priority.
