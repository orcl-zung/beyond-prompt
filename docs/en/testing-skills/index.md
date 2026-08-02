# Testing & Quality Skills

Quality is not a final gate. These skills help the team define behavior early, choose checks that match risk, and claim completion only after fresh evidence.

## Start here

| Situation | Skill | Outcome |
| --- | --- | --- |
| Define behavior before implementation | `test-driven-development` | A Red -> Green -> Refactor feedback loop. |
| Plan layered web testing | `webapp-testing` | A proportionate unit, integration, and end-to-end test strategy. |
| Verify a live browser flow | `playwright-cli` | Browser evidence, reproducible steps, and inspected page state. |
| Ready to merge or release | `verification-before-completion` | Newly run checks and explicit remaining limits. |

## Prompt example

```text
Use verification-before-completion. Based on this change and its risks, list the checks that
must be run again. Execute them, then report each command, its result, and any remaining limitation.
Do not claim completion without fresh output.
```

Sources: Obra's [test-driven-development](https://github.com/obra/superpowers/tree/44c9b2d6e889982ac18c27d05a19fefe335194e1/skills/test-driven-development), Anthropic's [webapp-testing](https://github.com/anthropics/skills/tree/b29e7cf65e5cb78a5ac33d582270551bc74a14eb/skills/webapp-testing), and Microsoft's [playwright-cli](https://github.com/microsoft/playwright-cli/tree/eee5a185c98e6b04d88f580d45a854e9692ab50b/skills/playwright-cli).
