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
          text: 'Matt Skills',
          items: [{ text: '总览', link: '/matt-skills/' }],
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
      { icon: 'github', link: 'https://github.com/YOUR_GITHUB_USERNAME/beyond-prompt' },
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
