# CQU Moe 首页

面向访问者的公开服务导航。先读 README.md、GLOSSARY.md 与 docs/design/homepage.md。

- 非微小修改在隔离 Git worktree 中进行；不在用户主分支直接开发。
- 已选定 Direct 布局。src/homepage.tsx 是正式首页；不要恢复原型选择器或未选方向。
- 服务名称、URL、访问条件必须有来源。内测不等于运行健康状态，不伪造在线状态或用量。
- 使用设计仓库原始品牌素材，包括 CQU Moe 折叠立方和 Learning CLI 书页标识；保留 public/brand/manifest.json 的来源和校验值。
- 修改导航需检查无需脚本仍能进入服务；首页不读取个人课表、未读数或账号数据。
- 提交前检查有效 Git user.name/user.email 并原样使用。
- GitHub CI、Cloudflare Git Connector 构建、生产响应和子系统账号业务分别报告。

## CQU Moe Design

依赖安装后，先读 node_modules/@cqu-moe/ui/dist/START-HERE.md、DESIGN.md、docs/agent-start.md 和 docs/consumption.md。公开 API 以 dist/index.d.ts 为准；具体规则按页面读取 docs/ 下的布局、组件、图标、动效与验收说明。

- 组件只从 @cqu-moe/ui 导入，图标来自 lucide-react；不复制基础控件、不覆盖 .ds-* 内部样式、不导入包内部源码。
- 公开首页使用独立品牌顶栏和共享 ContentContainer，不强套业务侧栏 AppShell。
- ThemeProvider 不支持 SSR。src/render.tsx 只渲染静态页面；src/main.tsx 在 appearance 中挂载唯一 ThemeProvider、ThemeMenu、Toaster。
- 共享主题首帧脚本由 Vite 注入；构建脚本生成对应 CSP hash。不增加任意 inline script 放行。
- 使用语义变量、共享字体和间距，保持双主题、手机、键盘、减少动态效果和无脚本可读。
- 交付前运行 pnpm check、Wrangler dry run，并检查实际构建产物的 390/768/1440 双主题和 320 重排。编译通过不能代替视觉验证。
- 共享设计缺口按包内 docs/feedback-contract.md 记录，不在消费项目分叉控件。
- .design/*.tgz、锁文件与 pnpm-workspace.yaml 必须随代码提交。

## 协作资料

GitHub Issues：docs/agents/issue-tracker.md。领域术语和决策：docs/agents/domain.md。生产通过 Cloudflare Git Connector 跟踪 main，配置见 docs/deployment.md。
