---
{"id":"cloud-help","kind":"guide","category":"cloud","title":{"zh-CN":"Cloud 常见问题","en":"Cloud troubleshooting"},"summary":{"zh-CN":"排查登录、绑定、标签显示和房间分享问题。","en":"Resolve sign-in, linking, tag display and room-sharing problems."},"source":"TOHEE Cloud product guidance; maintainer-authored and reviewed 2026-11-13","order":6}
---
<!-- zh-CN -->
## 无法登录或忘记密码

邮箱登录请确认邮箱和 Cloud 密码；忘记密码可以使用 [重置密码](/password/reset)。Discord 登录失败时返回登录页重试，确认浏览器允许所需跳转。若系统要求首次设置密码或更改临时密码，先在“账号设置”完成。

安全验证尚未完成时，提交按钮会保持不可用。等待组件加载并完成验证；验证码发送后检查垃圾邮件和页面的有效期。上游邮件或验证服务不可用时，需要等待服务恢复。

## 绑定未通过，或服务暂时不可用

账号未通过可能因为缺少有效好友代码、仅使用游客 Device ID、账号来源不受支持、账号已绑定或处于解绑冷却。检查页面显示的具体原因。

“验证服务暂时不可用”表示这次未能完成验证，不等于账号已被判定无效。好友请求流程过期后，应创建新流程，并向新页面指定的验证账号发送请求。

从模组绑定或分享提示游戏登录失效时，回到 Among Us 完成登录后重试。Cloud 网站已登录不代表游戏的在线登录仍有效。

## 标签保存成功却没有显示

核对编辑的好友代码是否正确；在房主的 TOHEE Cloud 菜单启用云端标签并刷新。本地标签的编辑与刷新步骤见[本地标签与权限](/docs/guide-local-tags)。游戏显示受到房主设置、缓存和当前场景影响，网页预览不是实时游戏画面。

若不能编辑，查看下次可修改时间、本人编辑是否关闭，以及账号是否被冻结或封禁。

## 分享开启了，房间仍不在列表

依次检查：

1. 网站开关属于当前房主正在使用的游戏账号。
2. 模组本地分享开关已开启，并且当前房间未手动停止分享。
3. 你是当前在线房间的房主，已完成游戏账号登录。
4. 私人房间已明确确认分享。
5. Cloud 菜单未提示账号资格、模组版本或服务器信息方面的问题。

然后在房间列表清除地区和状态筛选，等待刷新。只启用云标签不会自动分享房间。

## 联系支持时提供什么

记录错误提示、发生时间、使用的游戏与模组版本，以及发生问题的步骤。可以提供好友代码帮助定位游戏身份，但不要公开密码、邮箱验证码、会话信息或完整绑定链接。

账号封禁、管理限制等需要联系管理员处理。阅读 [信息收集协议](/policy) 了解数据用途，或到 [联系与项目](/contact) 查找联系方式。

<!-- en -->
## Sign-in or password problems

For email sign-in, check your email address and Cloud password. Use [Reset password](/password/reset) if you forgot it. If Discord sign-in fails, return to sign-in and retry, allowing required browser redirects. Complete any first-time password setup or temporary password change in Account settings.

Submit buttons remain unavailable until security verification is complete. Let the component load and complete the check. After requesting an email code, check spam and the displayed expiry time. An unavailable email or verification provider requires waiting for service recovery.

## Rejected verification or an unavailable service

Rejection can result from a missing valid friend code, Device ID-only guest access, an unsupported account provider, an existing link or an unlinking cooldown. Follow the specific reason shown on the page.

Verification unavailable means the service could not complete this attempt; it does not establish that your account is invalid. After a friend request challenge expires, create a new flow and send a request to the verification account named by the new page.

If linking from the mod or sharing reports an expired game login, finish signing in to Among Us and retry. Being signed in on the Cloud website does not mean your game's online login is still valid.

## A saved tag does not appear

Check that you edited the right friend code. Enable and refresh cloud tags in the host's TOHEE Cloud menu. For local tag editing and reloading, see [Local tags and permissions](/docs/guide-local-tags). Display depends on host settings, cached data and the current scene; the website preview is not a live game view.

If editing is unavailable, check the next edit time, whether owner editing is disabled and whether the account is frozen or banned.

## Sharing is enabled but the room is missing

Check these in order:

1. The website switch belongs to the game account the host is currently using.
2. Local mod sharing is enabled and sharing for this room was not manually stopped.
3. You are the host of the current online room and have completed game sign-in.
4. You explicitly confirmed sharing for a private room.
5. The Cloud menu reports no account eligibility, mod version or server-information problem.

Then clear region and status filters in the room list and allow a refresh. Enabling cloud tags alone does not share a room.

## Information for support

Record the error message, time, game and mod versions, and steps that produced the issue. You can supply a friend code to identify a game account, but do not publish passwords, email codes, session information or complete binding links.

Bans and administrative restrictions require administrator assistance. Read the [information collection policy](/policy) for data usage, or see [Contact and projects](/contact) for contact information.
