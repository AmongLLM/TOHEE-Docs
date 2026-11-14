---
{"id":"cloud-accounts","kind":"guide","category":"cloud","title":{"zh-CN":"绑定与管理游戏账号","en":"Link and manage game accounts"},"summary":{"zh-CN":"从模组或好友请求验证所有权，并了解解绑后的限制。","en":"Verify ownership through the mod or a friend request, and understand unlinking restrictions."},"source":"TOHEE Cloud product guidance; maintainer-authored and reviewed 2026-11-13","order":2}
---
<!-- zh-CN -->
## 绑定前准备

先登录 Cloud 并按提示设置或更改 Cloud 密码。Among Us 账号需要有效好友代码，以及 Steam、Epic 等受支持的正式账号来源。仅使用 Device ID 的游客账号暂不支持。不同正式账号来源的支持情况以验证页面结果为准。

## 方法一：从 TOHEE 模组绑定

1. 在 Among Us 中完成账号登录，然后打开 TOHEE 的 Cloud 菜单。
2. 选择绑定账号，或使用 `/cloud bind`，通过模组打开浏览器中的绑定页面。
3. 在浏览器登录自己的 Cloud 账号，完成页面上的安全验证。
4. 等待显示绑定成功，再进入“游戏账号”核对好友代码。

网页提示没有待处理链接时，请回到模组重新发起。链接无效或已过期时也需要重新发起；不要手工拼接链接。不要把带有绑定信息的链接转发给其他人。

## 方法二：好友请求验证

1. 打开 [好友请求验证](/bind/auverify)，填写**你自己的** Among Us 好友代码。
2. 完成安全验证，点击创建好友请求验证。
3. 页面会给出一个**验证账号**的好友代码。在 Among Us 中，用待绑定账号向它发送好友请求。
4. 保持页面打开，等待自动查询。必要时点击“立即查询状态”。
5. 显示“游戏账号已绑定”后，到“游戏账号”确认结果。

注意区分输入的自己的好友代码与页面返回的验证账号好友代码。“正在检查资格”“正在完成绑定”是中间状态；只有完成状态才表示已经绑定。过期、取消或未通过后，可以检查原因并开始新的验证。

## 管理与解绑

在 [游戏账号](/accounts) 中，每张卡片对应一个游戏账号，可以编辑标签、开关该账号的房间分享，以及解除绑定。

解绑需要当前 Cloud 密码和安全验证。解绑会删除该游戏账号的标签和配置，并撤下分享房间；标签修改日志会保留，Cloud 的邮箱和 Discord 登录方式不受影响。

解绑后前 1 小时不能重新绑定；1 小时后执行解绑的原 Cloud 用户可以重新绑定；24 小时后其他 Cloud 用户才可以尝试绑定。请确认解绑的账号和后果后再操作。

<!-- en -->
## Before you link

Sign in to Cloud and set or change your Cloud password when prompted. The Among Us account needs a valid friend code and a supported full-account provider, such as Steam or Epic. Device ID-only guest accounts are currently unsupported. The verification result determines whether a particular provider is supported.

## Option 1: Link from the TOHEE mod

1. Finish signing in to Among Us, then open the TOHEE Cloud menu.
2. Choose account linking, or use `/cloud bind`, to open the binding page in your browser.
3. Sign in to your own Cloud account and complete the security check.
4. Wait for successful linking, then check the friend code under Game accounts.

If the website says no link is pending, start again from the mod. Invalid or expired links also require a new flow; do not construct links manually. Do not forward a link containing binding information to another person.

## Option 2: Friend request verification

1. Open [Friend request verification](/bind/auverify) and enter **your own** Among Us friend code.
2. Complete the security check and start verification.
3. The page supplies a **verification account's** friend code. In Among Us, send that account a friend request using the account you want to link.
4. Keep the page open for automatic checks. Use Check status now when necessary.
5. Once the page confirms that the game account is linked, review it under Game accounts.

Do not confuse your own friend code with the verification account's code. Checking eligibility and Linking account are intermediate states; only Completed confirms linking. After expiry, cancellation or rejection, review the reason and start a new verification if appropriate.

## Manage and unlink

Each card under [Game accounts](/accounts) represents one game account. You can edit its tag, toggle sharing for that account or unlink it.

Unlinking requires your current Cloud password and a security check. It deletes that game account's tag and configuration and removes its shared room. Tag edit logs are retained. Your Cloud email and Discord sign-in methods remain linked.

The account cannot be linked for the first hour after unlinking. After one hour, the Cloud user who unlinked it can relink it. Other Cloud users can attempt linking after 24 hours. Check the account and consequences before confirming.
