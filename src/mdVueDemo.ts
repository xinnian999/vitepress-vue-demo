import type { App, Component } from "vue";
import DemoContainer from "./DemoContainer/index.vue";

type Options={
    modules: Record<string, Component>
}

export default (
  app: App<Element>,
  options:Options
) => {
  const components = Object.entries(options.modules).map(([path, module]) => {
    const componentName = path
      .replaceAll("../", "")
      .replaceAll("./", "")
      .replaceAll("/", "-")
      .replace(/\.\w+$/, "");
    return {
      name: componentName,
      component: module,
    };
  });

  app.component("DemoContainer", DemoContainer);
  components.forEach(({ name, component }) => {
    app.component(name, component);
  });
};
