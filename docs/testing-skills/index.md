# 测试与质量 Skills

质量不是开发结束后的一个关卡。好的测试 Skill 帮团队更早把行为讲清楚，选择匹配风险的检查，并且只在拿到新的证据后宣布完成。

本页面向测试工程师、质量负责人和所有会提交功能的研发同学。

## 从什么开始

| 场景 | 推荐 Skill | 它带来的约束 |
| --- | --- | --- |
| 先定义行为再写实现 | `test-driven-development` | Red → Green → Refactor 的小步反馈。 |
| Web 产品的分层测试 | `webapp-testing` | 区分单元、集成和端到端验证。 |
| 真实浏览器自动化 | `playwright-cli` | 控制浏览器、记录操作、检查页面状态。 |
| 准备说“已经完成” | `verification-before-completion` | 要求重新运行实际验证，而非引用旧结果。 |
| Java 或 Vue 专项测试 | `java-junit`、`vue-testing-best-practices` | 贴合语言和框架的测试边界。 |

## 推荐路径

```text
验收标准 / 接口契约
  -> test-driven-development
  -> 单元与集成检查
  -> webapp-testing 或 playwright-cli
  -> verification-before-completion
```

## 逐个怎么用

### `test-driven-development`

**适用时机**：规则复杂、容易回归，或团队需要先对“正确行为”达成共识时。

```text
使用 test-driven-development 实现“重复邀请不重复发信”。
先为可观察行为写一个失败的测试，说明输入、期望状态和副作用；
每轮只做让该测试通过的最小改动，再运行相关测试并重构。不要一开始重写整个模块。
```

**交付物**：一条可回放的行为链，而不是仅仅“测试覆盖率更高”。来源为 Obra 的 [test-driven-development](https://github.com/obra/superpowers/tree/44c9b2d6e889982ac18c27d05a19fefe335194e1/skills/test-driven-development)。

### `webapp-testing`

**适用时机**：需要决定这次改动该用单测、接口集成测试还是浏览器端到端测试时。

```text
使用 webapp-testing，为成员邀请流程制定测试策略。
按风险划分：权限与幂等性放在哪里验证，表单错误和 loading 状态放在哪里验证，
哪些关键路径必须在真实浏览器运行。给出最少但足够的测试清单和测试数据准备方式。
```

它来自 Anthropic 的 [webapp-testing](https://github.com/anthropics/skills/tree/b29e7cf65e5cb78a5ac33d582270551bc74a14eb/skills/webapp-testing)。

### `playwright-cli`

**适用时机**：要看真实页面、复现交互问题、验证跨页流程或保存可复查的浏览器证据时。

```text
使用 playwright-cli 验证邀请流程：以管理员身份打开页面、填写邮箱、选择角色、提交；
确认成功反馈和列表更新。再以普通成员身份重复操作，确认权限拒绝信息清晰且页面不崩坏。
记录失败时的页面状态、控制台异常和可复现步骤。
```

这是 Microsoft 的 [playwright-cli](https://github.com/microsoft/playwright-cli/tree/eee5a185c98e6b04d88f580d45a854e9692ab50b/skills/playwright-cli)。它适合验证，不替代稳定的项目测试框架与 CI 配置。

### `verification-before-completion`

**适用时机**：准备合并、交付或告诉他人“已修复”之前。

```text
使用 verification-before-completion。根据这次改动和风险，列出必须重新运行的验证；
实际执行后，报告每项命令、结果和仍然存在的限制。没有新输出就不要声称完成。
```

这个简单约束非常重要：它把“我觉得没问题”变成可以让团队复查的证据。来源为 Obra 的 [verification-before-completion](https://github.com/obra/superpowers/tree/44c9b2d6e889982ac18c27d05a19fefe335194e1/skills/verification-before-completion)。

## 把测试提前交接

产品和设计交接时，测试应能拿到成功标准、权限、状态和失败路径；后端交接时，测试应能拿到契约、错误语义和幂等规则。测试不是最后“点点页面”，而是在这些定义尚可调整时帮助团队发现误解。

## 继续深入

- [前端工程 Skills](../frontend-skills/)
- [后端与平台 Skills](../backend-skills/)
- [Java Skills：JUnit](../java-skills/skill-reference.md)
- [Addy Agent Skills：Verify & Review](../addy-agent-skills/verify-and-review.md)
