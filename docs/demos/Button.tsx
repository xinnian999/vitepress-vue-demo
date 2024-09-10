import { defineComponent } from "vue";
import { ElButton } from "element-plus";

export default defineComponent({
  setup() {
    return () => (
      <div>
        <ElButton>Default</ElButton>
        <ElButton type="primary">Primary</ElButton>
        <ElButton type="success">Success</ElButton>
        <ElButton type="info">Info</ElButton>
        <ElButton type="warning">Warning</ElButton>
        <ElButton type="danger">Danger</ElButton>
      </div>
    );
  },
});
