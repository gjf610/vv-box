<template>
  <div>Button示例</div>
  <h1>示例1</h1>
  <div>
    <Button @click="onClick" 
    @focus="onClick" 
    @mouseover="onClick"
    size="small">你好</Button> 
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Button from "../lib/Button.vue";
export default defineComponent({
  components: {Button},
  setup() {
    const onClick = () => {
      console.log('hi')
    }
    return {onClick}
  },
})
</script>
