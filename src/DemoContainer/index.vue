<template>
  <ElConfigProvider namespace="vd">
  <div id="vp-demo">
    <div class="vp-demo-source  vp-raw">
      <slot name="source" />
    </div>

    <div class="vp-demo-actions">
      <ElTooltip
        v-for="{ message, icon, onClick } in actions"
        :content="message"
      >
        <div class="vp-demo-actions-icon" @click="onClick">
          <component :is="icon" />
        </div>
      </ElTooltip>
    </div>

    <div v-if="visible" v-html="sourceCode"></div>
  </div>
</ElConfigProvider>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";
import CodeIcon from "./CodeIcon.vue";
import CopyIcon from "./CopyIcon.vue";
import { ElMessage, ElTooltip ,ElConfigProvider} from "element-plus";
import './element.css'

const props = defineProps<{ code: string; expand: boolean }>();

const visible = ref(false);

const sourceCode = computed(() => decodeURIComponent(props.code));

const actions = [
  {
    message: "复制代码",
    icon: CopyIcon,
    onClick: () => {
      navigator.clipboard.writeText(sourceCode.value).then(() => {
        ElMessage.success("已复制！");
      });
    },
  },
  {
    message: "查看源代码",
    icon: CodeIcon,
    onClick: () => (visible.value = !visible.value),
  },
];

watchEffect(() => {
  
  visible.value = props.expand;
});
</script>

<style lang="less">
#vp-demo {
  border: 1px solid #eee;
  .vp-demo-source {
    padding: 20px;
    border-bottom: 1px solid #eee;
  }
  .vp-demo-actions {
    height: 50px;
    padding: 0 15px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: right;
    gap: 15px;
    align-items: center;
    .vp-demo-actions-icon {
      cursor: pointer;
      color: #999;
      width: 1.2em;
      &:hover {
        color: #000;
      }
    }
  }

  .language-vue {
    margin: 0;
    border-radius: 0;
  }
}
</style>
