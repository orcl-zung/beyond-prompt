# Matt Skills 总览

Matt Skills 是 Matt Pocock 在真实工程工作中使用的一组 Agent Skills。它不试图接管整个开发过程，而是提供小型、可改造、可组合的工程动作，让人继续掌握流程和判断权。

本手册基于官方仓库 2026-07-07 的版本（commit `8515a08`）重构。

> 官方项目：[mattpocock/skills](https://github.com/mattpocock/skills)

## 为什么存在

官方 README 将 Agent 工程中的失败归纳为四类。

### 1. Agent 没做出你真正想要的东西

需求通常不是一开始就完整存在。`grill-me` 和 `grill-with-docs` 通过一次一个问题的访谈，让人和 Agent 在动手前建立共同理解。

### 2. Agent 解释得太长，代码也不使用项目语言

缺少共享领域语言时，Agent 只能用通用词绕着表达。`domain-modeling` 把项目术语沉淀到 `CONTEXT.md`，让讨论、命名和代码导航共享同一个模型。

### 3. 代码看起来合理，但实际不能工作

Agent 的速度由反馈速度限制。`tdd`、`diagnosing-bugs` 和 `prototype` 为实现提供可运行信号，而不是依靠阅读代码后的自信。

### 4. 开发速度提高，代码库更快变成泥团

`codebase-design` 提供深模块词汇，`improve-codebase-architecture` 主动寻找加深机会。目标不是一次性“大重构”，而是每天投资系统设计。

## 核心设计

- **Small**：每个 Skill 解决一个清晰问题。
- **Composable**：用户调用的 Skill 可以组合模型调用的纪律 Skill。
- **Adaptable**：它们是可修改的工程工具，不是不可质疑的框架。
- **Feedback-driven**：完成必须有测试、运行或审查证据。
- **Human-controlled**：关键分支和取舍仍由人决定。

## 主流程

```text
setup-matt-pocock-skills（每个仓库一次）
  -> grill-with-docs
  -> 必要时 handoff -> prototype / research -> handoff 回来
  -> 小任务：implement
  -> 大任务：to-prd -> to-issues -> 每个 Issue 独立 implement
  -> implement 内部：tdd -> code-review -> commit
```

还有两条常见入口：

```text
外部 Issue / PR 堆积 -> triage -> implement
困难 Bug -> diagnosing-bugs -> 必要时 improve-codebase-architecture
```

## Skill 地图

| 角色 | 用户调用 | 模型调用 |
| --- | --- | --- |
| 编排 | `ask-matt`、`grill-with-docs`、`implement`、`to-prd`、`to-issues`、`triage` | 由编排 Skill 组合下层纪律 |
| 探索 | `grill-me`、`handoff` | `grilling`、`prototype`、`research` |
| 领域与架构 | `improve-codebase-architecture` | `domain-modeling`、`codebase-design` |
| 反馈 | 可直接请求 `tdd`、`code-review` | `tdd`、`diagnosing-bugs`、`code-review` |
| 学习与创作 | `teach`、`writing-great-skills` | 由对应 Skill 管理自己的工作空间 |

## 阅读路径

1. [安装与项目配置](./getting-started.md)
2. [两种 Skill 调用模型](./invocation-model.md)
3. [选择正确的工作流](./choosing-a-flow.md)
4. [对齐与领域语言](./clarify-and-model.md)
5. [深模块与代码库健康](./deep-modules.md)
6. [原型与研究支线](./prototyping.md)
7. [Implement 与 TDD](./tdd.md)
8. [诊断与双轴审查](./diagnosing-bugs.md)
9. [PRD、Issues、Triage 与 Handoff](./delivery.md)
