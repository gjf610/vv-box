<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog :visible="x"/>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Dialog from "../lib/Dialog.vue";
import Button from '../lib/Button.vue';
export default defineComponent({
  components: { Dialog, Button },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    return {x, toggle}
  },
})
</script>