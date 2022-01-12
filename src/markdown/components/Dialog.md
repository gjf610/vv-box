---
title: Dialog组件实例
dics: component
wrapperClass: ''
---

常规用法
```vue demo
<template>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" 
  :closeOnClickOverlay="false"
  :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      <strong>你好</strong>
      <div>hi</div>    
    </template>
  </Dialog>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Dialog from "../../lib/Dialog.vue";
import Button from "../../lib/Button.vue";

const x = ref<boolean>(false)
const toggle = () => {
  x.value = !x.value
}
const f1 = () => {
  return false
}
const f2 = () => {}
</script>
```


一键打开 Dialog
```vue demo
<template>
  <Button @click="showDialog">
    打开对话框
  </Button>
</template>
<script lang="ts" setup>
import { h } from "vue";
import Button from '../../lib/Button.vue'
import {
  openDialog
} from "../../lib/openDialog";
const showDialog = () => {
  openDialog({
    title: h('strong', {}, '标题'),
    content: '你好',
    ok() {
      console.log('ok')
    },
    cancel() {
      console.log('cancel')
    }
  })
}
</script>
```