# 首页原型

三个方向使用同一份真实服务清单，入口为本应用根路径。它们不是正式部署页面。

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm check:design
```

预览地址：http://127.0.0.1:5174/ 。底部按钮、数字键 1–3 和左右方向键切换；?v=1、?v=2、?v=3 可直接打开对应版本。

范围、来源及取舍见 ../../docs/design/homepage.md。
