<template>
  <div>
    <h1>Switch 组件实例</h1>
    <div class="demo">
      <h2>常规用法</h2>
      <Switch1Demo />
    </div>
    <div class="demo">
      <h2>支持disabled</h2>
      <Switch2Demo />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Switch1Demo from "./Switch1.doc.md";
import Switch2Demo from "./Switch2.doc.md";
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