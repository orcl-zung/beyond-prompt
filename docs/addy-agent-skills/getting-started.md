# 安装与 Skill 结构

Addy Agent Skills 的核心是普通 Markdown 文件，因此可以跨 Agent 使用。不同工具的差异主要在安装位置、自动发现能力和命令入口。

## 通用安装方式

官方推荐使用开放的 Skills CLI：

```bash
# 安装全部 Skills
npx skills add addyosmani/agent-skills

# 先查看可安装列表
npx skills add addyosmani/agent-skills --list

# 只安装一个 Skill
npx skills add addyosmani/agent-skills --skill code-review-and-quality
```

该方式适合 Codex、Claude Code、Cursor、Copilot、Cline 等支持 Agent Skills 的工具。具体落盘位置由 CLI 根据当前 Agent 决定。

## Claude Code 插件安装

Claude Code 可以使用官方仓库提供的插件清单：

```text
/plugin marketplace add addyosmani/agent-skills
/plugin install agent-skills@addy-agent-skills
```

插件不仅包含 Skills，还提供 `/spec`、`/plan`、`/build`、`/test`、`/review`、`/webperf`、`/code-simplify` 和 `/ship` 等生命周期命令。

## Codex 与其他 Agent

Codex CLI `0.122+` 可以直接安装官方插件：

```bash
codex plugin marketplace add addyosmani/agent-skills
```

安装后在对话中输入 `@spec-driven-development` 这类名称直接调用，也可以描述任务，让 Codex 根据 Skill 的触发描述自动选择。

对可以读取 `SKILL.md` 的 Agent，Skills 本质上是可移植指令包。安装后应确认：

1. Agent 能看到每个 Skill 的名称与描述。
2. 当任务匹配描述时，Agent 会先读取完整 `SKILL.md`。
3. Supporting References 只在流程需要时加载。
4. 项目规则不会被第三方 Skill 无意覆盖。

## 一个 Skill 的目录

```text
skills/
  skill-name/
    SKILL.md
    supporting-file.md   # 可选，按需加载
```

`SKILL.md` 使用 YAML Frontmatter 声明身份和触发条件：

```md
---
name: skill-name
description: Guides agents through a workflow. Use when specific conditions apply.
---
```

`name` 使用小写连字符，并与目录名相同。`description` 同时回答“做什么”和“什么时候用”，因为 Agent 通常先根据它判断是否需要加载正文。

## 推荐正文结构

```text
Overview          为什么存在
When to Use       触发条件
Process           必须执行的步骤
Rationalizations  常见跳步借口及反驳
Red Flags         流程正在失效的信号
Verification      完成所需的证据
```

### Process，不是 Prose

参考资料可以只解释概念，Skill 必须改变 Agent 的行为。比如“测试很重要”是观点；“先观察测试失败，再写最小实现，最后重构”才是流程。

### Anti-rationalization

Agent 往往知道规则，却会以“改动很小”“稍后再补”“这段很明显”为理由跳过。反合理化表提前列出这些借口及其反驳，让质量门槛在执行压力下仍然有效。

### Progressive Disclosure

入口文件只保留工作流本身。长示例和清单放进 Supporting References，等流程走到对应步骤再读取，避免一次塞满上下文。

## 安装后快速检查

可以给 Agent 一个明确请求，例如：

```text
请审查当前改动，重点检查正确性、安全性和性能，并给出可验证的发现。
```

预期行为是自动选择 `code-review-and-quality`，按五轴审查，而不是直接给一段泛化建议。

接下来可以打开 [24 个 Skills 逐项使用手册](./skill-reference.md) 复制具体调用示例，或继续理解所有 Skills 共享的[运行原则与路由方式](./operating-model.md)。
