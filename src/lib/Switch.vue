<template>
  <button class="vv-switch" :class="{'vv-checked': value}" @click="toggle">
    <span></span>
  </button>
</template>
<script  lang="ts">
import {  defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return {toggle}
  }
})
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.vv-switch{
  height: $h;
  width: $h*2;
  border: none;
  background: #bfbfbf;
  border-radius: calc($h/2);
  position: relative;
  > span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: calc($h2/2);
    transition: all 250ms ease-in;
  }
  &.vv-checked {
    background: greenyellow;
    > span {
      left: calc(100% - $h2 - 2px);
    }
    &:active{
      > span {width: $h2 + 4px; margin-left: -4px;}
  }
  }
  &:focus {
    outline: none;
  }
  &:active{
    > span {width: $h2 + 4px;}
  }
}

</style>