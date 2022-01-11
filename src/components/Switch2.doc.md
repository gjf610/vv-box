---
title: Switch disabled
dics: component
wrapperClass: test-switch
---
```vue demo
<template>
  <Switch v-model:value="bool" disabled />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
const bool = ref<boolean>(false);
</script>
```