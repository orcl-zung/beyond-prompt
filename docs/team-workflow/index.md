# 研发协作 Skills

AI 协作的难点通常不是没有更多 Skill，而是不知道谁在何时用哪一个、交接什么、怎样确认工作真的完成。这一页把个人能力放回团队工作流里。

它适合产品负责人、研发负责人、项目经理和任何需要跨角色推进一件事的人。

## 一条团队可见的路径

```text
发现问题 -> 定义结果 -> 设计体验 -> 实现契约 -> 验证行为 -> 发布与复盘
```

每一步都应该留下能被下一角色使用的产物，而不是只留下一段聊天记录。

| 阶段 | 主要角色 | 推荐 Skill | 要留下什么 |
| --- | --- | --- | --- |
| 发现与澄清 | 产品 | `product-brainstorming`、`interview-me` | 问题、证据、假设和成功指标。 |
| 定义与拆解 | 产品 + 技术负责人 | `spec-driven-development`、`planning-and-task-breakdown` | 范围、非目标、验收和可验证任务。 |
| 设计与评审 | UI/UX + 前端 | `frontend-design`、`web-design-guidelines` | 状态、交互、可访问性和内容规则。 |
| 实现与排障 | 前后端 | `incremental-implementation`、`systematic-debugging` | 小步改动、证据和根因。 |
| 验证与交付 | 测试 + 全体 | `webapp-testing`、`verification-before-completion` | 新鲜测试结果、风险和发布说明。 |

## 三个最有用的协作动作

### 1. 先找对 Skill，再开始做

```text
使用 find-skills。我们正在做一个包含产品规格、权限 API、Vue 表单和端到端验证的功能。
请按角色和阶段推荐最少的一组 Skills，并解释它们的顺序与交接产物；
优先稳定来源，不要为了覆盖面堆很多相似 Skill。
```

`find-skills` 来自 Vercel 的 [agent-skills](https://github.com/vercel-labs/agent-skills/tree/7c180d9044c9ae2b442b567aad4e42a28dd5ed62/skills/find-skills)。它的作用是选择路径，不是取代领域判断。

### 2. 用同一份上下文开始跨角色工作

开始一项跨角色任务时，把这些信息放在所有 Agent 对话可见的位置：

1. 用户问题、目标和成功指标。
2. 已确认事实、待验证假设和不可改变的约束。
3. 设计状态、接口契约、测试数据或上线窗口等当前资料。
4. 本轮的范围、非目标和“完成”的验证方式。

这就是 [Context Engineering](../context-engineering/) 在团队里最朴素的用法：不是堆更多资料，而是让当前决策所需的信息恰好可见。

### 3. 卡住时先系统诊断，再扩展修改范围

```text
使用 systematic-debugging。邀请流程在特定租户下偶发失败。
先收集可复现条件、日志、请求与状态差异；提出假设并逐一验证，
不要在没有根因前同时修改前端、接口和权限规则。最后给出根因、修复、回归测试和残余风险。
```

来源为 Obra 的 [systematic-debugging](https://github.com/obra/superpowers/tree/44c9b2d6e889982ac18c27d05a19fefe335194e1/skills/systematic-debugging)。

## 已有专题如何放进团队

- [Matt Skills](../matt-skills/)：适合需求澄清、领域建模、原型、TDD 和工程结构的深度练习。
- [Addy Agent Skills](../addy-agent-skills/)：适合把 Define、Plan、Build、Verify、Ship 变成可追踪的交付节奏。
- [Java Skills](../java-skills/) 与 [Frontend Skills](../frontend-skills/)：适合语言和框架层面的具体实现。

把它们当作角色页背后的“工具箱”，而不是要求全体成员记住同一长串命令。

## 继续深入

- [产品与需求 Skills](../product-skills/)
- [UI/UX 设计 Skills](../design-skills/)
- [后端与平台 Skills](../backend-skills/)
- [测试与质量 Skills](../testing-skills/)
