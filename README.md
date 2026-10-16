# CQU Moe

CQU Moe 首页与服务导航，让同学快速找到并进入各项服务。

本项目采用 CQU Moe Design 1.1.0。当前处于首页原型探索阶段，最终布局尚未确定。

## 查看原型

```sh
cd prototypes/homepage
pnpm install --frozen-lockfile
pnpm dev
```

打开 `http://127.0.0.1:5174/`，通过底部选择器、数字键 1–3 或左右方向键比较三个版本。选择记录在 `?v=` 中；输入搜索内容时不会触发切换。外观菜单提供浅色、深色与跟随系统。

| 原型 | 比较的方向 | 取舍 |
| --- | --- | --- |
| Direct · 常用直达 | 将课表和通知放在优先位置 | 常用服务显眼，新增服务后需要重新考虑主次 |
| Scenes · 场景导航 | 按访问者想做的事组织入口 | 对新用户更有解释性，页面更长 |
| Index · 紧凑索引 | 服务列表、搜索与分类筛选 | 扫描和扩展方便，品牌表达较少 |

原型只存在于 `prototypes/homepage/`，不作为生产页面发布。选择方向后记录决策并整合正式首页。

## 验证

```sh
cd prototypes/homepage
pnpm build
pnpm check:design
```

## 领域文档

- [术语表](GLOSSARY.md)
- [首页范围与原型记录](docs/design/homepage.md)
- [本地验收记录](docs/design/verification.md)

