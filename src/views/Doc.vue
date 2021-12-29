<script  lang="ts">
import { inject, Ref } from "vue";
import TopNav from "../components/TopNav.vue";
export default {
  components: {TopNav},
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    return {
      menuVisible
    }    
  }
}

</script>
<template>
  <div>
    <TopNav />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<style lang="scss" scoped>
aside {
  background: lightskyblue;
  width: 150px;
  padding: 16px;

  >h2{
    margin-bottom: 4px;
  }
  > ol {
    > li{
      padding: 4px 0;
    }
  }
  @media (max-width: 500px) {
      position: fixed;
  top: 0;
  left: 0;
  padding-top: 80px;
  }
}
</style>