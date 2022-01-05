<template>
  <div>Tabs 组件</div>
  <component :is="defaults[0]"/>
  <component :is="defaults[1]"/>

</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Tab from "./Tab.vue";
export default defineComponent({
  setup(props, context) {
    const defaults = context.slots.default!()
    defaults.forEach(tag => {
      if(tag.type !== Tab){
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    return {defaults}
  },
})
</script>
