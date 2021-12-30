<template>
    <button class="vv-button" :class="`theme-${theme}`">
      <slot></slot>
    </button>  
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    theme: {
      type:String,
      default: 'button'
    },
  },
})
</script>

<style lang="scss" scoped>
div{
  border: 1px solid red
}
</style>