import { defineConfig } from 'vitepress'

const zhSidebar = {
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
      text: '认识 Addy Agent Skills',
      items: [
        { text: '总览', link: '/addy-agent-skills/' },
        { text: '安装与 Skill 结构', link: '/addy-agent-skills/getting-started' },
        { text: '运行原则与技能路由', link: '/addy-agent-skills/operating-model' },
      ],
    },
    {
      text: '工程生命周期',
      items: [
        { text: 'Define：从想法到规格', link: '/addy-agent-skills/define' },
        { text: 'Plan：拆成可验证任务', link: '/addy-agent-skills/plan' },
        { text: 'Build：增量实现', link: '/addy-agent-skills/build' },
        { text: 'Verify & Review：证明与审查', link: '/addy-agent-skills/verify-and-review' },
        { text: 'Ship：安全发布', link: '/addy-agent-skills/ship' },
      ],
    },
  ],
  '/claude-code/': [{ text: 'Claude Code', items: [{ text: '总览', link: '/claude-code/' }] }],
  '/context-engineering/': [
    { text: 'Context Engineering', items: [{ text: '总览', link: '/context-engineering/' }] },
  ],
  '/case-studies/': [{ text: '案例研究', items: [{ text: '总览', link: '/case-studies/' }] }],
}

const enSidebar = {
  '/en/matt-skills/': [
    { text: 'Matt Skills', items: [{ text: 'Overview', link: '/en/matt-skills/' }] },
  ],
  '/en/addy-agent-skills/': [
    { text: 'Addy Agent Skills', items: [{ text: 'Overview', link: '/en/addy-agent-skills/' }] },
  ],
  '/en/claude-code/': [
    { text: 'Claude Code', items: [{ text: 'Overview', link: '/en/claude-code/' }] },
  ],
  '/en/context-engineering/': [
    { text: 'Context Engineering', items: [{ text: 'Overview', link: '/en/context-engineering/' }] },
  ],
  '/en/case-studies/': [
    { text: 'Case Studies', items: [{ text: 'Overview', link: '/en/case-studies/' }] },
  ],
}

export default defineConfig({
  base: '/beyond-prompt/',
  cleanUrls: true,
  lastUpdated: true,

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Beyond Prompt',
      description: 'AI Skills、Agent Workflow 与 Context Engineering 中文手册',
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Beyond Prompt',
      description: 'A field guide to AI skills, agent workflows, and context engineering',
      link: '/en/',
    },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/beyond-prompt/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#2563eb' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Beyond Prompt',
    socialLinks: [{ icon: 'github', link: 'https://github.com/orcl-zung/beyond-prompt' }],
    search: { provider: 'local' },

    locales: {
      root: {
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
        sidebar: zhSidebar,
        outline: { level: [2, 3], label: '本页目录' },
        docFooter: { prev: '上一篇', next: '下一篇' },
        lastUpdated: { text: '最后更新于' },
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '目录',
        darkModeSwitchLabel: '外观',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        langMenuLabel: '切换语言',
        notFound: {
          title: '页面未找到',
          quote: '这部分内容可能还在整理，或链接已经发生变化。',
          linkLabel: '返回首页',
          linkText: '返回首页',
        },
      },
      en: {
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'AI Skills',
            items: [
              { text: 'Matt Skills', link: '/en/matt-skills/' },
              { text: 'Addy Agent Skills', link: '/en/addy-agent-skills/' },
            ],
          },
          { text: 'Claude Code', link: '/en/claude-code/' },
          { text: 'Context Engineering', link: '/en/context-engineering/' },
          { text: 'Case Studies', link: '/en/case-studies/' },
        ],
        sidebar: enSidebar,
        outline: { level: [2, 3], label: 'On this page' },
        docFooter: { prev: 'Previous', next: 'Next' },
        lastUpdated: { text: 'Last updated' },
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme',
        langMenuLabel: 'Change language',
        notFound: {
          title: 'Page not found',
          quote: 'This page may still be in progress, or the link has changed.',
          linkLabel: 'Go home',
          linkText: 'Go home',
        },
      },
    },
  },
})
