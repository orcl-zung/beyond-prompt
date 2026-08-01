# Addy Agent Skills

Addy Agent Skills 是 Addy Osmani 维护的一套生产级软件工程工作流。它将资深工程师在需求、实现、验证、审查和发布中的方法，封装为 AI Coding Agent 可以发现并执行的 Skills。

本手册基于官方仓库 2026-07-26 的版本（commit [`7829ffd`](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443)）整理。该版本包含 **24 个 Skills**：23 个覆盖工程生命周期，另有 `using-agent-skills` 元技能负责发现和组合。

> 官方项目：[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)

## 六阶段生命周期

```text
DEFINE       PLAN         BUILD        VERIFY       REVIEW       SHIP
想法与规格 -> 任务拆分 -> 增量实现 -> 测试与调试 -> 质量门禁 -> 安全上线
```

| 阶段 | 目标 | 代表 Skills |
| --- | --- | --- |
| Define | 确认真正需求并形成可验证规格 | `interview-me`、`idea-refine`、`spec-driven-development` |
| Plan | 建立依赖图并拆成小任务 | `planning-and-task-breakdown` |
| Build | 以小切片实现并管理上下文 | `incremental-implementation`、`context-engineering`、`source-driven-development` |
| Verify | 用运行证据证明行为 | `test-driven-development`、`browser-testing-with-devtools`、`debugging-and-error-recovery` |
| Review | 从五个维度把守代码健康度 | `code-review-and-quality`、`code-simplification`、`security-and-hardening`、`performance-optimization` |
| Ship | 管理提交、流水线、迁移、可观测性与发布 | `git-workflow-and-versioning`、`ci-cd-and-automation`、`shipping-and-launch` 等 |

## 与普通提示词的区别

这套 Skills 不是“请认真写代码”式建议。每个 Skill 都包含：

- 明确的触发条件。
- 必须按顺序执行的 Process。
- 针对 Agent 常见借口的反合理化规则。
- 表明流程失效的 Red Flags。
- 可检查的 Verification 门槛。

它试图解决的不是模型“不知道最佳实践”，而是模型在压力下会跳过步骤、扩大范围、接受未经验证的假设。

## 典型完整路径

```text
interview-me
  -> idea-refine
  -> spec-driven-development
  -> planning-and-task-breakdown
  -> context-engineering
  -> source-driven-development
  -> incremental-implementation + test-driven-development
  -> code-review-and-quality + code-simplification
  -> git-workflow-and-versioning
  -> documentation-and-adrs
  -> shipping-and-launch
```

这不是每次都必须执行的固定流水线。一个缺陷修复可能只需要：

```text
debugging-and-error-recovery
  -> test-driven-development
  -> code-review-and-quality
```

## 阅读路径

1. [安装与 Skill 结构](./getting-started.md)
2. [24 个 Skills 逐项使用手册](./skill-reference.md)
3. [运行原则与技能路由](./operating-model.md)
4. [Define：从想法到规格](./define.md)
5. [Plan：拆成可验证任务](./plan.md)
6. [Build：增量实现](./build.md)
7. [Verify & Review：证明与审查](./verify-and-review.md)
8. [Ship：安全发布](./ship.md)
