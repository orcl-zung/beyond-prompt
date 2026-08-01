# Matt Skills 逐项使用手册

这一页覆盖 Matt Skills 当前稳定发布的 **22 个 Skills**：17 个 Engineering Skills 和 5 个 Productivity Skills。`deprecated`、`in-progress`、`misc` 与 `personal` 目录不属于这份稳定手册。

本文对照官方仓库 commit [`2ab9580`](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c)（2026-07-28）整理。

## 先理解怎么调用

Matt Skills 分成两种：

- **用户调用**：只有你明确输入 `/skill-name` 才会启动，主要负责编排流程。
- **模型调用**：任务匹配时 Agent 可以自动选择，你也可以直接点名，主要提供可复用的工程纪律。

下面的“你可以这样说”采用 Claude Code 的 `/skill-name` 写法。其他 Agent 没有斜杠命令时，直接说“使用 `skill-name`……”即可。

## 路由与初始化

### `setup-matt-pocock-skills`

- **什么时候用**：在一个仓库第一次使用 Matt Skills 时，只运行一次。
- **它会做什么**：识别项目现有约定，确认 Issue Tracker、Triage 标签和领域文档位置，再写入项目级适配文件。
- **你可以这样说**：`/setup-matt-pocock-skills 请使用 GitHub Issues，并把领域文档放在 docs/agents/。`
- **你会得到**：Tracker 操作说明、标签映射、领域文档布局，以及写入 `AGENTS.md` 或 `CLAUDE.md` 的配置。

[查看官方源码](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/engineering/setup-matt-pocock-skills)

### `ask-matt`

- **什么时候用**：知道自己遇到了问题，但不确定应该用哪个 Skill 或哪条流程。
- **它会做什么**：只负责路由，不会直接访谈、写规格或改代码。
- **你可以这样说**：`/ask-matt 我有三个线上 Bug、一个模糊的新功能和一次大重构，应该分别从哪里开始？`
- **你会得到**：推荐的 Skill 顺序，以及每条路径为什么适合当前工作。

[查看官方源码](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/engineering/ask-matt)

## 从想法到可执行工作

### `grill-me`

- **什么时候用**：计划、产品想法或个人决定还很模糊，而且不需要修改代码库文档。
- **它会做什么**：一次只问一个高价值问题，持续追问分支、约束和取舍，直到决策树基本闭合。
- **你可以这样说**：`/grill-me 我想做一个面向独立开发者的 AI 周报产品，请把我的想法问清楚。`
- **你会得到**：经过压力测试的目标、边界、风险和待决定事项。

[查看官方源码](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/productivity/grill-me)

### `grilling`

- **什么时候用**：另一个 Skill 需要一套可靠的深度访谈循环，或你明确要求 Agent 持续追问。
- **它会做什么**：维护问题队列、逐项消除不确定性，并在信息不足时拒绝过早给方案。
- **你可以这样说**：`使用 grilling 压测这个权限模型，重点追问角色继承、撤权和审计场景。`
- **你会得到**：被验证或推翻的假设，以及仍需人工决策的问题。

[查看官方源码](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/productivity/grilling)

### `grill-with-docs`

- **什么时候用**：要讨论一个工程计划，同时希望项目术语和重要架构决定被持久记录。
- **它会做什么**：运行 Grilling，并在过程中调用领域建模纪律，持续更新 `CONTEXT.md`，必要时创建 ADR。
- **你可以这样说**：`/grill-with-docs 我们要为课程系统增加“发布批次”，请先把领域含义和边界问清楚。`
- **你会得到**：清晰方案、统一词汇表、更新后的领域上下文，以及少量真正必要的 ADR。

[查看官方源码](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/engineering/grill-with-docs)

### `to-spec`

- **什么时候用**：需求已经讨论清楚，需要把当前共识固化成可检查的规格。
- **它会做什么**：不重新访谈；综合当前对话和代码库信息，确认测试接口后发布 Spec 到已配置的 Tracker。
- **你可以这样说**：`/to-spec 把刚才确认的团队邀请流程整理成规格，并发布到 GitHub Issues。`
- **你会得到**：问题、方案、用户故事、实现决定、测试决定、非目标和补充说明。

[查看官方源码](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/engineering/to-spec)

### `to-tickets`

- **什么时候用**：已经有 Spec 或明确计划，需要拆成可以独立领取和验证的工作项。
- **它会做什么**：优先拆成端到端 Tracer Bullet，标注阻塞关系；宽范围机械改动改用 Expand–Migrate–Contract。
- **你可以这样说**：`/to-tickets 把 Issue #128 拆成纵向切片，保证每个 Ticket 都能单独验证。`
- **你会得到**：按依赖排序的 Tickets、验收标准和 `Blocked by` 关系。

[查看官方源码](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/engineering/to-tickets)

### `wayfinder`

- **什么时候用**：工作大到一个 Agent 会话装不下，而且现在还无法直接写成 Spec。
- **它会做什么**：先定义终点，再把未知部分画成决策 Ticket 地图；每次解决一个问题，逐步推开“战争迷雾”。
- **你可以这样说**：`/wayfinder 我们要把单体账单系统迁移成多租户平台，但身份、数据隔离和迁移路径都还不清楚。`
- **你会得到**：一个 Map Issue、HITL/AFK 决策 Tickets、阻塞关系和持续更新的决策记录，而不是代码。

[查看官方源码](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/engineering/wayfinder)

## 实现与反馈

### `implement`

- **什么时候用**：Spec 或 Tickets 已经明确，测试位置也已约定，准备开始编码。
- **它会做什么**：按既定工作执行 TDD，频繁运行类型检查和相关测试，最后完整测试、代码审查并提交。
- **你可以这样说**：`/implement GitHub Issue #131，只实现这个 Ticket 的范围。`
- **你会得到**：通过验证的代码、测试、审查结果和当前分支上的原子提交。

[查看官方源码](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/engineering/implement)

### `tdd`

- **什么时候用**：新增行为、修复 Bug，或明确要求 Red–Green–Refactor。
- **它会做什么**：先找到能覆盖真实行为的稳定测试接口，观察测试因正确原因失败，再写最小实现并重构。
- **你可以这样说**：`使用 tdd 修复金额 3.335 × 3 显示错误，先写能复现 10.01 期望值的回归测试。`
- **你会得到**：一个确实经历过 Red 的测试、最小修复和保持绿色的重构结果。

[查看官方源码](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/engineering/tdd)

### `prototype`

- **什么时候用**：需要用可运行结果回答“这个状态模型是否成立”或“这个 UI 方向是否合适”。
- **它会做什么**：逻辑问题构建终端原型；UI 问题在一个路由中提供多种明显不同的方案。原型默认可丢弃。
- **你可以这样说**：`使用 prototype 做三种任务看板交互方案，让我能在同一路由切换比较。`
- **你会得到**：用于决策的可运行实验，以及从实验中确认的约束；不是生产代码。

[查看官方源码](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/engineering/prototype)

### `diagnosing-bugs`

- **什么时候用**：Bug 难复现、原因未知、偶发，或出现性能回退。
- **它会做什么**：建立可重复反馈信号，复现并最小化，再排列可证伪假设、定向取证、修复并加入回归保护。
- **你可以这样说**：`使用 diagnosing-bugs 调查结账分页偶尔返回空页的问题，在找到可重复复现前不要改行为。`
- **你会得到**：可运行复现、根因证据、最小修复、回归测试和简短复盘。

[查看官方源码](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/engineering/diagnosing-bugs)

### `code-review`

- **什么时候用**：审查分支、PR、工作区改动，或检查从某个固定点之后的变化。
- **它会做什么**：确定比较基线，同时运行 Standards 与 Spec 两个独立审查，最后并排汇总，不让一个视角污染另一个。
- **你可以这样说**：`/code-review review since origin/main，规格来源是 Issue #131。`
- **你会得到**：按严重程度排序、带文件位置的标准符合性问题和规格偏差。

[查看官方源码](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/engineering/code-review)

### `resolving-merge-conflicts`

- **什么时候用**：Git Merge 或 Rebase 已经进行中，并停在冲突状态。
- **它会做什么**：逐个 Hunk 追溯双方 Commit、PR 或 Issue 的意图，兼容时保留两者，冲突时明确取舍，然后完成整个 Git 操作。
- **你可以这样说**：`使用 resolving-merge-conflicts 完成当前 rebase；请按双方提交意图解决，不要直接选 ours 或 theirs。`
- **你会得到**：无冲突标记、通过项目检查、完成 Merge/Rebase 的干净工作树。

[查看官方源码](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/engineering/resolving-merge-conflicts)

## 领域、架构与研究

### `domain-modeling`

- **什么时候用**：项目术语含糊、团队对同一个词理解不同，或需要记录重要架构决定。
- **它会做什么**：用具体边界场景挑战词汇，对照代码检查命名，持续更新 `CONTEXT.md`，只在必要时建议 ADR。
- **你可以这样说**：`使用 domain-modeling 澄清“账户、成员、租户、工作区”的区别，并用停用成员的场景检验。`
- **你会得到**：更精确的统一语言、代码映射和可持续维护的领域文档。

[查看官方源码](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/engineering/domain-modeling)

### `codebase-design`

- **什么时候用**：设计模块接口、寻找合适的测试位置，或代码职责分散、接口不断膨胀。
- **它会做什么**：使用深模块、测试接口和适配器等共同词汇，比较候选边界，让更多行为藏在更小接口后面。
- **你可以这样说**：`使用 codebase-design 评估支付重试逻辑应该放在哪个模块，并比较两个接口方案。`
- **你会得到**：候选模块边界、接口草图、测试策略和明确的设计取舍。

[查看官方源码](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/engineering/codebase-design)

### `improve-codebase-architecture`

- **什么时候用**：代码库越来越难改，想主动寻找架构改善机会，但还没选定具体重构。
- **它会做什么**：扫描浅模块和重复职责，生成可视化候选报告；由人选择一个候选后，再通过访谈形成改进方案。
- **你可以这样说**：`/improve-codebase-architecture 扫描订单与支付模块，找出最值得优先处理的三个深模块机会。`
- **你会得到**：HTML 候选报告、收益与风险比较，以及选中方向的清晰问题定义；不会直接大改代码。

[查看官方源码](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/engineering/improve-codebase-architecture)

### `research`

- **什么时候用**：需要阅读官方文档、论文或一手资料，而且希望研究工作与主实现会话隔离。
- **它会做什么**：优先高可信原始来源，记录事实、分歧与推断，把结果写成仓库内带引用的 Markdown。
- **你可以这样说**：`使用 research 调查 WebAuthn Passkey 在 Safari、Chrome 和 Android 上的当前限制，只采用官方资料。`
- **你会得到**：可复查的研究文档、来源链接、已确认事实和仍未验证的问题。

[查看官方源码](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/engineering/research)

## 外部工作与跨会话

### `triage`

- **什么时候用**：外部 Issue 或 PR 进入仓库，需要判断类别、真实性和下一步责任人。
- **它会做什么**：读取完整上下文和既有拒绝记录，验证主张，必要时向报告者追问，最后写 Agent-ready Brief 并迁移状态。
- **你可以这样说**：`/triage GitHub Issue #87，先验证复现步骤，再决定是 needs-info 还是 ready-for-agent。`
- **你会得到**：明确状态、验证证据、补充问题或可直接执行的 Agent Brief。

[查看官方源码](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/engineering/triage)

### `handoff`

- **什么时候用**：上下文已长、需要换会话或换 Agent，但工作尚未结束。
- **它会做什么**：只压缩尚未沉淀的信息，引用已有 Spec、Issue、Commit 和文件，不重复复制整个历史。
- **你可以这样说**：`/handoff 为下一位 Agent 记录当前目标、已完成工作、未决风险和建议的下一步 Skill。`
- **你会得到**：一份不含敏感信息、可以在新会话直接接手的临时交接文档。

[查看官方源码](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/productivity/handoff)

## 学习与 Skill 创作

### `teach`

- **什么时候用**：希望在多个会话中系统学习一个概念或技能，而不是只要一次解释。
- **它会做什么**：在当前目录建立有状态教学工作区，安排略高于当前能力的练习，并区分“看起来熟悉”和“真正能回忆使用”。
- **你可以这样说**：`/teach 在这个仓库里教我 TypeScript 条件类型，每次一小课，并保存练习进度。`
- **你会得到**：课程状态、练习、复习记录和持续更新的学习笔记。

[查看官方源码](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/productivity/teach)

### `writing-great-skills`

- **什么时候用**：创建或重写 Agent Skill，希望它能被可靠发现并产生可预测行为。
- **它会做什么**：检查触发描述、信息层级、正文拆分、命令性措辞和常见失败模式，删掉不会改变行为的内容。
- **你可以这样说**：`/writing-great-skills 审查 skills/release-notes/SKILL.md，重点检查触发条件是否可发现、流程是否可执行。`
- **你会得到**：更精确的描述、清晰流程、合理的 Supporting Files 边界和删减建议。

[查看官方源码](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/productivity/writing-great-skills)

## 三条可直接采用的组合

```text
新功能：grill-with-docs -> to-spec -> to-tickets -> implement -> code-review
困难 Bug：diagnosing-bugs -> tdd -> code-review
超大且模糊的计划：wayfinder -> to-spec -> to-tickets -> 每个 Ticket 独立 implement
```

不确定从哪条开始时，直接调用 `ask-matt`，不要靠记忆猜。
