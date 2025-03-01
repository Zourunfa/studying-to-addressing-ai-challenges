import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'AI Books Reading Notes',
  description: '人工智能书籍阅读笔记',
  theme: defaultTheme({
    // 导航栏
    navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],
    // 侧边栏
    sidebar: [
      '/notes/README.md',
      '/notes/ai-help-you-win.md',
    ],
  }),
})
