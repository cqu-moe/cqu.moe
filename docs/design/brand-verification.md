# 品牌接入验证 · 2026-10-16

主站使用用户选定的 CQU Moe A 版折叠立方，Learning CLI 服务入口使用书页与命令提示符。所有资源复制自 design 的通路家族，来源路径和 SHA-256 见 `public/brand/manifest.json`，主站同步覆盖 15 个原始素材并核对清单。

## 本地结果

- `pnpm check`：设计规则、类型、客户端与 SSR 构建通过；首页与 404 均在构建时输出品牌图片。
- `WRANGLER_LOG_PATH=/private/tmp/cqu-brand-wrangler.log pnpm exec wrangler deploy --dry-run`：31 个静态文件，退出 0，未部署。最初默认日志路径被沙箱限制，改用可写日志路径后无该错误。
- Ego Lite Chromium：320 / 390 / 768 / 1440 × 双主题共 8 组；均无横向溢出和断图，主站与 Learning CLI 图标按当前页面主题使用黑/白版本。验证时将系统主题设为相反颜色，确认手动主题优先。
- 320px 初检发现顶栏过宽，修正为 24px 主站图标并隐藏账号旁的装饰标识，账号文字与操作保持可用。实看修正后的深色窄屏、1440 浅色和 390 深色服务区。
- 390px 触屏模拟：页面操作均达到 44 × 44px。首页链接经 Tab 可聚焦且焦点可见；禁用脚本后服务链接与品牌图片仍可用，404 共用新页头。
- `emil-touch-and-accessibility` 与 `emil-ui-review` 检查无阻塞项。没有改动服务 URL、内测状态、主题实现或共享包 API，theme / ui 保持 1.1.0。

详细数据见 [brand-verification.json](brand-verification.json)，截图在 [screenshots](screenshots/)。本轮未验证真实手机、Safari、Firefox 或各子系统账号业务。

GitHub CI、Cloudflare 构建、生产资源读回均为独立验收层，发布后单独报告。

## 远端预览修复

首轮 GitHub CI 通过，Cloudflare 的页面构建也通过，但现有分支部署命令 `wrangler preview` 因缺少 `previews` 块失败。补齐空配置块后沿用 Git Connector 重跑；无新增业务绑定，生产路由不变。此失败与图标路径或静态构建无关。
