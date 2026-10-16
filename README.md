# CQU Moe

CQU Moe 的公开首页与服务导航，采用已选定的 Direct 布局和 CQU Moe Design 1.1.0。

课表订阅、校园通知优先展示；QuickLogin 与 Learning CLI 标注内测。首页无需登录，账号入口跳转至 Auth，各子系统自行处理认证。

## 开发

使用 Node.js 22.22.3 与 pnpm 11.19.0：

```sh
pnpm install --frozen-lockfile
pnpm dev
```

本地地址为 http://127.0.0.1:5174/ 。正式内容在构建时生成 HTML，客户端 React 只挂载共享主题菜单；禁用脚本仍可阅读和打开服务。

## 检查与部署预览

```sh
pnpm check
pnpm exec wrangler deploy --dry-run
pnpm exec wrangler dev --local --port 5174
```

`pnpm check` 运行设计规则、TypeScript 和静态构建。最终文件在 `dist/`，包含主页、404、品牌素材、搜索元信息与响应头。

## 发布

Cloudflare Git Connector 跟踪 `main`，构建命令 `pnpm build`，部署命令 `pnpm exec wrangler deploy`。Worker 名为 `cqu-moe-homepage`，自定义域名为 `cqu.moe`。完整配置见 [部署说明](docs/deployment.md)。

## 文档

- [术语表](GLOSSARY.md)
- [首页范围与设计决策](docs/design/homepage.md)
- [原型阶段验收](docs/design/verification.md)
- [正式首页本地验收](docs/design/production-verification.md)
