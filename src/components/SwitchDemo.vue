<template>
  <Switch v-model:value="value"/>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Switch from "../lib/Switch.vue";
export default defineComponent({
  components: {Switch},
  setup() {
    const value = ref<boolean>(false)
    return { value }
  },
})
</script>
