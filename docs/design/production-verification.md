# 正式首页本地验收 · 2026-10-16

实现为已确认的 Direct 布局。CQU Moe theme/ui 1.1.0、lucide-react 1.48.0；复用 Button、ContentContainer、ThemeMenu、ThemeProvider、Toaster。原型选择器和未选方向已删除。

## 构建与 HTTP

- `pnpm install --frozen-lockfile`、`pnpm check`、`pnpm exec wrangler deploy --dry-run` 通过。
- GitHub CI 在干净 Linux runner 完成同样的锁文件安装、设计检查、类型检查、静态构建、dry run 与产物上传。
- 在本地 Workers Static Assets 运行实际 `dist/`：首页返回 200，未知路径返回自定义 404，返回首页操作有效。
- HTML 响应直接包含正文和全部 7 个外部入口（四项服务、账号、设计系统、GitHub），无需客户端执行。
- 13 个引用资源及 robots/sitemap 检查通过；8 个品牌 SVG 的响应 SHA-256 与 manifest 一致。
- 页面元信息及 404 的 noindex 正确。CSP 下主题脚本、样式和图片正常加载，无控制台运行错误。

## 视觉与交互

- Chromium 中实际检查 1440 / 768 / 390 / 320px × 浅深主题，均无横向溢出；保留四项服务、两个内测标记、一个 h1 和四枚品牌 Logo。
- 查看桌面、平板、手机截图；Logo 比例和主题正确，Learning CLI 无图片。触屏模式业务控件至少 44px 高，沿用共享组件桌面尺寸。
- 手动主题刷新保留；跟随系统会响应系统主题变更；手动偏好与系统相反时使用手动主题。
- 禁用 JavaScript 后，四项服务链接仍完整，正文与 Logo 跟随系统浅深主题，没有失效的主题按钮。
- 第一次 Tab 可聚焦跳至正文，激活后焦点进入 main；主题菜单支持键盘打开，Escape 关闭并返回触发按钮。检查减少动态效果模式，无装饰入场动画。

## 边界

正文预渲染不调用客户端专用 ThemeProvider；主题控件在独立客户端入口挂载，只有一份 Provider/Toaster。公开首页使用独立顶栏，不套用后台 AppShell。

以上为本地和 GitHub CI 证据，不能代替 Cloudflare 部署和生产读回。发布流程见 [部署说明](../deployment.md)。未验证真实手机、Safari、Firefox、屏幕阅读器或子系统登录后业务。
