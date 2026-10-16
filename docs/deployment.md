# Cloudflare Git Connector

2026-10-16：用户授权将正式首页上线至 https://cqu.moe，并由用户配置 Git Connector。

| 项目 | 值 |
| --- | --- |
| GitHub 仓库 | https://github.com/cqu-moe/cqu.moe |
| Worker 名称 | cqu-moe-homepage |
| 生产分支 | main |
| 根目录 | 仓库根目录 |
| 构建命令 | pnpm build |
| 部署命令 | pnpm exec wrangler deploy |
| Node.js | 22.22.3，由 .node-version 声明 |
| pnpm | 11.19.0，由 packageManager 声明 |
| 静态文件目录 | dist |
| 自定义域名 | cqu.moe，由 wrangler.jsonc 声明 |

不需要业务环境变量、数据库或 Worker 请求处理脚本。Cloudflare 为 Git Connector 管理部署凭据，不将凭据写入仓库。pnpm-workspace.yaml 已显式允许依赖的 esbuild、Parcel watcher 和 workerd 安装脚本。

## 发布流程

1. 功能分支开 PR，GitHub CI 进行锁文件安装、设计检查、类型检查、静态构建和 Wrangler dry run。
2. 检查通过后合并 main，由 Git Connector 构建和部署。
3. 检查 Cloudflare 构建结果，再读回 https://cqu.moe 的 HTML、静态资源和 404；GitHub CI 通过不等于部署成功。

也可在已授权的本地 Cloudflare 账号下运行 `pnpm deploy`，用于恢复或人工发布。正常迭代优先走 Git Connector，避免两条发布路径同时覆盖版本。

## 静态输出

Vite 构建客户端主题控件和构建期渲染入口，scripts/prerender.mjs 输出首页与 404 HTML。ThemeProvider 仅在浏览器运行；静态服务入口不依赖客户端执行或 hydration。

`_headers` 为共享首帧脚本生成 CSP hash，并为带内容哈希的资源设置长期缓存；品牌素材与 HTML 使用平台默认重新验证。未知路径由 Workers Static Assets 返回自定义 404，不能回落成 200 首页。

## 回退

首选 revert 引入问题的 main 提交，让 Git Connector 发布可追溯的回退。紧急情况下从 Cloudflare 部署历史回退至已验证版本，再同步 Git 代码，避免下一次 main 构建覆盖回退。
