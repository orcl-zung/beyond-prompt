# 后端与平台 Skills

后端 Skill 不应只负责“生成接口”。更可靠的使用方式是先把契约与边界定清，再验证安全、可观测性和失败路径；语言和框架只是这套纪律的实现细节。

本页适合后端开发、平台工程、技术负责人，以及需要和后端协作的产品与测试同学。

## 从什么开始

| 场景 | 推荐 Skill | 先解决什么 |
| --- | --- | --- |
| 新接口、服务边界或集成协议 | `api-and-interface-design` | 输入输出、错误语义、兼容性、幂等与演进方式。 |
| 依赖框架、SDK 或外部规范 | `source-driven-development` | 让当前官方来源而非模型记忆决定实现。 |
| 登录、权限、敏感数据或外部输入 | `security-and-hardening` | 威胁面、授权边界、验证和安全默认值。 |
| 排查线上行为、准备发布 | `observability-and-instrumentation` | 指标、日志、追踪、告警和可复盘证据。 |
| Java / Spring Boot 服务 | `java-springboot`、`java-junit` | 把以上原则落实到现有 Java 项目。 |

## 推荐路径

```text
产品与设计交接
  -> api-and-interface-design
  -> source-driven-development
  -> 实现与单元测试
  -> security-and-hardening
  -> observability-and-instrumentation
```

## 逐个怎么用

### `api-and-interface-design`

**适用时机**：接口还没开始写，或多个调用方已经对同一个字段、错误和状态有不同理解时。

```text
使用 api-and-interface-design，为“邀请成员”设计服务端契约。
调用方有 Web 和移动端；要求重复提交不创建重复邀请，管理员和普通成员权限不同，
邀请邮件可能发送失败。请定义资源模型、请求与响应、状态机、错误码、幂等策略、
版本演进和验收用例。不要先写 Controller 代码。
```

**交付物**：可评审的协议与行为表，让前端和测试都能据此工作。该 Skill 位于 Addy 的 [agent-skills](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills/api-and-interface-design)；更多示例见 [Addy Skills 手册](../addy-agent-skills/skill-reference.md)。

### `source-driven-development`

**适用时机**：涉及库版本、框架能力、云服务配置或第三方协议时。

```text
使用 source-driven-development。我们要在当前版本的 Spring Boot 中接入 OAuth 登录。
先读取项目的构建文件并查询对应版本的官方文档；列出关键设计决定及其来源，
再提出最小实现方案。不要根据旧教程猜配置属性。
```

**交付物**：带来源的实现决定和版本边界，尤其适合易变化的依赖。

### `security-and-hardening`

**适用时机**：新增身份、权限、上传、Webhook、支付、导出或处理不可信输入时。

```text
使用 security-and-hardening 审查这个邀请 API 的设计和改动。
从认证、授权、租户隔离、输入验证、速率限制、敏感信息、审计和失败策略检查；
按风险给出最小修复，并指出需要补哪些自动化测试。
```

**交付物**：按风险优先级排序的安全改动，而不是只有一份泛泛的安全清单。

### `observability-and-instrumentation`

**适用时机**：服务可以运行，却无法回答“谁失败了、失败在哪里、影响多大”时。

```text
使用 observability-and-instrumentation，为邀请创建和邮件投递补齐可观测性。
定义成功率、延迟和积压指标；列出结构化日志字段和 trace 关联方式；
避免记录邮箱正文或 token 等敏感数据，并给出故障排查步骤。
```

## Java 团队的下一步

Java / Spring Boot 项目可继续使用 [Java Skills](../java-skills/)：先以 `java-springboot` 贴合现有分层与配置，再用 `java-junit` 保护行为；接口契约和线上证据仍由本页的通用流程约束。

## 继续深入

- [Java Skills](../java-skills/)
- [测试与质量 Skills](../testing-skills/)
- [研发协作 Skills](../team-workflow/)
