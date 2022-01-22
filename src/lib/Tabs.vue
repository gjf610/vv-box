<template>
  <div class="vv-tabs">
    <div class="vv-tabs-nav" ref="container">
      <div
        class="vv-tabs-item"
        :class="{ selected: t === selected }"
        v-for="(t, index) in titles"
        :key="index"
        :ref="el => { if (t === selected) selectedItem = el }"
        @click="select(t)"
      >{{ t }}</div>
      <div class="vv-tabs-nav-indicator" ref="indicator"></div>
    </div>
  </div>
  <div class="vv-tabs-content">
    <component class="vv-tabs-content-item" :is="current" :key="current.props.title" />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue'
import Tab from "./Tab.vue";
export default defineComponent({
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>();
    const indicator = ref<HTMLDivElement>();
    const container = ref<HTMLDivElement>();
    watchEffect(() => {
      if (selectedItem.value && indicator.value && container.value) {
        const { width } = selectedItem.value.getBoundingClientRect()
        indicator.value.style.width = width + 'px'
        const { left: left1 } = container.value.getBoundingClientRect()
        const { left: left2 } = selectedItem.value.getBoundingClientRect()
        const left = left2 - left1
        indicator.value.style.left = left + 'px'
      }
    })
    const defaults = context.slots.default!()
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    const current = computed(() => {
      return defaults.find(tag => (tag.props!.title === props.selected))
    })
    const titles = defaults.map(tag => {
      return tag.props!.title
    })
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    return { selectedItem, indicator, container, defaults, titles, current, select }
  },
})
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.vv-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-item {
    margin: 0 16px;
    padding: 8px 0;
    cursor: pointer;
    &:first-child {
      margin-left: 0;
    }
    &.selected {
      color: $blue;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>