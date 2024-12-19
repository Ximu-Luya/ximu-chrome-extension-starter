const { addIconSelectors } = require("@iconify/tailwind")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,vue,html}"],
  theme: {
    extend: {},
  },
  plugins: [
    // Iconify 插件用于清晰的选择器，需要编写要加载的图标集列表
    // HTML 中的图标用法：
    //  <span class="iconify icon-park-outline--home"></span>
    addIconSelectors(["icon-park-outline"]),
  ],
}
