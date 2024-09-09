import { defineConfig } from "vitepress";
// import { mdVueDemoPlugin } from "../../dist";
import  mdVueDemoPlugin  from "../../src/mdVueDemoPlugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vitepress-vue-demo",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(mdVueDemoPlugin);
    },
  },
});
