import markdownItContainer from "markdown-it-container";
import path from "path";
import fs from "fs";
import type MarkdownIt from "markdown-it";

export default (md: MarkdownIt) => {
  
  md.use(markdownItContainer, "demo", {
    validate: (params: string) => {
      return params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens:any[], idx: number) {

      const record=tokens[idx]
      
      if (record.nesting === 1) {
        const filePath = tokens[idx + 2].content;
        
        const sourcePath = path.resolve("docs", filePath);

        const source = fs.readFileSync(sourcePath, "utf-8");

        const codeRender=encodeURIComponent(
          md.render(`\`\`\` vue\n${source}\`\`\``)
        )

        return `<DemoContainer code="${codeRender}" expand="${record.info.includes('expand')}"><template #source><${filePath
          .split(".")[0]
          .replaceAll("/", "-")}/></template>`; // 开始标签
      } else {
        // 处理结束标签
        return "</DemoContainer>\n"; // 结束标签
      }
    },
  });
};
