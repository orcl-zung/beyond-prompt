# UI/UX Design Skills

Design skills do not replace design judgment. They make that judgment inspectable: what users are trying to do, how information is ordered, which states exist, and whether the interface can actually be used.

## Start here

| Situation | Skill | Outcome |
| --- | --- | --- |
| Design a new or critical flow | `frontend-design` | Information hierarchy, visual direction, real content, and interaction states. |
| Audit an existing interface | `web-design-guidelines` | Prioritized usability, accessibility, state, and layout findings. |
| Review a mature design | `critique` | Evidence-based issues ranked by impact. |
| Refine a working primary flow | `polish` | Improvements to hierarchy, density, feedback, and consistency. |

## Prompt example

```text
Use frontend-design for an invite-member flow across desktop and mobile.
The user is a first-time team owner. The task is to invite, set a role, and understand
whether the invitation succeeded. Define information architecture and all meaningful states
before suggesting components or visual details.
```

Anthropic maintains [frontend-design](https://github.com/anthropics/skills/tree/b29e7cf65e5cb78a5ac33d582270551bc74a14eb/skills/frontend-design), and Vercel maintains [web-design-guidelines](https://github.com/vercel-labs/agent-skills/tree/7c180d9044c9ae2b442b567aad4e42a28dd5ed62/skills/web-design-guidelines).

## Handoff checklist

Share the main task, success state, loading/empty/error/permission states, interaction rules, accessibility requirements, and behavior on narrow screens. A static screen alone is not a sufficient engineering or QA handoff.
