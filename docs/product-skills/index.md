# 产品与需求 Skills

产品工作不只是把一句需求扩写成 PRD。更关键的是：看清用户问题、写出可验证的结果，并让设计、研发和测试拿到同一份边界与证据。

这一页把 Skills 当作产品搭档，而不是自动写文档机。它们帮助你提出更好的问题、形成有取舍的方案，并把结论交给下一位协作者。

## 从什么开始

| 你现在处于什么情况 | 先用什么 | 期待得到什么 |
| --- | --- | --- |
| 只有一个想法或投诉 | `product-brainstorming` | 问题框架、备选方案、假设和验证方式。 |
| 需求很模糊，需要访谈式澄清 | `interview-me` | 一组按影响排序的问题和可确认的约束。 |
| 已有零散素材，需要提炼方向 | `idea-refine` | 用户、痛点、价值主张、风险与下一步实验。 |
| 可以进入设计和研发 | `spec-driven-development` | 范围、非目标、验收标准、风险和实现阶段。 |
| 方案复杂、意见很多 | `grill-with-docs` | 对关键假设的反证与需要补证据的地方。 |

## 推荐路径

```text
产品信号 / 用户反馈
  -> product-brainstorming
  -> interview-me 或 idea-refine
  -> spec-driven-development
  -> 交给 UI/UX、研发与测试共同确认
```

## 逐个怎么用

### `product-brainstorming`

**适用时机**：还不确定该解决什么，或有多个方案但没有判断依据时。

**交给 Agent 的上下文**：用户是谁、发生在什么场景、当前证据、业务限制，以及你不想先入为主的部分。

```text
使用 product-brainstorming。我们的用户在创建项目后，常常不知道下一步该做什么。
已有证据：首次创建后的 7 天留存低于预期；访谈里有人提到“空白页让我停住”。
请先不要写 PRD。提出需要澄清的问题，给出 3 个方向、各自的假设、最小验证方式和不建议做的原因。
```

**交付物**：问题陈述、机会点、方案取舍、关键假设和验证计划。它来自 Anthropic 的 [product-brainstorming](https://github.com/anthropics/knowledge-work-plugins/tree/9819607cbabff6518224bc412972a8b12f1628b0/product-management/skills/product-brainstorming)。

### `interview-me` 与 `idea-refine`

**适用时机**：前者适合把脑中的需求问清楚；后者适合把会议纪要、竞品截图说明或用户反馈整理成一个方向。

```text
使用 interview-me，像产品评审前的同事一样追问我。
目标是为“团队成员邀请”定义 MVP。每次只问一个最高影响的问题；
优先暴露目标用户、权限边界、成功指标、异常流程和不做什么。
```

之后可说：

```text
使用 idea-refine。根据上面的回答，输出一页产品摘要：问题、目标用户、核心流程、
成功指标、已知风险、待验证假设，以及给设计和研发的待确认问题。
```

这两个 Skill 已在 [Addy Agent Skills](../addy-agent-skills/skill-reference.md) 中有更完整的使用说明。

### `spec-driven-development`

**适用时机**：团队已同意要做什么，需要让“完成”变得一致时。

```text
使用 spec-driven-development，把这份产品摘要变成一个可交接的规格。
明确范围和非目标，列出主流程、空状态、权限和失败路径；
把验收标准写成产品、设计、开发、测试都能检查的行为，不要先假定具体技术方案。
```

**交付物**：可以评审的规格，而非一段看似完整的长文。研发接手后，再用实现计划决定模块与任务。

## 给下一角色的交接包

在交给 UI/UX、开发或测试前，至少附上：

1. 用户问题和成功指标。
2. 明确范围与非目标。
3. 主流程、异常与权限边界。
4. 还没有答案的假设，以及谁来验证它。

这样 Agent 生成的界面、接口或测试才是在回应真实问题，而不只是扩写需求文字。

## 继续深入

- [UI/UX 设计 Skills](../design-skills/)
- [研发协作 Skills](../team-workflow/)
- [Addy Agent Skills：Define](../addy-agent-skills/define.md)
- [Matt Skills：对齐与领域语言](../matt-skills/clarify-and-model.md)
