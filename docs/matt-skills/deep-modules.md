# 深模块与代码库健康

Agent 加快写代码的同时，也会加速软件熵。Matt Skills 用 `codebase-design` 提供设计词汇，再由 `improve-codebase-architecture` 主动寻找值得加深的区域。

## 深模块词汇

| 术语 | 含义 |
| --- | --- |
| Module | 拥有 Interface 与 Implementation 的任意代码单元 |
| Interface | 调用者正确使用模块必须知道的一切 |
| Depth | 小 Interface 后面承载大量行为的程度 |
| Seam | 可以替换行为而无需修改调用点的位置 |
| Adapter | 在某个 Seam 上满足 Interface 的实现 |
| Leverage | 调用者从模块获得的能力复用 |
| Locality | 变化、缺陷和知识集中在一处 |

深模块不是“代码很多的类”。Depth 是 Interface 的属性：调用者学习得少，却能获得很多可靠行为。

## 三个设计测试

### 删除测试

想象删除这个模块。如果复杂性也消失，它可能只是转发层；如果规则重新散落到多个调用者，它正在提供价值。

### 测试面测试

Interface 应同时是调用面与测试面。如果测试必须越过公开 Interface 观察内部状态，模块形状可能不对。

### Adapter 测试

一个 Adapter 常常只是假设性抽象；出现两个真实 Adapter 时，Seam 才被变化证明。

## `improve-codebase-architecture` 做什么

它不是直接重构，而是一次架构调查：

1. 读取领域词汇、ADR 和代码结构。
2. 找出浅模块、重复规则、错误 Seam 和难测试区域。
3. 生成带 Before / After 图的 HTML 报告。
4. 为每个候选解释文件、问题、方案、Locality、Leverage 与测试收益。
5. 标记推荐强度，并让用户选择一个候选。
6. 选中后使用 `grilling` 与 `domain-modeling` 共同设计。

报告只提出“哪里值得深入”，不提前发明完整 Interface。真正设计发生在用户选中候选之后。

## 与主流程的关系

```text
定期架构扫描
  -> 选择 deepening opportunity
  -> grill-with-docs
  -> 必要时设计多个 Interface 方案
  -> to-prd / to-issues
  -> implement
```

如果候选与现有 ADR 冲突，只有当真实摩擦足以重新讨论决定时才提出，不把已拒绝方向每次重新包装。

## 适合运行的信号

- 同一业务规则散落在多个调用者。
- 改一个概念需要跨大量文件同步修改。
- 测试只能 Mock 内部实现，找不到稳定 Seam。
- Bug 修复无法写出可信回归测试。
- Agent 经常需要读取整个子系统才能改一处行为。

有些设计问题无法靠讨论决定，下一章用[原型与研究](./prototyping.md)获得证据。
