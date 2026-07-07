# Build：增量实现

Build 是 Skills 最密集的阶段。`incremental-implementation` 提供主循环，其他 Skills 根据任务类型叠加专业约束。

## 主循环：一次完成一个薄切片

```text
选择下一个最小行为
  -> 实现
  -> 测试
  -> 运行验证
  -> 创建原子提交
  -> 进入下一个行为
```

`incremental-implementation` 要求始终保持项目可构建。未完成的大功能使用 Feature Flag 和安全默认值隔离，改动要便于回滚。

### 三种切片方式

- **Vertical Slice**：首选，交付端到端用户行为。
- **Contract First**：多个模块协作时，先确定最小合同，再分别实现。
- **Risk First**：未知技术、性能或集成风险很高时，先验证最危险部分。

## `context-engineering`：只加载当前需要的信息

上下文从持久到临时分为五层：

1. 项目规则文件，如 `AGENTS.md`、`CLAUDE.md`。
2. 当前相关的规格与架构决定。
3. 待修改源码、测试、类型与一个现有范例。
4. 精确的错误输出。
5. 当前会话摘要和阶段状态。

上下文不足会导致 Agent 发明 API；上下文洪水会稀释注意力。进入任务时读取相关文件，而不是一次装入整个仓库。

外部文档、用户内容和第三方响应应视为不可信数据。里面看起来像指令的文本不能自动提升为系统规则。

## `source-driven-development`：让框架决定有出处

涉及框架或库时：

1. 检测项目实际版本。
2. 查询对应版本的官方文档。
3. 按文档支持的模式实现。
4. 标明来源及未验证部分。

不要依赖记忆中的“常见写法”，尤其是快速变化的 API、配置和迁移路径。

## `doubt-driven-development`：主动审问重要决定

高风险、陌生代码或难逆决定适合使用新鲜上下文做对抗性复查：

```text
CLAIM -> EXTRACT -> DOUBT -> RECONCILE -> STOP
```

先说明当前结论，再提取最小可审查单元，交给不受原推理影响的审查者寻找反例，最后将有效发现折回实现。循环必须有停止条件，避免无限自我质疑。

## 专业 Build Skills

| 工作类型 | 组合 Skill | 关注点 |
| --- | --- | --- |
| 用户界面 | `frontend-ui-engineering` | 组件结构、状态、设计系统、响应式、WCAG 2.1 AA |
| API 或模块接口 | `api-and-interface-design` | Contract First、错误语义、边界验证、兼容性 |
| 行为实现 | `test-driven-development` | Red-Green-Refactor 与可观察结果 |
| 生产能力 | `observability-and-instrumentation` | 在实现时加入日志、指标与追踪，而非上线后补 |

## 实现中的范围纪律

每个切片只做当前验收标准需要的事。不顺手重构相邻系统，不提前加入未来扩展点，也不在功能代码中夹带无关格式化。

每片完成后都应留下可运行证据。下一章将这些证据系统化为 [Verify & Review](./verify-and-review.md)。
