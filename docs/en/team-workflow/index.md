# Team Workflow Skills

The challenge of AI collaboration is rarely a shortage of skills. It is knowing who should use one, when, what they hand off, and how the team knows the work is actually done.

## A visible team flow

```text
discover -> define -> design -> build -> verify -> release and learn
```

| Stage | Primary roles | Helpful skills | Handoff |
| --- | --- | --- | --- |
| Discover | Product | `product-brainstorming`, `interview-me` | Problem, evidence, assumptions, metric. |
| Define | Product + technical lead | `spec-driven-development`, `planning-and-task-breakdown` | Scope, non-goals, acceptance, tasks. |
| Design | UI/UX + frontend | `frontend-design`, `web-design-guidelines` | States, interactions, accessibility, content rules. |
| Build | Engineering | `incremental-implementation`, `systematic-debugging` | Small changes and root-cause evidence. |
| Verify | QA + whole team | `webapp-testing`, `verification-before-completion` | Fresh checks, risks, release notes. |

## Prompt example

```text
Use find-skills. We are delivering a feature with product specification, permission APIs,
a Vue form, and end-to-end verification. Recommend the smallest useful set of skills by role
and stage, including the order and the artifact each role hands to the next.
```

`find-skills` is maintained in Vercel's [agent-skills](https://github.com/vercel-labs/agent-skills/tree/7c180d9044c9ae2b442b567aad4e42a28dd5ed62/skills/find-skills). Use it to select a path, not to replace domain judgment.

## Shared context

Keep the user problem and success metric, confirmed facts and open assumptions, current design/API/test materials, scope and non-goals, and verification method visible to every role. That is the practical foundation of [Context Engineering](/en/context-engineering/).
