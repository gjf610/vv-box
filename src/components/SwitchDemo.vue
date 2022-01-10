<template>
  <div>
    <h1>Switch 组件实例</h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <Switch1Demo />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
      </div>
    </div>
    <div class="demo">
      <h2>支持disabled</h2>
      <div class="demo-component">
        <Switch2Demo />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>&lt;Switch v-model:value="bool"  disabled /&gt;</pre>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Switch from "../lib/Switch.vue";
import Button from "../lib/Button.vue";
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";

export default defineComponent({
  components: { Switch, Button, Switch1Demo, Switch2Demo },
  setup() {
    const bool = ref<boolean>(false)
    return { bool }
  },
})
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  margin: 16px 0 32px;
  border: 1px solid $border-color;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      margin: 0;
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
    }
  }
}
</style>