# Java Skills 逐项使用手册

以下五个 Skills 均来自 GitHub 官方 [`awesome-copilot`](https://github.com/github/awesome-copilot) 仓库的 [`336af71`](https://github.com/github/awesome-copilot/tree/336af71f1b7d2e6e15a8a986ba79ca031a40549b) 快照。它们提供工程约束，不应覆盖你项目已经验证过的架构、依赖版本或运行命令。

## Spring Boot 实现

### `java-springboot`

- **什么时候用**：新增或审查 Spring Boot 的 Controller、Service、Repository、配置或安全相关代码。
- **它会做什么**：要求按业务域组织包；使用构造器注入、DTO、Bean Validation、全局异常处理、`@Transactional`、Spring Data JPA 和参数化日志。
- **你可以这样说**：`使用 java-springboot 为订单取消增加 REST API。先阅读现有模块、错误响应和测试约定；不要把 JPA Entity 直接返回给客户端。`
- **你会得到**：与现有项目风格一致的分层改动、输入校验、错误语义和可测试的依赖边界。
- **注意**：Skill 中提到 `@SpringBootTest`、测试切片和 Testcontainers，但不能替代对当前 Spring Boot 版本、数据库和安全模型的核对。

[查看官方源码](https://github.com/github/awesome-copilot/tree/336af71f1b7d2e6e15a8a986ba79ca031a40549b/skills/java-springboot)

## JUnit 5 测试

### `java-junit`

- **什么时候用**：新增业务逻辑、修复 Bug，或需要把相近输入整理成参数化测试。
- **它会做什么**：要求测试独立、命名描述行为，并使用 Arrange–Act–Assert、`assertThrows`、`assertAll`、`@Nested`、Mockito 与 `@ParameterizedTest`。
- **你可以这样说**：`使用 java-junit 为优惠券金额计算补测试：空券、百分比券、固定金额券和金额不能小于零。优先用参数化测试表达规则。`
- **你会得到**：位于 `src/test/java` 的行为测试、清晰失败信息和适合重构的测试结构。
- **注意**：不要为了满足覆盖率把多个不相关行为塞进同一个参数化测试；数据库、消息队列等集成行为应按项目现有 Testcontainers 或测试切片策略处理。

[查看官方源码](https://github.com/github/awesome-copilot/tree/336af71f1b7d2e6e15a8a986ba79ca031a40549b/skills/java-junit)

## Javadoc

### `java-docs`

- **什么时候用**：公开 API、可被继承的类型、复杂的领域模型，或多人维护的库需要说明调用语义。
- **它会做什么**：要求摘要句以句号结束，并规范使用 `@param`、`@return`、`@throws`、`@see`、`@since`、`{@code}` 和 `{@inheritDoc}`。
- **你可以这样说**：`使用 java-docs 为 PaymentAuthorizationService 的公共方法补 Javadoc，说明幂等键、失败异常和重试语义；不要为显而易见的私有 getter 添加噪声。`
- **你会得到**：把前置条件、返回值和异常说清楚的 API 文档，而不是逐行复述实现。
- **注意**：公共文档是契约的一部分。改变异常、事务或兼容性时，应同时更新测试和文档。

[查看官方源码](https://github.com/github/awesome-copilot/tree/336af71f1b7d2e6e15a8a986ba79ca031a40549b/skills/java-docs)

## Java MCP Server

### `java-mcp-server-generator`

- **什么时候用**：需要把既有 Java 领域能力暴露为 MCP Tool、Resource 或 Prompt。
- **它会做什么**：生成 Maven/Gradle 项目结构，将 Tool、Resource、Prompt 的定义与处理逻辑分开，并配套日志与 JUnit 测试位置。
- **你可以这样说**：`使用 java-mcp-server-generator 为库存系统创建 MCP Server，先提供 product://{sku} Resource 和 reserve_stock Tool；库存不足必须返回可被 Agent 理解的错误。`
- **你会得到**：可运行的 Java MCP Server 骨架、处理器边界、测试起点和客户端接入说明。
- **注意**：上游示例包含固定的 MCP SDK 与构建插件版本。生成前先读取当前 [MCP Java SDK](https://github.com/modelcontextprotocol/java-sdk) 的官方文档并对齐项目的 JDK 与依赖管理策略。

[查看官方源码](https://github.com/github/awesome-copilot/tree/336af71f1b7d2e6e15a8a986ba79ca031a40549b/skills/java-mcp-server-generator)

## GraalVM Native Image

### `java-add-graalvm-native-image-support`

- **什么时候用**：Java 服务的冷启动、内存占用或容器镜像体积成为明确问题，并且团队决定评估 Native Image。
- **它会做什么**：检测 Maven/Gradle 与 Spring Boot、Quarkus、Micronaut；配置 Native Build Tools，构建并迭代处理反射、资源、JNI 和动态代理问题。
- **你可以这样说**：`使用 java-add-graalvm-native-image-support 为这个 Spring Boot 服务建立 native 构建。先跑现有测试和 JVM 基线；遇到反射错误时以最小 RuntimeHints 修复，并记录启动时间与镜像大小变化。`
- **你会得到**：Native Image 配置、构建命令、已定位的兼容性问题，以及可比较的构建和运行结果。
- **注意**：这是一项性能与部署决策，不是默认优化。必须比较 JVM 与 native 的启动时间、内存、构建时间、调试体验和云平台限制。

[查看官方源码](https://github.com/github/awesome-copilot/tree/336af71f1b7d2e6e15a8a986ba79ca031a40549b/skills/java-add-graalvm-native-image-support)
