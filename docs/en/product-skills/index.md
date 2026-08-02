# Product & Discovery Skills

Product work is not the act of expanding a short request into a long PRD. It is the work of making the customer problem, desired outcome, assumptions, and handoff conditions visible to the whole team.

## Start here

| Situation | Skill | Outcome |
| --- | --- | --- |
| An early idea or customer signal | `product-brainstorming` | Problem framing, options, assumptions, and validation paths. |
| A vague request that needs clarification | `interview-me` | High-impact questions and explicit constraints. |
| Notes that need a product direction | `idea-refine` | User, pain point, proposition, risk, and next experiment. |
| A direction ready for design and engineering | `spec-driven-development` | Scope, non-goals, acceptance criteria, and risks. |

## Suggested flow

```text
customer signal -> product-brainstorming -> interview-me / idea-refine -> spec-driven-development
```

Give the agent the user, context, evidence, business constraints, and unanswered questions. Ask it to surface assumptions before it writes a specification.

## Prompt example

```text
Use product-brainstorming. New workspace owners often stop after creating a project.
Evidence: seven-day retention is low, and interviews describe an intimidating empty state.
Do not write a PRD yet. Ask what matters, propose three directions, state each assumption,
and give the smallest validation method for each.
```

`product-brainstorming` is maintained by Anthropic in its [knowledge-work plugins](https://github.com/anthropics/knowledge-work-plugins/tree/9819607cbabff6518224bc412972a8b12f1628b0/product-management/skills/product-brainstorming). The fuller guides for `interview-me`, `idea-refine`, and `spec-driven-development` are currently in [Chinese](/addy-agent-skills/skill-reference).

## Handoff checklist

Pass the following to design, engineering, and quality: the user problem and metric, scope and non-goals, primary and failure flows, permission boundaries, and assumptions that still need evidence.
