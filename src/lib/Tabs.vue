<template>
  <div class="vv-tabs">
    <div class="vv-tabs-nav">
      <div class="vv-tabs-item" v-for="(t, index) in titles" :key="index">{{t}}</div>
    </div>
  </div>
  <div class="vv-tabs-content">
    <component class="vv-tabs-content-item" v-for="(c, index) in defaults" :is="c" :key="index"/>
  </div>

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
    const titles = defaults.map(tag => {
      return tag.props!.title
    })
    return {defaults, titles}
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
  }
  &-item {
    margin: 0 16px;
    padding: 8px 0;
    cursor: pointer;
    &:first-child{
      margin-left: 0;
    }
    &.selected {
      color: $color;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>