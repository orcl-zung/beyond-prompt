# 运行原则与技能路由

`using-agent-skills` 是整套系统的元技能。它不负责某个具体工程任务，而是判断当前阶段、选择适用 Skills，并规定所有流程都必须遵守的行为约束。

## 路由逻辑

```text
任务到达
  ├─ 不确定真正想要什么 -> interview-me
  ├─ 有粗略想法需比较方向 -> idea-refine
  ├─ 新项目或重要变更 -> spec-driven-development
  ├─ 已有规格需拆任务 -> planning-and-task-breakdown
  ├─ 正在实现 -> incremental-implementation
  │   ├─ UI -> frontend-ui-engineering
  │   ├─ API -> api-and-interface-design
  │   ├─ 上下文不足 -> context-engineering
  │   └─ 依赖框架文档 -> source-driven-development
  ├─ 行为异常 -> debugging-and-error-recovery
  ├─ 准备合并 -> code-review-and-quality
  └─ 准备上线 -> shipping-and-launch
```

多个 Skills 可以同时适用。它们不是互斥模式，而是主流程与专业约束的组合。例如，开发一个设置页面可以同时使用：

```text
incremental-implementation
  + frontend-ui-engineering
  + test-driven-development
  + browser-testing-with-devtools
```

## 六个全局行为

### 1. 显式暴露假设

非平凡实现开始前，应说明对需求、架构和范围的假设。错误假设越早暴露，返工成本越低。

```text
ASSUMPTIONS I'M MAKING:
1. 这个功能只服务已登录用户。
2. 不修改现有数据库 Schema。
3. 本次不包含移动端原生客户端。
请现在纠正，否则我将据此继续。
```

### 2. 主动管理困惑

规格、代码和用户描述冲突时，停止猜测，准确指出冲突并请求裁决。沉默地挑一个解释继续做，是最昂贵的“效率”。

### 3. 必要时提出异议

Agent 不应为了顺从而实现明显有害的方案。它需要说明具体代价、提供替代方案，并在用户了解权衡后尊重最终决定。

### 4. 主动约束复杂度

完成前追问：能否用更少代码？抽象是否真正减少认知负担？一个资深工程师会不会问“为什么不直接做？”

### 5. 保持范围纪律

只修改任务需要的内容。不顺手清理相邻模块、不删除不理解的代码、不添加“看起来有用”的功能。

### 6. 验证，不假定

每个 Skill 都有局部 Verification；所有改动还必须通过项目级 Definition of Done。任务完成必须由测试、构建、运行时数据或其他证据支持。

## Skills 是工作流，不是建议

一旦选择 Skill，就应按顺序执行，不自行略过不喜欢的步骤。如果流程不适用，应说明原因并选择另一个 Skill，而不是保留名称、放弃约束。

## 何时从规格开始

当任务非平凡且没有规格时，默认入口是 `spec-driven-development`。但单行修复、拼写更正或完全自包含的小改动无需制造文档负担。

关键判断不是代码行数，而是不确定性：如果实现者对目标、边界或完成标准有不同解释，就值得先规格化。

下一章进入生命周期的第一个阶段：[Define](./define.md)。
