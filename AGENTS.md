# CQU Moe 首页

这是面向访问者的公开服务导航。先阅读 README.md、GLOSSARY.md 与 docs/design/homepage.md。

- 非微小修改在隔离 Git worktree 中进行。
- 原型在 prototypes/homepage/。未经用户选择，不将某一设计方向作为最终首页发布。
- 使用 CQU Moe Design；原型目录的 AGENTS.md 提供消费规则。不要重新实现基础控件或覆盖 .ds-* 内部样式。
- 公开首页采用独立品牌顶栏，复用 ContentContainer 等公开组件；不强套带业务侧栏的 AppShell。
- 服务名称、URL、访问条件必须有来源。内测与运行健康状态是不同概念，不伪造在线状态或用量数字。
- 产品 Logo 使用设计仓库原始素材并保留来源与校验值；不使用普通图标替代。Learning CLI 暂无标识，按已确认决策仅显示文字。
- 提交前检查 Git 有效 user.name/user.email 并原样使用。
- 构建、设计检查、浏览器交互、外部服务可用性、正式部署分别报告。

## Agent skills

### Issue tracker

使用 cqu-moe/cqu.moe 的 GitHub Issues；见 docs/agents/issue-tracker.md。

### Domain docs

单一领域，术语在根目录 GLOSSARY.md；ADR 按需要创建。见 docs/agents/domain.md。
