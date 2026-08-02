<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  locale: 'zh' | 'en'
}>()

const content = computed(() => {
  if (props.locale === 'en') {
    return {
      introTitle: 'Give every product role a reusable way to work with AI.',
      introText:
        'A prompt can help one person in one conversation. A shared system lets product, design, engineering, and quality work from the same evidence, handoffs, and standards.',
      skillsTitle: 'Start from your role',
      skillsLead:
        'Choose the work you own today. Each guide explains what to hand to an agent, what evidence to ask for, and where to go deeper.',
      linkLabel: 'Open the guide',
      methodTitle: 'Keep the handoff visible from idea to release',
      steps: [
        ['Define', 'Turn a customer problem into a shared, testable brief.'],
        ['Design', 'Make states, content, and constraints tangible before code.'],
        ['Build', 'Implement against explicit contracts and project conventions.'],
        ['Verify', 'Prove the experience and the release are ready to trust.'],
      ],
      skills: [
        { label: 'PRODUCT & DISCOVERY', title: 'Product & Discovery', description: 'Explore the problem, surface assumptions, and turn a fuzzy request into an outcome the team can agree on.', link: './product-skills/', tone: 'product' },
        { label: 'UI/UX DESIGN', title: 'UI/UX Design', description: 'Shape interface direction, audit existing flows, and make interaction states concrete before implementation.', link: './design-skills/', tone: 'design' },
        { label: 'FRONTEND ENGINEERING', title: 'Frontend Engineering', description: 'Build Vue, React, and Next.js interfaces with clear component boundaries and browser-level evidence.', link: './frontend-skills/', tone: 'frontend' },
        { label: 'BACKEND & PLATFORM', title: 'Backend & Platform', description: 'Define reliable APIs, protect system boundaries, and make production behavior observable.', link: './backend-skills/', tone: 'backend' },
        { label: 'TESTING & QUALITY', title: 'Testing & Quality', description: 'Design the right checks, find regressions early, and finish only after fresh verification.', link: './testing-skills/', tone: 'quality' },
        { label: 'TEAM WORKFLOW', title: 'Team Workflow', description: 'Choose skills deliberately and keep decisions, context, reviews, and delivery legible across roles.', link: './team-workflow/', tone: 'workflow' },
      ],
    }
  }

  return {
    introTitle: '为每个产研角色，配一套可复用的 AI 工作方式。',
    introText:
      '提示词可以帮一个人完成一次对话；共享的方法，才能让产品、设计、开发和测试围绕同一份证据、交接和标准一起推进。',
    skillsTitle: '从你的角色进入',
    skillsLead: '选择你今天负责的工作。每一页都说明该给 Agent 什么上下文、该要什么证据，以及下一步去哪里深入。',
    linkLabel: '进入手册',
    methodTitle: '让交接从想法到发布始终可见',
    steps: [
      ['定义', '把用户问题变成团队都能验证的目标。'],
      ['设计', '在写代码前，让状态、内容和约束变得具体。'],
      ['实现', '按明确契约与项目约定构建功能。'],
      ['验证', '用新的证据证明体验和发布已经可靠。'],
    ],
    skills: [
      { label: 'PRODUCT & DISCOVERY', title: '产品与需求', description: '探索真实问题、暴露关键假设，把模糊诉求变成团队能共同确认的结果。', link: './product-skills/', tone: 'product' },
      { label: 'UI/UX DESIGN', title: 'UI/UX 设计', description: '建立界面方向、审查已有流程，并在实现前把交互状态讲清楚。', link: './design-skills/', tone: 'design' },
      { label: 'FRONTEND ENGINEERING', title: '前端工程', description: '用清晰的组件边界和真实浏览器证据，构建 Vue、React 与 Next.js 界面。', link: './frontend-skills/', tone: 'frontend' },
      { label: 'BACKEND & PLATFORM', title: '后端与平台', description: '定义可靠 API、守住系统边界，并让线上行为可观察、可追溯。', link: './backend-skills/', tone: 'backend' },
      { label: 'TESTING & QUALITY', title: '测试与质量', description: '设计正确的检查方式，及早发现回归，并在新鲜验证之后再完成交付。', link: './testing-skills/', tone: 'quality' },
      { label: 'TEAM WORKFLOW', title: '研发协作', description: '有意识地选择 Skills，让决策、上下文、评审和交付在角色之间始终清楚。', link: './team-workflow/', tone: 'workflow' },
    ],
  }
})
</script>

<template>
  <div class="home-shell">
    <section class="home-intro" aria-labelledby="home-intro-title">
      <p class="section-kicker">WHY BEYOND PROMPT</p>
      <div class="intro-grid">
        <h2 id="home-intro-title">{{ content.introTitle }}</h2>
        <p>{{ content.introText }}</p>
      </div>
    </section>

    <section class="skills-section" aria-labelledby="skills-title">
      <div class="section-heading">
        <div>
          <p class="section-kicker">START WITH SKILLS</p>
          <h2 id="skills-title">{{ content.skillsTitle }}</h2>
        </div>
        <p>{{ content.skillsLead }}</p>
      </div>

      <div class="skill-grid">
        <a
          v-for="(skill, index) in content.skills"
          :key="skill.title"
          class="skill-card"
          :class="`skill-card--${skill.tone}`"
          :href="skill.link"
        >
          <span class="skill-index">{{ String(index + 1).padStart(2, '0') }}</span>
          <div>
            <p class="skill-label">{{ skill.label }}</p>
            <h3>{{ skill.title }}</h3>
            <p>{{ skill.description }}</p>
          </div>
          <span class="skill-link">
            {{ content.linkLabel }}
            <span aria-hidden="true">→</span>
          </span>
        </a>
      </div>
    </section>

    <section class="method-section" aria-labelledby="method-title">
      <div class="section-heading">
        <div>
          <p class="section-kicker">THE OPERATING MODEL</p>
          <h2 id="method-title">{{ content.methodTitle }}</h2>
        </div>
      </div>

      <ol class="method-track">
        <li v-for="(step, index) in content.steps" :key="step[0]">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <strong>{{ step[0] }}</strong>
          <p>{{ step[1] }}</p>
        </li>
      </ol>
    </section>
  </div>
</template>
