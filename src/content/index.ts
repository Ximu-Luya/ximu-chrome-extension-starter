/* eslint-disable no-console */
import { onMessage } from 'webext-bridge'

console.info('[ximu-chrome-extension-starter] Hello world from content script')

// 通信示例：从后台页面发送上一个标签页的标题
onMessage('tab-prev', ({ data }) => {
  console.log(`[ximu-chrome-extension-starter] Navigate from page "${data.title}"`)
})
