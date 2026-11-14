---
{
  "id": "settings-system",
  "kind": "guide",
  "category": "settings",
  "title": {
    "zh-CN": "系统设置",
    "en": "System Settings"
  },
  "summary": {
    "zh-CN": "了解房间保护、加入限制、信息显示和模组全局行为。",
    "en": "Review room protections, join restrictions, information display, and global mod behavior."
  },
  "source": "https://github.com/AmongLLM/TownofHost-Enhanced-Enhanced/blob/1dcecb4481a07eeeb61df99415318ed5355339c7/Modules/OptionHolder.cs",
  "order": 102
}
---
<!-- zh-CN -->
## 用途

**系统设置（System Settings）** 控制房间级或模组级行为，不是 Among Us 的基础速度、任务或地图设置。当前版本的项目会随发行版变化；修改前请阅读选项说明，尤其是会限制加入、改变胜利或降低保护的设置。

此分组通常涵盖以下方面：

- **房间进入规则：** 等级或名单限制、玩家平台限制等。启用前确认允许名单和房间规则不会误踢朋友。
- **游戏保护与性能：** 防黑屏保护（Anti-Blackout）、低负载选项和调试行为。测试专用选项可能使正式对局更容易异常。
- **结果与信息显示：** 是否显示击杀记录、上一局角色、阵营人数或投票/逐出信息。
- **命令与显示偏好：** 是否允许部分命令、名称显示方式、主机标签和控制台行为。
- **随机分配行为：** 角色随机分配算法等会影响如何从可用角色中选人，但不会改变单个角色技能。

菜单可能包含特定管理或调试选项。不要因为旧上游页面标注了推荐状态，就关闭当前版本的保护。遇到异常黑屏或分配问题时，优先保持保护启用并收集日志。

## 可选的测试设置

当前代码包含“禁止正常结束游戏”（`No Game End`）、控制台显示、防黑屏缓冲模式（Anti-Blackout buffer）和角色分配算法一类全局选项。`No Game End` 会改变正常胜利流程；关闭保护或改变调试行为可能导致对局状态异常。仅在你清楚结果时修改，并在普通房间中恢复合适的值。

玩家标签权限、名单和 Cloud 玩家标签是不同功能。Cloud 网页标签不会自动授予系统设置中的模组权限；查看[玩家标签](/docs/guide-tags)。

<!-- en -->
## Purpose

**System Settings** control room-wide or mod-wide behavior rather than base Among Us speed, task, or map settings. The exact set changes between releases. Read each option's description before changing it, especially settings that restrict joining, alter victory, or reduce protection.

This group commonly covers:

- **Room access:** Level or list restrictions and platform restrictions. Before enabling them, check that the allow-list and room rules will not remove friends by mistake.
- **Game protection and performance:** Anti-Blackout protection, low-load options, and debug behavior. A testing-only option can make ordinary matches less reliable.
- **Results and information:** Whether to display kill logs, previous roles, faction counts, or voting/ejection information.
- **Commands and display preferences:** Access to some commands, name display, host labels, and console behavior.
- **Random assignment:** Role-assignment algorithms affect how available roles are selected, not the abilities of an individual role.

Some releases may include management or debug options. Do not disable current protections just because an old upstream page marked a setting as recommended. If you encounter a black screen or assignment problem, keep protections enabled and collect a log first.

## Testing options

Current source includes global options such as `No Game End`, console display, Anti-Blackout buffer mode, and role-assignment algorithm. `No Game End` changes normal victory flow; disabling protections or changing debug behavior can leave a round in an unexpected state. Change these only when you understand the effect, and restore suitable values for normal rooms.

Player-tag permissions, local lists, and Cloud player tags are separate features. A Cloud web tag does not automatically grant mod permissions in System Settings; see [player tags](/docs/guide-tags).
