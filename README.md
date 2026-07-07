# Beyond Prompt

AI Skills、Agent Workflow 与 Context Engineering 中文手册，使用 VitePress 构建并部署到 GitHub Pages。

## 本地开发

要求 Node.js 20 或更高版本。

```bash
npm install
npm run docs:dev
```

打开终端输出的本地地址，通常是 `http://localhost:5173/beyond-prompt/`。

## 构建与预览

```bash
npm run docs:build
npm run docs:preview
```

## 部署到 GitHub Pages

1. 在 GitHub 创建名为 `beyond-prompt` 的仓库，并推送代码到 `main` 分支。
2. 将 `docs/.vitepress/config.mts` 中的 `YOUR_GITHUB_USERNAME` 替换为你的 GitHub 用户名。
3. 打开仓库的 **Settings > Pages**，在 **Build and deployment** 中选择 **GitHub Actions**。
4. 推送到 `main`。`.github/workflows/deploy.yml` 会自动构建并发布站点。

发布地址通常为 `https://YOUR_GITHUB_USERNAME.github.io/beyond-prompt/`。

如果仓库最终不是以 `beyond-prompt` 命名，请同步修改 VitePress 配置中的 `base`。
