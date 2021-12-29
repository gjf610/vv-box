<script setup lang="ts">
import TopNav from '../components/TopNav.vue'


</script>

<template>
  <div>
    <TopNav/>
    <div class="banner">
      <h1>VV-box UI</h1>
      <h2>一个骑士色彩的UI框架</h2>
      <p class="actions">
        <a>Github</a>
        <a>开始</a> 
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.banner{
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  >.action {
    padding: 8px 0;
    a {
      margin: 0 8px;
      padding: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
    }
  }
}
</style>