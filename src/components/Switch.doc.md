---
title: Switch component
dics: component
wrapperClass: switch-doc
---

常规用法
```vue demo
<template>
  <Switch v-model:value="bool" />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
const bool = ref<boolean>(false);
</script>
```


支持disable
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