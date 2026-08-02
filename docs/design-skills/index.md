# UI/UX 设计 Skills

设计 Skill 的价值不是替代设计判断，而是把判断过程变得可讨论：用户要完成什么、信息怎样分层、状态是否齐全、界面能否被真实使用。

它适合产品设计师、UI 设计师，也适合需要和设计一起做界面的研发人员。

## 从什么开始

| 场景 | 推荐 Skill | 它帮你把什么说清楚 |
| --- | --- | --- |
| 从零开始设计一个任务流 | `frontend-design` | 信息层级、视觉方向、组件选择与真实内容。 |
| 对已有页面做体验检查 | `web-design-guidelines` | 布局、可访问性、状态、文案与常见 UI 问题。 |
| 需要让方案经得起评审 | `critique` | 目标、证据、问题优先级和改进建议。 |
| 主路径已经可用，准备细修 | `polish` | 层级、密度、对齐、反馈和一致性。 |

> `critique` 和 `polish` 是精修阶段的工具。先确定用户任务和内容结构，再讨论阴影、动效或颜色。

## 推荐路径

```text
产品交接包
  -> frontend-design
  -> 和研发确认组件与状态
  -> web-design-guidelines
  -> （临近交付）critique / polish
```

## 逐个怎么用

### `frontend-design`

**适用时机**：要新建页面、重做关键流程，或当前方案很像一套无差别的组件拼装时。

```text
使用 frontend-design，为“邀请团队成员”设计桌面端和移动端流程。
目标用户是第一次管理团队的负责人；核心任务是邀请、设定角色、知道邀请是否成功。
请先提出信息架构、主流程和所有关键状态，再给出视觉方向与组件建议。
保留真实文案，不要用 lorem ipsum；标出研发需要的 loading、empty、error 和权限状态。
```

**交付物**：一套有产品理由的界面方向和可实现的状态清单。来源为 Anthropic 的 [frontend-design](https://github.com/anthropics/skills/tree/b29e7cf65e5cb78a5ac33d582270551bc74a14eb/skills/frontend-design)。

### `web-design-guidelines`

**适用时机**：页面已存在，想从“看起来还行”变成一份可执行的体验审查时。

```text
使用 web-design-guidelines 审查这个邀请页面。
按影响从高到低列出问题，覆盖任务完成率、键盘操作、焦点、对比度、错误提示、
窄屏布局和异步状态。每个问题给出原因、建议改法和需要由谁确认。
```

**交付物**：按优先级排序的问题单，而不是笼统的“优化一下 UI”。来源为 Vercel 的 [web-design-guidelines](https://github.com/vercel-labs/agent-skills/tree/7c180d9044c9ae2b442b567aad4e42a28dd5ed62/skills/web-design-guidelines)。

### `critique` 与 `polish`

**适用时机**：`critique` 用于评审设计稿或已实现页面；`polish` 用于功能与状态都正确后的最后一轮精修。

```text
使用 critique 评审这条注册流程。先复述用户任务与成功标准，
再区分阻碍完成、造成理解成本和纯视觉一致性的问题。不要重做整个方案，
只给影响最大的 5 项改动，并说明验证方式。
```

两者来自 [Impeccable](https://github.com/pbakaus/impeccable) 的参考工作流。把输出当作同行评审意见，仍由设计负责人决定取舍。

## 给研发和测试的交接包

设计完成前，补齐这些比一张静态图更有用：

1. 主任务和成功状态。
2. Loading、empty、error、disabled、权限不足等状态。
3. 交互规则、可访问性要求和窄屏行为。
4. 可被测试的验收描述，例如“提交失败后保留输入并把焦点移到错误说明”。

## 继续深入

- [产品与需求 Skills](../product-skills/)
- [前端工程 Skills](../frontend-skills/)
- [测试与质量 Skills](../testing-skills/)
