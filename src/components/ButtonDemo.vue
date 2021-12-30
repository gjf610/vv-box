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
    <Button size="small">samll</Button>
  </div>
    <div>
    <Button theme="link" size="big">big</Button>
    <Button theme="link">normal</Button>
    <Button theme="link" size="small">samll</Button>
  </div>
    <div>
    <Button theme="text" size="big">big</Button>
    <Button theme="text">normal</Button>
    <Button theme="text" size="small">samll</Button>
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
