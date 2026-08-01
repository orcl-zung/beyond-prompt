# Spec、Tickets、Triage 与 Handoff

Matt Skills 把持久上下文分成不同职责：Spec 保存完整决定，Ticket 保存独立工作，Triage 把外部输入整理成可执行状态，Handoff 只携带尚未落盘的会话信息。

## `to-spec`：综合当前理解

它不重新访谈，而是利用当前会话与代码库信息生成 Spec，并发布到已配置的 Issue Tracker。

Spec 包含：

- 用户视角的问题与解决方案。
- 完整、编号的用户故事。
- 已确定的模块、接口、数据与架构决定。
- 预先确认的测试接口。
- 非目标与补充说明。

直接调用：

```text
/to-spec 把刚才确认的团队邀请流程整理成规格，并发布到 GitHub Issues。
```

尽量不写易过期的文件路径和工作代码。原型若产生精确表达决策的状态机或 Schema，只保留必要上下文指针。

## `to-tickets`：普通功能按纵向切片

```text
不推荐：Schema -> API -> UI -> Tests

推荐：
Ticket 1 用户可以创建最小项目
Ticket 2 用户可以重命名项目
Ticket 3 用户可以归档项目
```

每个 Tracer Bullet 穿过必要层次，能独立演示，并写明 Acceptance Criteria 与 Blocked By。

直接调用：

```text
/to-tickets 把 Issue #128 拆成纵向切片，保证每个 Ticket 都能独立验证。
```

## Wide Refactor 使用 Expand–Contract

跨整个代码库的重命名或共享类型替换，无法强行切成独立纵向功能。当前官方流程采用：

```text
Expand：新旧形式并存
  -> Migrate：按 Package / Directory 分批迁移
  -> Contract：所有调用者迁完后删除旧形式
```

每批保持 CI Green。若单批无法独立 Green，可以共享集成分支，并用最终 Integrate-and-Verify Ticket 承担绿色承诺。

## `wayfinder`：先清除超大项目的未知

当工作大到一个会话装不下，而且现在还无法写成 Spec，使用 `wayfinder`。它不会直接实现，而是在 Tracker 上创建一个 Map Issue 和一组决策 Tickets。

```text
/wayfinder 我们要把单体账单系统迁移为多租户平台，
但身份、隔离和迁移路径仍然充满未知。
```

每个 Ticket 只解决一个能明确说出的决策问题。HITL Ticket 通过人与 Agent 的访谈解决；AFK Ticket 可由 `research` 子 Agent 调查。未知被逐步清除后，再进入 `to-spec`。

## `triage`：只处理外部输入

Triage 读取完整 Issue 或外部 PR，先检查代码库与既有拒绝记录，再验证主张，最后决定状态。

```text
needs-triage
  -> needs-info
  -> ready-for-agent
  -> ready-for-human
  -> wontfix
```

准备给 Agent 的工作需要持久 Agent Brief。由 `to-tickets` 创建的切片已经是 Agent-ready，不需要再次 Triage。

## `handoff`：跨上下文窗口

Handoff 保存当前会话中尚未进入 Spec、ADR、Ticket、Commit 或 Diff 的信息，并引用这些已有产物而不是复制。

它应包含：

- 当前目标与已完成状态。
- 未解决决定和风险。
- 下一会话的明确动作。
- 建议调用的 Skills。
- 相关产物路径或 URL。

敏感信息必须删除。Handoff 文件写入操作系统临时目录，然后在新会话中显式引用。

## Handoff 与 Compact

| 操作 | 结果 |
| --- | --- |
| `handoff` | 开启新会话，保留明确交接，可用于原型支线或换执行者 |
| `compact` | 留在同一会话，用摘要替换早期历史 |

不要在 Grilling、诊断或 Spec 尚未形成时随意压缩。先完成当前阶段，再决定是继续、压缩还是 Handoff。

## 多会话完整路径

```text
grill-with-docs
  -> to-spec
  -> to-tickets
  -> Ticket A：新会话 implement -> tdd -> code-review -> commit
  -> Ticket B：新会话 implement -> tdd -> code-review -> commit
  -> Ticket C：新会话 implement -> tdd -> code-review -> commit
```

更多直接调用示例见 [Matt Skills 逐项使用手册](./skill-reference.md)。
