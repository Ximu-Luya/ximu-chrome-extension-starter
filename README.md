# 现代化 Chrome 扩展 Vite 启动模板

> 一个基于 [Vite](https://vitejs.dev/) 的 `现代化 Chrome 扩展清单 V3` ([Chrome](https://developer.chrome.com/docs/extensions/mv3/getstarted/)) 启动模板。

## 特性

- ⚡️ **即时热更新** - 在开发中使用 **Vite**（无需刷新！）
- 🥝 Vue 3 - 组合 API，[`<script setup>` 语法](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md) 等等！
- 💬 轻松通信 - 由 [`webext-bridge`](https://github.com/antfu/webext-bridge) 和 [VueUse](https://github.com/antfu/vueuse) 存储提供支持
- 🍃 [Windi CSS](https://windicss.org/) - 按需 CSS 工具
- 🦾 [TypeScript](https://www.typescriptlang.org/) - 类型安全
- 📦 [组件自动导入](./src/components)
- 🌟 [图标](./src/components) - 直接访问任何图标集中的图标
- 🌍 [国际化准备](src/locales)
- 🌛 黑暗模式 - 支持切换黑暗模式
- 📃 动态 `manifest.json`，具有完整的类型支持

## 预打包

### WebExtension 库

- [`webextension-polyfill-ts`](https://github.com/Lusito/webextension-polyfill-ts) - 带类型的 WebExtension 浏览器 API Polyfill
- [`webext-bridge`](https://github.com/antfu/webext-bridge) - 轻松实现上下文之间的通信

### Vite 插件

- [`vite-plugin-components`](https://github.com/antfu/vite-plugin-components) - 组件自动导入
- [`vite-plugin-windicss`](https://github.com/antfu/vite-plugin-windicss) - WindiCSS 支持
- [`@intlify/vite-plugin-vue-i18n`](https://github.com/intlify/bundle-tools/blob/main/packages/vite-plugin-vue-i18n/README.md) - 国际化支持

### Vue 插件

- [`vue-global-api`](https://github.com/antfu/vue-global-api) - 全局使用 Vue 组合 API
- [VueUse](https://github.com/antfu/vueuse) - 有用的组合 API 集合

### UI 框架

- [Windi CSS](https://github.com/windicss/windicss) - 下一代实用优先 CSS 框架

### 图标

- [Iconify](https://iconify.design) - 从任何图标集中使用图标 [🔍Icônes](https://icones.netlify.app/)
- [`vite-plugin-icons`](https://github.com/antfu/vite-plugin-icons) - 作为 Vue 组件的图标

### 编码风格

- 使用组合 API 和 [`<script setup>` SFC 语法](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) 与 [@antfu/eslint-config](https://github.com/antfu/eslint-config)，单引号，无分号

### 开发工具

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - 快速、节省磁盘空间的包管理器
- [tsup](https://github.com/egoist/tsup) - 零配置 TypeScript 打包工具，基于 esbuild
- [esno](https://github.com/antfu/esno) - 基于 esbuild 的 TypeScript / ESNext 节点运行时
- [npm-run-all](https://github.com/mysticatea/npm-run-all) - 并行或顺序运行多个 npm 脚本

## 使用模板

### 克隆到本地

如果您更喜欢手动操作以保持更干净的 git 历史

> 如果您没有安装 pnpm，请运行：npm install -g pnpm
