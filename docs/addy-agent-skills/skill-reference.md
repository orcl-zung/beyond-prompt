# Addy Agent Skills 逐项使用手册

这一页覆盖 Addy Agent Skills 当前正式发布的 **24 个 Skills**。它们不是 24 个必须同时加载的规则，而是一组按任务选择的工作流。

本文对照官方仓库 commit [`7829ffd`](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443)（2026-07-26）整理。示例优先改写自仓库内的官方 Evals Fixtures；没有 Fixture 的 Skill，则根据其 `When to Use`、Process 与 Verification 编写。

## 先理解怎么调用

- **Codex**：安装插件后输入 `@skill-name`，或直接描述任务让 Agent 自动匹配。
- **Claude Code**：可使用 `/spec`、`/plan`、`/build`、`/test`、`/review`、`/code-simplify`、`/ship` 等生命周期命令，也可明确要求使用某个 Skill。
- **其他 Agent**：说“请遵循 `skill-name` 处理这个任务”，并确保 Agent 能读取对应 `SKILL.md`。

不要一次加载全部 24 个 Skills。先根据当前阶段选择 1–3 个，完成后再切换。

## Meta：选择正确的 Skill

### `using-agent-skills`

- **什么时候用**：新会话开始，或不确定一个任务应落在哪个工程阶段。
- **它会做什么**：识别意图、映射生命周期 Skill，并执行六条全局行为：暴露假设、管理困惑、必要时异议、约束复杂度、守住范围、用证据验证。
- **你可以这样说**：`@using-agent-skills 登录页部署后返回 500，目前只知道错误发生在认证回调之后。请先选择正确流程。`
- **你会得到**：它会路由到 `debugging-and-error-recovery`，而不是擅自重做认证架构。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/using-agent-skills) · [官方登录故障案例](https://github.com/addyosmani/agent-skills/blob/7829ffd90d973b6325f5f12f1b1226dcace74443/evals/fixtures/using-agent-skills/incident.md)

## Define：弄清楚要做什么

### `interview-me`

- **什么时候用**：请求只有“做一个 X”，但用户、动机、边界或成功标准不清楚。
- **它会做什么**：先给出带置信度的意图假设，然后一次只问一个问题，并附带自己的猜测；达到约 95% 置信度后复述并要求明确确认。
- **你可以这样说**：`@interview-me 我想做一个团队知识库。不要开始设计，先弄清楚我真正想解决的问题。`
- **你会得到**：经用户确认的真实意图、约束、非目标和仍需决定的问题。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/interview-me)

### `idea-refine`

- **什么时候用**：已经有粗略想法，希望先扩展选择，再有依据地收敛到一个方向。
- **它会做什么**：把问题与解法分开，进行发散、聚类、假设检验和收敛，避免一开始就爱上第一个方案。
- **你可以这样说**：`@idea-refine 我想为远程团队减少状态会议，请提出多种机制，比较后收敛成最小可行方案。`
- **你会得到**：问题陈述、推荐方向、待验证假设、MVP、明确非目标和开放问题。

[查看官方源码与示例](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/idea-refine)

### `spec-driven-development`

- **什么时候用**：新项目、重要功能或显著改动还没有可执行规格。
- **它会做什么**：先写 Spec，再通过计划、任务和实现四道门；遇到未知决定会明确提出，不会写代码替用户做产品决定。
- **你可以这样说**：`@spec-driven-development 为用量计费写规格。用量定义、免费额度、纠错规则和旧客户迁移都还没决定。`
- **你会得到**：目标、技术栈、命令、结构、代码规范、测试策略、边界、成功标准和开放问题。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/spec-driven-development) · [官方计费案例](https://github.com/addyosmani/agent-skills/blob/7829ffd90d973b6325f5f12f1b1226dcace74443/evals/fixtures/spec-driven-development/billing-brief.md)

## Plan：拆成可以验证的任务

### `planning-and-task-breakdown`

- **什么时候用**：已经有清晰需求或 Spec，但任务太大、依赖不明，无法直接开始。
- **它会做什么**：识别依赖图，优先切成小型端到端任务，为每项写验收标准、验证命令和 Checkpoint。
- **你可以这样说**：`@planning-and-task-breakdown 把邮件通知 Spec 拆成任务，包含偏好 API、去重 Job、Provider Adapter 和一个端到端场景。`
- **你会得到**：按依赖排序、可独立验证、可以安全并行的任务计划。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/planning-and-task-breakdown) · [官方通知案例](https://github.com/addyosmani/agent-skills/blob/7829ffd90d973b6325f5f12f1b1226dcace74443/evals/fixtures/planning-and-task-breakdown/notifications-spec.md)

## Build：以小步写出可靠代码

### `incremental-implementation`

- **什么时候用**：功能跨越多个文件，或一次修改量大到难以验证和回滚。
- **它会做什么**：按 Vertical、Contract-first 或 Risk-first 切片，每次实现、测试、验证和提交一个切片，始终保持可编译和安全默认值。
- **你可以这样说**：`@incremental-implementation 实现导出功能，把格式化、浏览器下载、UI 状态和分析事件拆成可独立验证的切片。`
- **你会得到**：一系列小而完整的增量，每一步都可运行、可审查、可回退。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/incremental-implementation) · [官方导出案例](https://github.com/addyosmani/agent-skills/blob/7829ffd90d973b6325f5f12f1b1226dcace74443/evals/fixtures/incremental-implementation-pressure/scenario.md)

### `test-driven-development`

- **什么时候用**：实现逻辑、修复 Bug 或改变已有行为。
- **它会做什么**：先证明测试会因目标缺失而失败，再写最小实现、重构并保持绿色；拒绝用“现有测试是绿的”代替回归证据。
- **你可以这样说**：`@test-driven-development 修复 3.335 × 3 的货币舍入错误，先写期望 10.01 的失败测试。`
- **你会得到**：可靠的 Red–Green–Refactor 证据和覆盖真实调用路径的测试。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/test-driven-development) · [官方舍入案例](https://github.com/addyosmani/agent-skills/blob/7829ffd90d973b6325f5f12f1b1226dcace74443/evals/fixtures/test-driven-development/authority-pressure.md)

### `context-engineering`

- **什么时候用**：新会话、任务切换、Agent 开始忘记项目约定，或输出越来越泛化。
- **它会做什么**：按规则文件、规格、相关源码、错误输出和会话摘要分层整理上下文，移除历史噪声和生成文件。
- **你可以这样说**：`@context-engineering 审计当前上下文。项目使用 TypeScript 和 Vitest，但 Agent 总推荐 JavaScript 与 Jest。`
- **你会得到**：精简后的上下文包、缺失规则、冲突信息和建议加载顺序。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/context-engineering) · [官方上下文审计案例](https://github.com/addyosmani/agent-skills/blob/7829ffd90d973b6325f5f12f1b1226dcace74443/evals/fixtures/context-engineering/context-audit.md)

### `source-driven-development`

- **什么时候用**：实现依赖框架或库的当前 API、默认值和最佳实践，记忆可能已经过期。
- **它会做什么**：检测实际版本，读取官方具体文档，以有出处的模式实现，并明确标记无法验证的部分。
- **你可以这样说**：`@source-driven-development 为 Express 5 配置生产 Session，只使用 Express 与 express-session 官方文档并逐项引用。`
- **你会得到**：带一手来源的实现、版本对应关系和清楚标记的部署假设。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/source-driven-development) · [官方 Express 案例](https://github.com/addyosmani/agent-skills/blob/7829ffd90d973b6325f5f12f1b1226dcace74443/evals/fixtures/source-driven-development/framework-task.md)

### `doubt-driven-development`

- **什么时候用**：生产、安全、不可逆迁移等高风险决定，或代码库陌生而结论看起来过于自信。
- **它会做什么**：把决定拆成 Claims，交给新鲜上下文逐条质疑，再用证据协调结论；验证成本低于事后排错时尤其适合。
- **你可以这样说**：`@doubt-driven-development 审查“停机 15 分钟直接把整数客户 ID 换成 UUID”的迁移计划。`
- **你会得到**：未经证明的主张、证据缺口、更安全方案和必须由人批准的风险。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/doubt-driven-development) · [官方 UUID 迁移案例](https://github.com/addyosmani/agent-skills/blob/7829ffd90d973b6325f5f12f1b1226dcace74443/evals/fixtures/doubt-driven-development/migration-plan.md)

### `frontend-ui-engineering`

- **什么时候用**：构建或修改用户界面、组件、响应式布局、交互状态或无障碍行为。
- **它会做什么**：先遵循现有设计系统，再处理组件边界、状态、键盘与屏幕阅读器、响应式、加载和错误状态，最后在真实界面验证。
- **你可以这样说**：`@frontend-ui-engineering 按现有 menu-* 样式实现下拉菜单，支持方向键、Escape、禁用项和关闭后焦点回到触发器。`
- **你会得到**：与项目一致、响应式、达到 WCAG 2.1 AA 基线并经过运行验证的 UI。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/frontend-ui-engineering) · [官方菜单案例](https://github.com/addyosmani/agent-skills/blob/7829ffd90d973b6325f5f12f1b1226dcace74443/evals/fixtures/frontend-ui-engineering/design-system.md)

### `api-and-interface-design`

- **什么时候用**：设计 REST/GraphQL API、模块公共接口、前后端契约或错误语义。
- **它会做什么**：先明确消费者和兼容性，设计请求、响应、错误与版本规则，在边界验证不可信输入，并保持单一当前版本。
- **你可以这样说**：`@api-and-interface-design 设计短链接服务 API，区分不存在与已过期，但不要暴露内部存储细节。`
- **你会得到**：稳定契约、类型或 Schema、错误模型、兼容策略和边界测试清单。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/api-and-interface-design) · [官方短链接案例](https://github.com/addyosmani/agent-skills/blob/7829ffd90d973b6325f5f12f1b1226dcace74443/evals/fixtures/api-and-interface-design/service-brief.md)

## Verify：证明真实行为

### `browser-testing-with-devtools`

- **什么时候用**：网页功能需要检查真实 DOM、Console、Network、性能或最终视觉结果。
- **使用前提**：Agent 已配置 Chrome DevTools MCP，并能访问目标网页。
- **它会做什么**：在真实浏览器重现用户路径，先收集运行证据，再定位问题或证明实现可用。
- **你可以这样说**：`@browser-testing-with-devtools 打开注册页，提交邮箱，并基于 DOM、Console 和 Network 证据解释失败原因。`
- **你会得到**：可重现步骤、浏览器运行证据、截图或 Trace，以及经过验证的结论。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/browser-testing-with-devtools) · [官方注册页案例](https://github.com/addyosmani/agent-skills/blob/7829ffd90d973b6325f5f12f1b1226dcace74443/evals/fixtures/browser-testing-with-devtools/README.md)

### `debugging-and-error-recovery`

- **什么时候用**：测试失败、构建中断、行为异常或出现未知错误。
- **它会做什么**：停止继续堆功能，按复现、定位、缩减、修复、保护五步处理根因，并保留失败证据。
- **你可以这样说**：`@debugging-and-error-recovery 生产结账分页返回空页。先建立失败复现，不要直接改 slice 下标。`
- **你会得到**：最小复现、根因、范围受控的修复和防止复发的测试或监控。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/debugging-and-error-recovery) · [官方结账案例](https://github.com/addyosmani/agent-skills/blob/7829ffd90d973b6325f5f12f1b1226dcace74443/evals/fixtures/debugging-and-error-recovery/time-pressure.md)

## Review：合并前质量门禁

### `code-review-and-quality`

- **什么时候用**：任何改动准备合并前，或需要系统审查人类/Agent 写的代码。
- **它会做什么**：从正确性、可读性、架构、安全和性能五轴审查，先看测试，再看实现，并验证所谓的验证证据。
- **你可以这样说**：`@code-review-and-quality 审查当前分支相对 main 的改动，先列阻塞合并的问题并附文件位置。`
- **你会得到**：按严重程度排序的可行动发现、剩余风险和测试缺口。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/code-review-and-quality)

### `code-simplification`

- **什么时候用**：代码已经工作，但比必要情况更绕、更难读或更难维护。
- **它会做什么**：先理解现有结构为何存在，再限制在相关改动范围内逐步简化，并证明行为完全不变。
- **你可以这样说**：`@code-simplification 简化这次 PR 中的订单状态判断，不改变公共 API、错误文本或测试行为。`
- **你会得到**：更直接的控制流、更少重复和复杂度，以及行为未变的测试证据。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/code-simplification)

### `security-and-hardening`

- **什么时候用**：处理用户输入、认证授权、敏感数据、文件上传、第三方集成或依赖风险。
- **它会做什么**：先做 Threat Model，再检查信任边界、OWASP 风险、Secrets、供应链和 AI 特有攻击；高风险动作必须请求人类批准。
- **你可以这样说**：`@security-and-hardening 审查头像上传接口，覆盖内容类型欺骗、路径穿越、大小限制、恶意文件和访问控制。`
- **你会得到**：带优先级的威胁、修复建议、边界测试和仍需人工决定的风险。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/security-and-hardening)

### `performance-optimization`

- **什么时候用**：有明确性能目标、出现回退，或 Profiling 已显示可能瓶颈。
- **它会做什么**：先记录基线和预算，再定位真正瓶颈，一次改变一个变量，并比较前后数据决定保留还是撤销。
- **你可以这样说**：`@performance-optimization 首页 LCP 从 1.9s 退化到 3.4s。先测量资源与主线程，再提出修复。`
- **你会得到**：基线、瓶颈证据、量化改善和持续防回退的性能预算。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/performance-optimization)

## Ship：让发布可控、可观察、可回退

### `git-workflow-and-versioning`

- **什么时候用**：任何代码改动，以及分支、提交、冲突、版本号、Tag 或 Changelog 工作。
- **它会做什么**：保持 Trunk-friendly 的小改动，创建原子提交，把 Commit 当作可靠保存点，并按语义化影响决定版本。
- **你可以这样说**：`@git-workflow-and-versioning 把当前改动拆成两个原子提交：先迁移配置，再启用新行为。`
- **你会得到**：清楚的提交历史、合理版本决定和可追溯变更说明。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/git-workflow-and-versioning)

### `ci-cd-and-automation`

- **什么时候用**：新增或修改 CI/CD、质量门禁、自动测试、制品或部署策略。
- **它会做什么**：把反馈前移，组织快速失败的 Pipeline，管理缓存、环境和部署权限，并确保失败信息能快速回到开发者。
- **你可以这样说**：`@ci-cd-and-automation 为 VitePress 配置 GitHub Pages，PR 只构建，main 构建后部署。`
- **你会得到**：可重复的 Pipeline、明确质量门禁和失败反馈路径。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/ci-cd-and-automation)

### `deprecation-and-migration`

- **什么时候用**：替换旧 API、数据模型或系统，迁移消费者，最终删除 Zombie Code。
- **它会做什么**：先盘点消费者和使用量，再构建替代品、公告、分批迁移、监测采用率，最后按明确门槛删除旧系统。
- **你可以这样说**：`@deprecation-and-migration 为每天 48,000 次调用的 /v1/orders 制定迁移到 v2 的计划，合同要求提前 90 天通知。`
- **你会得到**：迁移阶段、兼容窗口、沟通计划、Telemetry、回滚与最终删除条件。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/deprecation-and-migration) · [官方 API 迁移案例](https://github.com/addyosmani/agent-skills/blob/7829ffd90d973b6325f5f12f1b1226dcace74443/evals/fixtures/deprecation-and-migration/api-inventory.md)

### `documentation-and-adrs`

- **什么时候用**：做出架构决定、改变公共 API、交付功能，或未来维护者需要理解“为什么”。
- **它会做什么**：优先遵循仓库现有文档约定，判断是否值得 ADR，并维护 API 文档、README、Gotchas 和 Changelog。
- **你可以这样说**：`@documentation-and-adrs 记录订单审计选择事件溯源的决定，包含替代方案、代价和适用边界。`
- **你会得到**：结构清晰、记录原因和后果、可被未来人类与 Agent 发现的文档。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/documentation-and-adrs) · [官方订单 ADR 案例](https://github.com/addyosmani/agent-skills/blob/7829ffd90d973b6325f5f12f1b1226dcace74443/evals/fixtures/documentation-and-adrs/decision-context.md)

### `observability-and-instrumentation`

- **什么时候用**：功能要运行在生产环境，或线上出问题时现有日志无法回答发生了什么。
- **它会做什么**：从值班人员要回答的问题倒推 Logs、Metrics、Traces 和 Alerts，采用结构化字段并避免记录敏感数据。
- **你可以这样说**：`@observability-and-instrumentation 为支付重试设计观测方案，能识别重复扣款和网关耗尽，但不能记录卡号与邮箱。`
- **你会得到**：事件与字段设计、RED/USE 指标、Trace 关联、症状型告警和 Dashboard 需求。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/observability-and-instrumentation) · [官方支付重试案例](https://github.com/addyosmani/agent-skills/blob/7829ffd90d973b6325f5f12f1b1226dcace74443/evals/fixtures/observability-and-instrumentation/operations.md)

### `shipping-and-launch`

- **什么时候用**：准备生产发布，需要 Go/No-Go、分阶段上线、监控或回滚计划。
- **它会做什么**：逐项验证测试、Smoke、迁移、Feature Flag、可观测性、支持准备和回滚所有权；关键门禁失败时不会用发布日期覆盖风险。
- **你可以这样说**：`@shipping-and-launch 评估明天的 Checkout v2 发布；端到端支付测试仍失败，且还没有重复扣款告警。`
- **你会得到**：有证据的 Go/No-Go 决定、阻塞项、发布 Runbook、监控与回滚步骤。

[查看官方源码](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/shipping-and-launch) · [官方 Checkout 发布案例](https://github.com/addyosmani/agent-skills/blob/7829ffd90d973b6325f5f12f1b1226dcace74443/evals/fixtures/shipping-and-launch/launch-status.md)

## 最小采用组合

第一次使用不必全装。可以从下面三套开始：

```text
普通功能：spec-driven-development -> planning-and-task-breakdown
        -> incremental-implementation + test-driven-development
        -> code-review-and-quality

线上故障：debugging-and-error-recovery -> test-driven-development
        -> observability-and-instrumentation

生产发布：security-and-hardening -> code-review-and-quality
        -> shipping-and-launch
```
