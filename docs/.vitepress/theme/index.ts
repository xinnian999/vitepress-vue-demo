import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import {mdVueDemo} from '../../../dist'
import  '../../../dist/style.css'

const modules = import.meta.glob('../../demos/**/*', { eager: true })

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.use(mdVueDemo,{modules})
  }
} satisfies Theme