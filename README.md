# 现代化 Chrome 扩展 Vite 启动模板

> 一个基于 [Vite](https://vitejs.dev/) 的 `现代化 Chrome 扩展清单 V3` ([Chrome](https://developer.chrome.com/docs/extensions/mv3/getstarted/)) 启动模板。

## 特性

- ⚡️ **即时热更新** - 在开发中使用 **Vite**（无需刷新！）
- 🥝 Vue 3 - 组合 API，[`<script setup>` 语法](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md) 等等！
- 💬 轻松通信 - 由 [`webext-bridge`](https://github.com/antfu/webext-bridge) 和 [VueUse](https://github.com/antfu/vueuse) 存储提供支持
- 🍃 [TailWindCSS](https://tailwindcss.com/) - 原子化 CSS 框架
- 🦾 [TypeScript](https://www.typescriptlang.org/) - 类型安全
- 🌟 [图标](https://icon-sets.iconify.design/icon-park-outline/) - 使用 IconPark Outline 图标集
- 🌛 黑暗模式 - 支持切换黑暗模式
- 📃 动态 `manifest.json`，具有完整的类型支持

## 预打包

### WebExtension 库

- [`webextension-polyfill-ts`](https://github.com/Lusito/webextension-polyfill-ts) - 带类型的 WebExtension 浏览器 API Polyfill
- [`webext-bridge`](https://github.com/antfu/webext-bridge) - 轻松实现上下文之间的通信

### Vue 插件

- [`vue-global-api`](https://github.com/antfu/vue-global-api) - 全局使用 Vue 组合 API
- [VueUse](https://github.com/antfu/vueuse) - 有用的组合 API 集合

### UI 框架

- [TailWindCSS](https://tailwindcss.com/) - 原子化 CSS 框架

### 图标

- [Iconify](https://iconify.design) - 使用 [IconPark Outline](https://icon-sets.iconify.design/icon-park-outline/) 图标集中的图标 

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

如果您喜欢手动操作以保持更干净的 git 历史

> 如果您没有安装 pnpm，请运行：npm install -g pnpm
