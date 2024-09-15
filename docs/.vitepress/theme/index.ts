import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { Component } from "vue";
import  mdVueDemo  from "../../../src/mdVueDemo";
// import { mdVueDemo } from "../../../dist";
// import "../../../dist/style.css";

const modules = import.meta.glob<Component>("../../demos/**/*.vue", {
  eager: true,
  import: "default",
});

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.use(mdVueDemo, { modules });
  },
} satisfies Theme;
