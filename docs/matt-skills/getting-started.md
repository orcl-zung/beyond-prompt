# 安装与项目配置

Matt Skills 可以通过 skills.sh 安装到多种 Coding Agent。安装只是第一步；工程 Skills 还需要知道项目的 Issue Tracker、Triage 标签和领域文档布局。

## 安装

Claude Code 可安装官方 Marketplace 中的完整只读插件，并自动接收更新：

```text
claude plugins install mattpocock-skills
```

Codex 和其他支持 Agent Skills 的工具可使用开放 CLI，选择需要的 Skills，并保留本地修改能力：

```bash
npx skills@latest add mattpocock/skills
```

交互式选择需要的 Skills 和目标 Agent。首次使用时务必选择 `setup-matt-pocock-skills`。

不建议一开始安装仓库中的所有目录。官方仓库还包含 deprecated、in-progress、misc 和 personal Skills；先从 README 列出的 Engineering 与 Productivity 主集开始。

## 每个仓库运行一次 Setup

安装后，在目标代码库调用：

```text
/setup-matt-pocock-skills
```

它先探索现有仓库，再与用户逐项确认三类配置。

### Issue Tracker

Tickets 可以位于 GitHub、GitLab、本地 Markdown 或自定义系统。`to-spec`、`to-tickets`、`wayfinder`、`triage` 和 `code-review` 需要知道如何读取与写入。

对于 GitHub 或 GitLab，还会确认外部 PR 是否也属于 Triage 请求面。

### Triage 标签

技能使用五个规范角色：

| 角色 | 含义 |
| --- | --- |
| `needs-triage` | 等待维护者评估 |
| `needs-info` | 等待报告者补充信息 |
| `ready-for-agent` | 信息完整，Agent 可独立接手 |
| `ready-for-human` | 需要人工权限或判断 |
| `wontfix` | 不会执行 |

项目可以使用不同标签名，Setup 会记录映射，而不是创建重复词汇。

### Domain Docs

单上下文项目通常使用根目录 `CONTEXT.md` 与 `docs/adr/`。多上下文项目使用 `CONTEXT-MAP.md` 指向各自的词汇表与 ADR。

## Setup 产生什么

它会在已有的 `CLAUDE.md` 或 `AGENTS.md` 中加入 `## Agent skills` 配置，并创建：

```text
docs/agents/
  issue-tracker.md
  triage-labels.md
  domain.md
```

这些文件是下游 Skills 的项目级适配层。以后切换 Tracker 或领域布局时可以直接编辑；不必每次重新运行 Setup。

## 安装后的最小组合

想先体验主流程，可以选择：

```text
setup-matt-pocock-skills
ask-matt
grill-with-docs
implement
tdd
code-review
```

随后按项目需要加入 `to-spec`、`to-tickets`、`wayfinder`、`triage`、`diagnosing-bugs` 和架构 Skills。

安装完成后，可从 [22 个 Skills 逐项使用手册](./skill-reference.md) 直接复制调用示例。

下一章先理解一个关键区别：[两种 Skill 调用模型](./invocation-model.md)。
