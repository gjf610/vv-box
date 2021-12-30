<template>
  <Switch :value="y" @input="y = $event"/>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Switch from "../lib/Switch.vue";
export default defineComponent({
  components: {Switch},
  setup() {
    const y = ref<boolean>(false)
    return { y }
  },
})
</script>
