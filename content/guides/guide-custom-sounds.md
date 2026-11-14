---
{"id":"guide-custom-sounds","kind":"guide","category":"guide","title":{"zh-CN":"自定义音效管理界面","en":"Custom Sound Manager GUI"},"summary":{"zh-CN":"在模组客户端中开关内置音效、调整总音量与单独音量，并试听效果。","en":"Enable built-in effects, adjust master and individual volumes, and preview sounds in the mod client."},"source":"https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Modules/CustomSoundMenu.cs","order":13}
---
<!-- zh-CN -->
## 打开界面

在模组的客户端选项中找到“**自定义音效设置…**”。主菜单右下角也有扬声器图标；该入口在“开启模组技能音效”关闭时不可点击。主菜单中打开其他设置窗口后，扬声器入口会暂时隐藏。

管理界面列出模组内置的 19 个音效，例如 Teleport、Shield、Bite 和 Gunfire。拖动列表或使用“向上”“向下”按钮查看其他音效。点击右上角 `X` 或按 `Esc` 关闭界面。

## 开关与音量

| 控件 | 用法 |
| --- | --- |
| 开启模组技能音效 | 客户端总开关。关闭时停止正在播放的模组音效与试听。 |
| 总音量 | 调整所有自定义音效的整体音量。 |
| 每行“开启 / 关闭” | 控制该音效在正常游戏事件触发时是否播放。 |
| 每行音量 | 单独调整该音效的音量。 |
| 数字输入框 | 输入整数百分比，按回车或移开焦点提交。界面接受 0–500；无效输入会恢复原值。 |

拖动滑块或提交一个不同的音量数值时，会保存设置并触发试听。调整某个音效时，该音效成为当前试听对象；调整总音量则试听当前选中的音效。右上角“试听：…”显示当前对象，首次默认是 Teleport。

试听可以播放在列表中关闭的单个音效，以便调整其音量；客户端总开关仍然生效。关闭面板会停止试听，已保存的开关和音量会保留。

## 总音量与单项音量如何叠加

播放音量按“总音量百分比 × 单项音量百分比”计算。例如总音量 50%、Teleport 80%，该音效得到默认音量的 40%。任意一项为 0 时，该音效静音。输入大于 100 的百分比可以提高增益，调整时可先使用较小数值试听。

这些是当前客户端自己的播放偏好，不会把音量设置同步给房间中的其他玩家。普通原版客户端不具备 TOHEE 的自定义音效播放模块。

## 保存位置与排查

设置保存在游戏工作目录下的 `TOHEE-DATA/CustomSoundsVolumeConfig.json`，默认总音量和单项音量均为 100，各音效默认开启。界面操作会自动保存，不需要额外点击保存按钮。

没有声音时，先检查客户端总开关、总音量和对应音效音量。仅关闭某一行影响正常事件播放，不阻止该音效的本地试听。声音资源缺失或配置文件无法读写时，可以查看模组日志；重装时记得保留 `TOHEE-DATA` 中需要的个人设置。

<!-- en -->
## Open the interface

Find **Custom sound settings…** in the mod's client options. A speaker icon also appears at the bottom right of the main menu. That entry is disabled when Enable custom sound effects is off and temporarily hidden while another settings window is open on the main menu.

The manager lists 19 effects bundled with the mod, including Teleport, Shield, Bite and Gunfire. Scroll the list or use Up and Down to find more effects. Close it with the top-right `X` or `Esc`.

## Switches and volume controls

| Control | Use |
| --- | --- |
| Enable custom sound effects | Client-wide switch. Turning it off stops mod sound playback and previews. |
| Master volume | Adjust the overall volume of all custom effects. |
| Per-effect On / Off | Control whether that effect plays during normal gameplay events. |
| Per-effect volume | Adjust that effect separately. |
| Numeric input | Enter an integer percentage and press Enter or move focus away. The interface accepts 0–500 and restores the previous value for invalid input. |

Moving a slider or committing a different volume saves the setting and triggers a preview. Adjusting an effect selects it as the preview target; changing master volume previews the current selection. The top-right Preview label shows the selected effect, initially Teleport.

A preview can play an individually disabled effect so that you can adjust it. The client-wide switch still applies. Closing the panel stops the preview while retaining saved settings.

## How the volumes combine

Playback gain is master percentage multiplied by effect percentage. For example, 50% master and 80% Teleport produces 40% of default gain. Either value at zero mutes that effect. A value above 100 can increase gain; start with a small value when previewing changes.

These are playback preferences for your client and are not synchronised to other players. An unmodded client does not contain TOHEE's custom sound playback module.

## Saving and troubleshooting

Settings are stored in `TOHEE-DATA/CustomSoundsVolumeConfig.json` under the game's working directory. Master and per-effect volumes default to 100, with all effects enabled. Interface changes save automatically; there is no separate save step.

If nothing plays, check the client-wide switch, master volume and the selected effect's volume. Disabling one row suppresses normal event playback but still permits a local preview. Check mod logs for missing sound resources or configuration read/write failures. Preserve personal settings under `TOHEE-DATA` when reinstalling.
