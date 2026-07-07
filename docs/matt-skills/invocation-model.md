# 两种 Skill 调用模型

官方仓库用一个轴组织主 Skills：**谁可以调用它**。这个区别决定 Skill 应该负责编排，还是提供可复用纪律。

## User-invoked：用户掌握流程入口

这类 Skill 只能由用户显式调用，Frontmatter 中通常包含：

```yaml
disable-model-invocation: true
```

它们负责长流程、外部副作用或需要人决定的分支，例如：

- `ask-matt`：选择工作流。
- `grill-with-docs`：启动带领域文档的访谈。
- `implement`：根据 PRD 或 Issue 完成实现、审查和提交。
- `to-prd`、`to-issues`：写入 Issue Tracker。
- `triage`：改变外部 Issue / PR 状态。
- `handoff`：结束当前会话并为新会话准备上下文。

显式调用避免 Agent 自行开启高影响流程，也让用户知道当前处于哪个阶段。

## Model-invoked：自动复用工程纪律

这类 Skill 可以由用户直接请求，也可以由 Agent 在任务匹配时自动调用：

- `grilling`：一次一个问题的访谈循环。
- `domain-modeling`：维护领域语言与 ADR。
- `codebase-design`：深模块与测试 Seam 词汇。
- `prototype`：用一次性代码回答设计问题。
- `research`：基于一手资料形成引用报告。
- `tdd`：按预先确认的 Seam 做 Red-Green。
- `diagnosing-bugs`：建立紧密反馈循环后再定位根因。
- `code-review`：独立执行 Standards 与 Spec 双轴审查。

它们是可组合的“纪律层”，可以嵌入多个用户流程。

## 单向组合规则

用户调用 Skill 可以组合模型调用 Skill；模型调用 Skill 不应反过来启动另一个高层用户流程。

```text
用户：/grill-with-docs
  -> grilling
  -> domain-modeling

用户：/implement
  -> tdd
  -> code-review
```

这个方向保持调用图可预测：人启动编排，编排复用纪律，纪律不会突然接管会话。

## 仓库目录不等于稳定 API

官方仓库还包含：

- `deprecated/`：已被更好流程替代的 Skill。
- `in-progress/`：正在实验，接口可能变化。
- `misc/`：特定工具或迁移任务。
- `personal/`：作者个人工作流。

文档或团队配置应优先依赖 README 中公开的 Engineering 与 Productivity 主集。看到技能市场列出更多名称，不代表它们都处于同一稳定等级。

## 如何判断应该显式还是自动

| 问题 | 更适合的模型 |
| --- | --- |
| 会改变外部 Tracker、提交代码或切换会话吗？ | User-invoked |
| 需要用户选择分支或批准方向吗？ | User-invoked |
| 是多个流程都会复用的局部纪律吗？ | Model-invoked |
| 可以根据任务语义安全自动触发吗？ | Model-invoked |

理解调用模型后，就可以用 [`ask-matt`](./choosing-a-flow.md) 选择实际路径。
