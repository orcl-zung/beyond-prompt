# Java Skills

This section curates five Java skills for Spring Boot implementation, JUnit 5 tests, Javadoc, MCP servers, and GraalVM Native Image work. The goal is not to treat a generated template as timeless; it is to give an agent repeatable engineering constraints and verify each change in the repository it is touching.

## Recommended path

```text
java-springboot -> java-junit -> java-docs
```

Use `java-mcp-server-generator` when a Java capability must become an MCP tool, resource, or prompt. Reach for `java-add-graalvm-native-image-support` only after startup time, memory, or image size is a measured problem.

The detailed guide is maintained in [Simplified Chinese](/java-skills/).

Source: [github/awesome-copilot](https://github.com/github/awesome-copilot)
