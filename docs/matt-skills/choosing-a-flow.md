# 选择正确的工作流

`ask-matt` 是官方 Skills 的路由器。它不要求记住每个 Skill，而是根据当前情境选择一条 Flow。

## 主流程：Idea to Ship

```text
grill-with-docs
  -> 需要可运行答案？handoff -> prototype -> handoff 回来
  -> 单会话任务？implement
  -> 多会话任务？to-spec -> to-tickets -> 每个 Ticket 新会话 implement
```

### 为什么从 Grilling 开始

有代码库时，`grill-with-docs` 不只澄清需求，还会通过 `domain-modeling` 持续更新 `CONTEXT.md` 和必要 ADR。没有代码库时使用无状态的 `grill-me`。

### 单会话还是多会话

若范围清晰、能在当前上下文可靠完成，直接 `/implement`。若需要多个独立执行会话，先 `/to-spec` 固化决定，再 `/to-tickets` 拆成独立切片。

每个 Ticket 使用新会话，只携带 Spec 与当前 Ticket，减少其他切片污染。

### Implement 的内部闭环

```text
Ticket / Spec
  -> tdd：逐个 Red-Green 切片
  -> 定期类型检查与单测
  -> 最后完整测试
  -> code-review：Standards + Spec
  -> commit
```

## 两条 On-ramp

### 外部请求堆积

```text
triage -> ready-for-agent -> implement
```

`triage` 只处理外部进入的原始 Issue 或 PR。由 `to-tickets` 创建的切片已经准备就绪，不应重复 Triage。

### 困难 Bug

```text
diagnosing-bugs -> regression test -> fix
  -> 若暴露架构问题：improve-codebase-architecture
```

只有难以复现、间歇性或回归型问题才需要完整诊断流程；明显的小错误可以直接修复并验证。

## 代码库健康支线

`improve-codebase-architecture` 定期扫描深模块机会。它输出可视化候选，不立刻改代码；选中一个候选后，再进入 `grill-with-docs` 主流程。

## 独立工具

| 情况 | Skill |
| --- | --- |
| 需要可运行代码回答状态或 UI 问题 | `prototype` |
| 需要一手资料与引用，且不想阻塞主会话 | `research` |
| 会话已满，需要在新线程延续 | `handoff` |
| 学习一个概念并跨会话保存进度 | `teach` |
| 编写或改进 Skill | `writing-great-skills` |
| 解决正在进行的 Merge / Rebase 冲突 | `resolving-merge-conflicts` |
| 计划一个跨越多个会话且仍充满未知的大项目 | `wayfinder` |

## 上下文卫生

从 Grilling 到 Spec 和 Tickets 尽量保持连续上下文，因为这些阶段共享刚形成的理解。接近模型的有效推理区上限时使用 `handoff`，不要在阶段中间被动压缩。

实现阶段则反过来：每个独立 Issue 使用新上下文，让 Agent 只关注当前切片。

下一步进入主流程第一站：[对齐与领域语言](./clarify-and-model.md)。
