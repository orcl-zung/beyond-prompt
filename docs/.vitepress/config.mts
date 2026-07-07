import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Beyond Prompt',
  description: 'AI Skills、Agent Workflow 与 Context Engineering 中文手册',
  base: '/beyond-prompt/',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['meta', { name: 'theme-color', content: '#2563eb' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Beyond Prompt',

    nav: [
      { text: '首页', link: '/' },
      {
        text: 'AI Skills',
        items: [
          { text: 'Matt Skills', link: '/matt-skills/' },
          { text: 'Addy Agent Skills', link: '/addy-agent-skills/' },
        ],
      },
      { text: 'Claude Code', link: '/claude-code/' },
      { text: 'Context Engineering', link: '/context-engineering/' },
      { text: '案例研究', link: '/case-studies/' },
    ],

    sidebar: {
      '/matt-skills/': [
        {
          text: '认识 Matt Skills',
          items: [
            { text: '总览', link: '/matt-skills/' },
            { text: '安装与项目配置', link: '/matt-skills/getting-started' },
            { text: '两种 Skill 调用模型', link: '/matt-skills/invocation-model' },
            { text: '选择正确的工作流', link: '/matt-skills/choosing-a-flow' },
          ],
        },
        {
          text: 'Idea to Ship',
          items: [
            { text: '对齐与领域语言', link: '/matt-skills/clarify-and-model' },
            { text: '深模块与代码库健康', link: '/matt-skills/deep-modules' },
            { text: '原型与研究支线', link: '/matt-skills/prototyping' },
            { text: 'Implement 与 TDD', link: '/matt-skills/tdd' },
          ],
        },
        {
          text: '反馈与交付',
          items: [
            { text: '诊断与双轴审查', link: '/matt-skills/diagnosing-bugs' },
            { text: 'PRD、Issues、Triage 与 Handoff', link: '/matt-skills/delivery' },
          ],
        },
      ],
      '/addy-agent-skills/': [
        {
          text: 'Addy Agent Skills',
          items: [{ text: '总览', link: '/addy-agent-skills/' }],
        },
      ],
      '/claude-code/': [
        {
          text: 'Claude Code',
          items: [{ text: '总览', link: '/claude-code/' }],
        },
      ],
      '/context-engineering/': [
        {
          text: 'Context Engineering',
          items: [{ text: '总览', link: '/context-engineering/' }],
        },
      ],
      '/case-studies/': [
        {
          text: '案例研究',
          items: [{ text: '总览', link: '/case-studies/' }],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/orcl-zung/beyond-prompt' },
    ],

    search: { provider: 'local' },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新于' },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    notFound: {
      title: '页面未找到',
      quote: '这部分内容可能还在整理，或链接已经发生变化。',
      linkLabel: '返回首页',
      linkText: '返回首页',
    },
  },
})
