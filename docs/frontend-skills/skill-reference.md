# Frontend Skills 逐项使用手册

这一页选取 9 个可组合的前端 Skills。它们不是 UI 框架的替代品：每次实现前都应读取项目的依赖版本、现有设计系统和测试命令。

## 设计与 UI 审查

### `frontend-design`

- **什么时候用**：新产品页面、重要产品改版，或现有界面正确却没有辨识度。
- **它会做什么**：要求先确定具体用户、页面任务、视觉方向、字体、色彩、布局和一个真正有理由的记忆点，再开始写代码。
- **你可以这样说**：`使用 frontend-design 为面向财务团队的对账产品设计首页。页面的唯一任务是让用户理解异常交易如何被定位；不要套用通用 SaaS 渐变和三张功能卡。`
- **你会得到**：有明确取舍的设计计划和与业务内容相符的实现方向。
- **注意**：有主张不等于堆装饰。动效、编号、颜色和图片都应服务于真实信息层级。

[查看官方源码](https://github.com/anthropics/skills/tree/b29e7cf65e5cb78a5ac33d582270551bc74a14eb/skills/frontend-design)

### `web-design-guidelines`

- **什么时候用**：准备合并一个 UI 变更，或要做界面、UX、无障碍审查。
- **它会做什么**：读取 Vercel 最新 Web Interface Guidelines，再以 `file:line` 的方式输出可行动问题。
- **你可以这样说**：`使用 web-design-guidelines 审查 settings 目录中的表单和弹窗，重点检查键盘操作、焦点回归、加载状态和错误提示。`
- **你会得到**：范围明确的 UI 审查清单，而不是笼统的“看起来可以更好”。
- **注意**：它是审查工具。修复前仍要结合已有设计系统和真实浏览器状态确认问题。

[查看官方源码](https://github.com/vercel-labs/agent-skills/tree/7c180d9044c9ae2b442b567aad4e42a28dd5ed62/skills/web-design-guidelines)

## Vue 3

### `vue`

- **什么时候用**：编写 Vue SFC、使用 `defineProps`、`defineEmits`、`defineModel`、watcher，或处理 Transition、Teleport、Suspense、KeepAlive。
- **它会做什么**：以 Vue 3.5 为基础，优先使用 TypeScript、Composition API 和 `<script setup lang="ts">`，并给出响应式、生命周期与内置组件的参考路径。
- **你可以这样说**：`使用 vue 为订单筛选面板实现 Vue 3 组件。使用 script setup 和 TypeScript；筛选条件向下传递，变更事件向上发出，不要把派生状态塞进 watch。`
- **你会得到**：边界清楚、类型明确、符合 Composition API 的组件实现。
- **注意**：如果项目明确仍使用 Options API，应尊重现有架构；不要为了使用 Skill 而无端重写整个组件树。

[查看官方源码](https://github.com/antfu/skills/tree/a74f281a27dadc02397bc1a174b0f2c97531b6ae/skills/vue)

### `vue-best-practices`

- **什么时候用**：Vue 功能跨多个组件、Composable 或共享状态，容易变成一个巨型页面组件。
- **它会做什么**：先要求画出组件职责与 props/emits，再落实最小响应式状态、props down / events up、Composable 抽取和按需性能优化。
- **你可以这样说**：`使用 vue-best-practices 重构客户列表页。拆出筛选、列表、行项目和分页；路由页只负责组合，列表状态与副作用放到 composable。`
- **你会得到**：可维护的组件图、明确数据流和可测试的功能边界。
- **注意**：它不要求组件越小越好；只有职责、复用或副作用复杂度证明需要拆分时才拆。

[查看官方源码](https://github.com/antfu/skills/tree/a74f281a27dadc02397bc1a174b0f2c97531b6ae/skills/vue-best-practices)

### `vue-testing-best-practices`

- **什么时候用**：Vue 组件、Composable、Pinia Store 或异步/Teleport 交互需要可重复验证。
- **它会做什么**：在 Vitest、Vue Test Utils 和 Playwright 之间选择合适层级，并覆盖异步更新、Suspense、Pinia、黑盒组件测试与真实浏览器场景。
- **你可以这样说**：`使用 vue-testing-best-practices 为异步加载的用户选择器加测试：先验证 loading 和 error，再验证成功后选择事件；不要只补快照。`
- **你会得到**：匹配真实行为的单元、组件或端到端测试方案。
- **注意**：快照只能辅助，不应用来替代对用户可见行为的断言。

[查看官方源码](https://github.com/antfu/skills/tree/a74f281a27dadc02397bc1a174b0f2c97531b6ae/skills/vue-testing-best-practices)

## React

### `vercel-react-best-practices`

- **什么时候用**：新写、审查或重构 React / Next.js 组件；需要处理请求瀑布、包体积、重渲染或渲染性能。
- **它会做什么**：按影响优先级提供 70 条规则，覆盖并行数据请求、直接导入、动态加载、服务端缓存、序列化、state 派生和长列表渲染。
- **你可以这样说**：`使用 vercel-react-best-practices 审查 dashboard 的首屏。先找独立请求的瀑布和客户端组件边界，再评估 bundle 与不必要重渲染；给出可验证的改动顺序。`
- **你会得到**：按收益排序的性能问题、对应规则和较小的改动建议。
- **注意**：不要机械加入 `useMemo` 或 `React.memo`。规则明确要求先证明计算或渲染真的昂贵。

[查看官方源码](https://github.com/vercel-labs/agent-skills/tree/7c180d9044c9ae2b442b567aad4e42a28dd5ed62/skills/react-best-practices)

### `vercel-composition-patterns`

- **什么时候用**：组件出现大量 boolean props，或组件库需要同时保持可复用和可理解。
- **它会做什么**：用 Compound Components、Context Provider、显式 Variant 和 children 组合，替代不断增长的 `isCompact`、`showFooter` 一类开关。
- **你可以这样说**：`使用 vercel-composition-patterns 重构 DataTable。当前有 12 个 boolean props；请提出 compound component 与显式 variant 两种方案，并说明状态应放在哪里。`
- **你会得到**：更小、更稳定的组件接口，以及调用方可以组合的 API。
- **注意**：包含 React 19 专属规则。项目仍在 React 18 或更早版本时，不要套用这些 API 建议。

[查看官方源码](https://github.com/vercel-labs/agent-skills/tree/7c180d9044c9ae2b442b567aad4e42a28dd5ed62/skills/composition-patterns)

## Next.js 16.3+ Cache Components

### `next-cache-components-adoption`

- **什么时候用**：App Router 项目决定开启 `cacheComponents: true`，并需要有序处理预渲染阻塞和旧配置迁移。
- **它会做什么**：检查 Next.js 16.3+、App Router 与可运行应用；区分 `dynamic`、`revalidate`、`fetchCache` 等旧配置，按路由逐步迁移并验证构建与浏览器结果。
- **你可以这样说**：`使用 next-cache-components-adoption 评估这个 App Router 项目能否启用 Cache Components。先报告当前 Next.js 版本、阻塞路由和需要人工决定的动态页面，不要直接改配置。`
- **你会得到**：可分批执行的迁移路线、受影响路由和每一步的验证方式。
- **注意**：只适用于 Next.js 16.3+ 的 App Router。Pages Router 或低版本项目应先升级或使用匹配版本的官方文档。

[查看官方源码](https://github.com/vercel/next.js/tree/ccd47cfe53c7fef5e6b7ad472a3a020605a23608/skills/next-cache-components-adoption)

### `next-cache-components-optimizer`

- **什么时候用**：Cache Components 已启用，但某个路由仍无法快速呈现有意义的静态壳，或首次 / 客户端导航看起来被数据请求阻塞。
- **它会做什么**：为单个目标路由建立 `@next/playwright` 的 `instant()` 回归测试，确认静态壳、将 Suspense 边界下推到真实动态读取，并在生产式构建中验证。
- **你可以这样说**：`使用 next-cache-components-optimizer 优化 /dashboard。先证明导航时布局和骨架没有立即出现，再为可见静态壳写 instant 测试；不要只测一个空 fallback。`
- **你会得到**：一条有回归保护的路由优化、清楚说明哪些内容即时呈现、哪些内容流式加载。
- **注意**：这是路由级优化，不是全站开关。需要 Next.js 16.3+、已启用 Cache Components，并应在生产式构建中验证。

[查看官方源码](https://github.com/vercel/next.js/tree/ccd47cfe53c7fef5e6b7ad472a3a020605a23608/skills/next-cache-components-optimizer)

## 真实浏览器验证

### `webapp-testing`

- **什么时候用**：前端功能已实现，需要验证真实 DOM、交互、Console、网络行为或视觉结果。
- **它会做什么**：以 Playwright 为核心，在运行中的应用里先观察渲染状态，再根据真实选择器执行操作并捕获证据。
- **你可以这样说**：`使用 webapp-testing 验证注册页：输入无效邮箱、修正邮箱、提交成功。检查错误文案、键盘焦点、Console 和 Network；输出截图与实际结果。`
- **你会得到**：可重现的用户路径、浏览器运行证据和针对真实问题的结论。
- **注意**：不要用静态代码推断代替运行验证。动态应用需要在页面加载稳定后再选择元素和执行操作。

[查看官方源码](https://github.com/anthropics/skills/tree/b29e7cf65e5cb78a5ac33d582270551bc74a14eb/skills/webapp-testing)
