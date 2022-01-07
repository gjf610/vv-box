<template>
  <div class="topNav">
    <router-link to="/" class="logo">
      <svg class="icon">
          <use xlink:href="#icon-V_G"></use>
      </svg>        
      <svg class="icon">
          <use xlink:href="#icon-V_B"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>
<script  lang="ts">
import { defineComponent, inject, Ref } from 'vue'
export default defineComponent({
  props:{
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    const toggleMenu = () => {
      if(menuVisible !== undefined){
        menuVisible.value = !menuVisible.value
      }
    }
    return { toggleMenu }
  },
})
</script>
<style lang="scss" scoped>
$color: #007974;

.topNav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  color: $color;  
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    >svg{
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>