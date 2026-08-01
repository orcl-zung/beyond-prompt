# Frontend Skills 总览

前端 Skills 不该只让 Agent “把页面做出来”。更有价值的组合是：先确认页面为什么长成这样，再按框架的正确边界实现，最后在真实浏览器里验证交互、性能与可访问性。

本章覆盖 Vue、React 与 Next.js，并参考以下上游快照：

- Anthropic [`skills@b29e7cf`](https://github.com/anthropics/skills/tree/b29e7cf65e5cb78a5ac33d582270551bc74a14eb)
- Vercel [`agent-skills@7c180d9`](https://github.com/vercel-labs/agent-skills/tree/7c180d9044c9ae2b442b567aad4e42a28dd5ed62)
- Anthony Fu [`skills@a74f281`](https://github.com/antfu/skills/tree/a74f281a27dadc02397bc1a174b0f2c97531b6ae)
- Next.js [`canary@ccd47cf`](https://github.com/vercel/next.js/tree/ccd47cfe53c7fef5e6b7ad472a3a020605a23608/skills)

## 按技术栈选择

| 你正在做什么 | 推荐 Skill | 先解决什么 |
| --- | --- | --- |
| 从零设计或重塑一个界面 | `frontend-design` | 找到与产品、用户和内容相符的视觉方向。 |
| 审查已经存在的 UI | `web-design-guidelines` | 检查布局、键盘可达性、状态、文案与无障碍问题。 |
| 编写 Vue 3 功能 | `vue`、`vue-best-practices` | 组件边界、Composition API、数据流和性能。 |
| 测试 Vue 应用 | `vue-testing-best-practices` | Vitest、Vue Test Utils、异步组件、Pinia 与 Playwright。 |
| 编写或重构 React | `vercel-react-best-practices` | 避免请求瀑布、冗余重渲染和不必要的包体积。 |
| 设计 React 组件 API | `vercel-composition-patterns` | 用组合替代 boolean props 膨胀。 |
| 迁移 Next.js App Router | `next-cache-components-adoption` | 按路由启用 Cache Components 并解决阻塞预渲染。 |
| 优化 Next.js 路由首屏 | `next-cache-components-optimizer` | 用可重复测试扩大可即时呈现的静态壳。 |
| 验证真实浏览器行为 | `webapp-testing` | 检查 DOM、交互、Console、截图和运行结果。 |

## 一条完整的前端路径

```text
frontend-design
  -> Vue / React / Next.js 对应的实现 Skill
  -> web-design-guidelines
  -> webapp-testing
```

这条链路把“设计有主张”“实现符合框架”“交互能运行”分开处理。不要一开始就把性能优化、动效、数据请求和视觉重构混在一轮修改里。

## Next.js 的版本边界

当前 Next.js 已将旧的 `next-best-practices` 改为随框架版本分发的文档与 `AGENTS.md` / `CLAUDE.md`，而不再单独发布可安装 Skill。旧的 `next-cache-components` 则拆分为 adoption 与 optimizer 两个工作流。

因此，只有当项目是 **Next.js 16.3+、App Router**，并且团队决定采用 Cache Components 时，才使用这两个 Next.js Skills。普通 Next.js 功能开发先读取项目安装版本对应的官方文档。

## 阅读路径

1. [9 个 Frontend Skills 逐项使用](./skill-reference.md)
2. Vue 项目优先从 `vue` 和 `vue-testing-best-practices` 开始。
3. React 项目优先从 `vercel-react-best-practices` 和 `vercel-composition-patterns` 开始。
4. Next.js 项目先判断版本与 App Router，再评估 Cache Components adoption。
