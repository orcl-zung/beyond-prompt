# Backend & Platform Skills

Reliable backend work starts with contracts and boundaries, then verifies security, observability, and failure behavior. Language and framework choices come after those responsibilities are explicit.

## Start here

| Situation | Skill | Outcome |
| --- | --- | --- |
| A new API or service boundary | `api-and-interface-design` | Resource model, errors, idempotency, compatibility, and acceptance cases. |
| Framework or SDK work | `source-driven-development` | Version-aware decisions grounded in official sources. |
| Identity, permissions, or untrusted input | `security-and-hardening` | Threat review and prioritized minimal fixes. |
| Production behavior or release readiness | `observability-and-instrumentation` | Metrics, logs, traces, and investigation steps. |
| Java and Spring Boot | `java-springboot`, `java-junit` | Framework-aware implementation and behavior tests. |

## Prompt example

```text
Use api-and-interface-design for an invite-member API. It serves web and mobile clients;
duplicate submissions must not create duplicate invites, roles differ by actor, and email delivery can fail.
Define requests, responses, state transitions, errors, idempotency, evolution, and acceptance cases.
Do not write controller code yet.
```

The core workflow skills are part of [Addy Osmani's agent-skills](https://github.com/addyosmani/agent-skills/tree/7829ffd90d973b6325f5f12f1b1226dcace74443/skills). See the detailed [Chinese guide](/addy-agent-skills/skill-reference) and [Java Skills](/java-skills/) for framework-specific work.
