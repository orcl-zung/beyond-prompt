# PRD、Issues、Triage 与 Handoff

Matt Skills 把持久上下文分成不同职责：PRD 保存完整决定，Issue 保存独立工作，Triage 把外部输入整理成可执行状态，Handoff 只携带尚未落盘的会话信息。

## `to-prd`：综合当前理解

它不重新访谈，而是利用当前会话与代码库信息生成 PRD，并发布到已配置的 Issue Tracker。

PRD 包含：

- 用户视角的问题与解决方案。
- 完整、编号的用户故事。
- 已确定的 Module、Interface、数据与架构决定。
- 预先确认的测试 Seam。
- 非目标与补充说明。

尽量不写易过期的文件路径和工作代码。原型若产生精确表达决策的状态机或 Schema，只保留必要上下文指针。

## `to-issues`：普通功能按纵向切片

```text
不推荐：Schema -> API -> UI -> Tests

推荐：
Issue 1 用户可以创建最小项目
Issue 2 用户可以重命名项目
Issue 3 用户可以归档项目
```

每个 Tracer Bullet 穿过必要层次，能独立演示，并写明 Acceptance Criteria 与 Blocked By。

## Wide Refactor 使用 Expand-Contract

跨整个代码库的重命名或共享类型替换，无法强行切成独立纵向功能。当前官方流程采用：

```text
Expand：新旧形式并存
  -> Migrate：按 Package / Directory 分批迁移
  -> Contract：所有调用者迁完后删除旧形式
```

每批保持 CI Green。若单批无法独立 Green，可以共享集成分支，并用最终 integrate-and-verify Issue 承担绿色承诺。

## `triage`：只处理外部输入

Triage 读取完整 Issue 或外部 PR，先检查代码库与既有拒绝记录，再验证主张，最后决定状态。

```text
needs-triage
  -> needs-info
  -> ready-for-agent
  -> ready-for-human
  -> wontfix
```

准备给 Agent 的工作需要持久 Agent Brief。由 `to-issues` 创建的切片已经是 Agent-ready，不需要再次 Triage。

## `handoff`：跨上下文窗口

Handoff 保存当前会话中尚未进入 PRD、ADR、Issue、Commit 或 Diff 的信息，并引用这些已有产物而不是复制。

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

不要在 Grilling、诊断或 PRD 尚未形成时随意压缩。先完成当前阶段，再决定是继续、压缩还是 Handoff。

## 多会话完整路径

```text
grill-with-docs
  -> to-prd
  -> to-issues
  -> Issue A：新会话 implement -> tdd -> code-review -> commit
  -> Issue B：新会话 implement -> tdd -> code-review -> commit
  -> Issue C：新会话 implement -> tdd -> code-review -> commit
```

至此，官方仓库当前的工程主流程形成闭环：人控制编排，模型复用纪律，每个阶段都留下下一位执行者能够检查的证据。
