<template>
  <div>Button示例</div>
  <h1>示例1</h1>
  <div>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button size="big">big</Button>
    <Button>normal</Button>
    <Button size="small">small</Button>
  </div>
    <div>
    <Button theme="link" size="big">big</Button>
    <Button theme="link">normal</Button>
    <Button theme="link" size="small">small</Button>
  </div>
    <div>
    <Button theme="text" size="big">big</Button>
    <Button theme="text">normal</Button>
    <Button theme="text" size="small">small</Button>
  </div>
  <h1>示例3</h1>
  <div>
    <Button level="main">main button</Button>
    <Button>normal button</Button>
    <Button level="danger">danger button</Button>
  </div>
    <div>
    <Button theme="link" level="main">main link</Button>
    <Button theme="link">normal link</Button>
    <Button theme="link" level="danger">danger link</Button>
  </div>
    <div>
    <Button theme="text" level="main">main text</Button>
    <Button theme="text">normal text</Button>
    <Button theme="text" level="danger">danger text</Button>
  </div>
  <h1>示例4</h1>
  <div>
    <Button disabled>你好</Button>
    <Button :disabled="true">你好</Button>
    <Button theme="link" disabled>你好</Button>
    <Button theme="text" disabled>你好</Button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Button from "../lib/Button.vue";
export default defineComponent({
  components: {Button},
  setup() {

  },
})
</script>
