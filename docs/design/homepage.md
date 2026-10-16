# 首页原型探索

## 已确认的范围

2026-10-16 与用户确认：

- 首页以让同学快速找到并进入服务为首要目标，品牌介绍保持简短。
- 无需登录即可浏览首页；进入各子系统后由子系统处理认证，不在首页读取个人课表、未读数等账号数据。
- 首批展示课表订阅、校园通知、QuickLogin、Learning CLI。
- QuickLogin 与 Learning CLI 均标注“内测”。
- 账号入口放顶栏，设计系统与 GitHub 放页脚。
- 采用 CQU Moe Design，先比较三个可操作的原型，再由用户选择最终方向。
- 使用设计仓库已有的 Schedule、Feed、QuickLogin Logo；顶栏账号入口使用 Auth Logo。Learning CLI 暂时只显示文字名称，由用户确认。

## 材料与来源

使用 @cqu-moe/theme 与 @cqu-moe/ui 1.1.0，依照用户提供的设计系统生成器创建独立应用。两份本地 tarball 与锁文件随代码保留，基础控件均由共享包提供。字体、间距与颜色沿用共享语义变量，不引入另一套设计系统。

| 服务 | 入口 | 来源与说明 |
| --- | --- | --- |
| 课表订阅 | https://schedule.cqu.moe | https://github.com/cqu-moe/schedule 的项目用途与部署配置 |
| 校园通知 | https://feed.cqu.moe | https://github.com/cqu-moe/feed 的公开描述、README 与 homepage 元数据 |
| QuickLogin | https://quicklogin.cqu.moe | 官网公开介绍及“当前仅向内测用户开放”说明 |
| Learning CLI | https://github.com/cqu-moe/learning | 公开 README 说明本地 CLI/SDK 与 Web 延后；内测状态由用户确认 |

以上资料用于核对名称、用途和链接，不等于各服务实时可用性或账号业务验收。

### 品牌素材

四枚 Logo 均逐字节复制自公开设计仓库的 `assets/brand/path-family/`，本地文件与 SHA-256 记录在 `public/brand/manifest.json`。没有重绘、滤镜、拉伸或附加背景。

- Schedule、Feed、Auth：浅色使用 `logo-black.svg`，深色使用 `logo-white.svg`。
- QuickLogin：使用彩色 `logo.svg` / `logo-dark.svg`。
- 服务标识为 32px，顶栏 Auth 为 24px；依据当前 `data-theme` 切换，即使手动主题与系统相反也保持一致。
- Logo 与服务名同时出现时，图片使用空 alt；Learning CLI 保留文字对齐位置，不展示占位图标。

## 三个方向

1. **常用直达**：卡片优先展示课表与通知，内测工具置于下方。常用入口清楚，新增项目后需要继续判断优先级。
2. **场景导航**：左右分栏，按使用目的逐行介绍服务。对新用户更友好，但滚动距离更长。
3. **紧凑索引**：列表、关键词搜索、网页/内测工具筛选。便于扫描和扩展，品牌表达更弱；当前只有四项时搜索并非必需。

三个方向使用相同真实清单与链接。每个版本都可打开服务、切换主题；索引版包含空结果恢复。选择器支持数字键、方向键与 URL 持久化。

## 原型阶段设计边界

- 这是公开内容入口，使用独立顶栏与共享 ContentContainer，避免套用后台侧栏外壳；没有覆盖 .ds-* 内部选择器。
- 选择器 CSS 按 emil-prototype/PICKER.md 原样保留。其固定深色、28px 按钮及高层级属于开发比较工具的明确例外，不作为正式首页控件。正式页面仍遵守触屏尺寸与共享主题。
- 无装饰入场动画、状态轮询或伪造计数。搜索结果数量来自实际过滤结果。
- 原型为客户端 React 比较工具，包含 noindex，不作为正式站点部署。正式实现阶段再处理静态输出、正式元信息与上线配置。

## 决策

2026-10-16：用户选择 **Direct · 常用直达**，授权继续整合正式首页。

- 保留课表与通知优先的双卡片布局，QuickLogin 和 Learning CLI 位于下方并标注内测。
- 保留现有文案、四枚原版 Logo、双主题与公开导航边界；Learning CLI 只显示文字。
- Scenes 未选用：同一组入口需要更多解释与滚动，当前首要任务是快速进入服务。
- Index 未选用：四项服务暂不需要搜索与分类，直接展示即可。
- 正式实现删除选择器、键盘切换、未选方向及其专属样式；页面构建为静态 HTML，主题控件保留客户端边界。

本地构建、交互和视觉验收见 [verification.md](verification.md)。

## 正式实现

页面已迁入仓库根目录，原型目录和选择器已移除。正文在构建时生成静态 HTML，仅主题菜单在客户端挂载；遵守共享 ThemeProvider 的客户端边界。构建产物含 SEO 元信息、robots、sitemap、自定义 404 与响应头。favicon 使用现有 CQU 文字品牌，不借用某一子系统标识。

## 品牌更新 · 2026-10-16

用户确认新增标识并要求同步主站：CQU Moe 使用 A 版折叠立方，Learning CLI 使用书页与命令提示符。此决定替代前文的文字 favicon 和 Learning CLI 文字占位方案。

顶栏首页链接与 Learning CLI 服务入口均使用设计仓库原始黑白 SVG，按实际 `data-theme` 切换；根 favicon 使用紫色立方与深底适配，另提供 ICO 回退和触屏书签图标。所有来源与 SHA-256 由设计仓库 `pnpm brand:sync cqu-moe <repo-root>` 写入 `public/brand/manifest.json`，以 `pnpm brand:check cqu-moe <repo-root>` 复核。服务 URL、内测标识、无需脚本的导航与静态输出均保留。
