# Java Skills 总览

这一组内容面向使用 Java 构建长期服务的人：它不追求“一键生成一个完整项目”，而是让 Agent 在 Spring Boot 实现、测试、文档、MCP 集成和 Native Image 优化时遵守更稳定的工程约束。

本文优先选择 GitHub 官方维护的 `github/awesome-copilot` Java Skills，并以仓库 commit [`336af71`](https://github.com/github/awesome-copilot/tree/336af71f1b7d2e6e15a8a986ba79ca031a40549b)（2026-07-31）为来源快照。

> 官方项目：[github/awesome-copilot](https://github.com/github/awesome-copilot)

## 为什么只选这五个

Skills 市场里还有“生成 Spring Boot 项目”的模板，但模板通常固定了 JDK、Spring Boot 和依赖版本。它们适合一次性演示，不适合直接变成长期项目的默认值。

这里保留的是能和仓库现状结合、并要求运行验证的 Skills：

| 场景 | 推荐 Skill | 它解决的问题 |
| --- | --- | --- |
| 普通 Spring Boot 功能 | `java-springboot` | 在分层、配置、事务、DTO、异常处理和安全上给出默认工程纪律。 |
| 单元与数据驱动测试 | `java-junit` | 让测试覆盖行为，并使用 JUnit 5 的参数化测试和异常断言。 |
| API 与公共类型文档 | `java-docs` | 统一 Javadoc 的摘要、参数、异常和继承文档写法。 |
| 把 Java 服务接到 Agent | `java-mcp-server-generator` | 建立 Tool、Resource、Prompt 和测试的 MCP Server 骨架。 |
| 缩短启动与降低部署体积 | `java-add-graalvm-native-image-support` | 识别框架和构建工具，迭代解决 Native Image 编译问题。 |

## 两条常用路径

### 一个 Spring Boot 功能

```text
java-springboot
  -> java-junit
  -> java-docs
```

先按现有项目的模块、DTO、事务和配置约定设计功能；再用 JUnit 5 为真实行为建立保护；最后补上公共 API 与异常语义的 Javadoc。

### 一个 Java MCP Server

```text
java-mcp-server-generator
  -> java-junit
  -> java-docs
  -> （确有启动/镜像需求时）java-add-graalvm-native-image-support
```

MCP Skill 会给出工程分层，但其中示例依赖版本只是起点。真正落地时，仍应查询 MCP Java SDK、Spring Boot 和 GraalVM 的当前官方文档，不要照抄历史版本号。

## 使用方式

先把对应 Skill 安装到你使用的 Agent。支持 `skills` CLI 的环境可采用下面的形式：

```bash
npx skills add github/awesome-copilot --skill java-springboot
```

安装后，在 Claude Code 中可使用 `/java-springboot`；在没有斜杠命令的 Agent 中，直接说“使用 `java-springboot`，先阅读当前项目的 `pom.xml` 或 `build.gradle` 后再实现”。

## 阅读路径

1. [5 个 Java Skills 逐项使用](./skill-reference.md)
2. 需要通用工程流程时，配合 [Addy Agent Skills](../addy-agent-skills/) 的需求、验证和发布章节。
3. 涉及框架 API 或版本升级时，先使用 `source-driven-development`，让当前官方文档决定最终实现。
