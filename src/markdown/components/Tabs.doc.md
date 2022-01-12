---
title: Tabs component
dics: component
wrapperClass: tabs-doc
---

常规用法
```vue demo
<template>
  <Tabs v-model:selected="x">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from 'vue'
import Tabs from "../../lib/Tabs.vue";
import Tab from "../../lib/Tab.vue";
const x = ref<string>('导航1')
</script>
```