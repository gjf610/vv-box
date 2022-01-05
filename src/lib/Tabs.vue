<template>
  <div class="vv-tabs">
    <div class="vv-tabs-nav">
      <div class="vv-tabs-item" :class="{selected: t === selected}"
       v-for="(t, index) in titles" :key="index" @click="select(t)">{{t}}</div>
      <div class="vv-tabs-nav-indicator"></div>
    </div>
  </div>
  <div class="vv-tabs-content">
    <component class="vv-tabs-content-item" :is="current" :key="current.props.title"/>
  </div>

</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import Tab from "./Tab.vue";
export default defineComponent({
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const defaults = context.slots.default!()
    defaults.forEach(tag => {
      if(tag.type !== Tab){
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    const current = computed(()=>{
      return defaults.find(tag=>(tag.props!.title === props.selected))
    })
    const titles = defaults.map(tag => {
      return tag.props!.title
    })
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    return {defaults, titles, current, select}
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
    }
  }
  &-item {
    margin: 0 16px;
    padding: 8px 0;
    cursor: pointer;
    &:first-child{
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