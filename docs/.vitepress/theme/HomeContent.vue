<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  locale: 'zh' | 'en'
}>()

const content = computed(() => {
  if (props.locale === 'en') {
    return {
      introTitle: 'Move from a single instruction to a reusable way of working.',
      introText:
        'A prompt solves one conversation. A system solves a class of problems. This guide explores how skills are invoked, how tasks move forward, and how context helps an agent make more reliable decisions.',
      skillsTitle: 'Two complementary skill systems',
      skillsLead:
        'Choose the operating system that fits the task, from deep engineering practice to end-to-end delivery.',
      mattDescription:
        'Go deeper on clarification, domain modeling, prototypes, TDD, diagnosis, and codebase design.',
      addyDescription:
        'Build a complete engineering loop around Define, Plan, Build, Verify, and Ship.',
      linkLabel: 'Open the guide',
      methodTitle: 'Treat AI collaboration as one continuous chain',
      steps: [
        ['Skills', 'Package reusable methods and judgment.'],
        ['Workflow', 'Move work through observable stages.'],
        ['Context', 'Provide the right information at each step.'],
        ['Cases', 'Learn from outcomes and retain the lessons.'],
      ],
      mattLink: './matt-skills/',
      addyLink: './addy-agent-skills/',
    }
  }

  return {
    introTitle: '从一句指令，走向一套可复用的工作方式。',
    introText:
      '提示词解决一次对话，系统化的方法解决一类问题。这里关注技能如何被调用、任务如何被推进，以及上下文如何帮助 Agent 做出更可靠的判断。',
    skillsTitle: '两套互补的 Agent Skills',
    skillsLead: '从工程深度到交付全流程，选择更适合当前任务的工作系统。',
    mattDescription: '深入需求澄清、领域建模、原型、TDD、诊断与代码库设计。',
    addyDescription: '围绕 Define、Plan、Build、Verify 与 Ship，建立完整的工程交付闭环。',
    linkLabel: '进入手册',
    methodTitle: '把 AI 协作看成一条连续链路',
    steps: [
      ['Skills', '封装可复用的方法与判断标准。'],
      ['Workflow', '让任务沿着可观察的阶段推进。'],
      ['Context', '为每一步提供恰到好处的信息。'],
      ['Cases', '从真实结果中校正并沉淀经验。'],
    ],
    mattLink: './matt-skills/',
    addyLink: './addy-agent-skills/',
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
        <a class="skill-card skill-card--matt" :href="content.mattLink">
          <span class="skill-index">01</span>
          <div>
            <p class="skill-label">ENGINEERING PRACTICE</p>
            <h3>Matt Skills</h3>
            <p>{{ content.mattDescription }}</p>
          </div>
          <span class="skill-link">
            {{ content.linkLabel }}
            <span aria-hidden="true">→</span>
          </span>
        </a>

        <a class="skill-card skill-card--addy" :href="content.addyLink">
          <span class="skill-index">02</span>
          <div>
            <p class="skill-label">DELIVERY SYSTEM</p>
            <h3>Addy Agent Skills</h3>
            <p>{{ content.addyDescription }}</p>
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
