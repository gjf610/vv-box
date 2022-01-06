<script setup lang="ts">
import TopNav from '../components/TopNav.vue'
</script>

<template>
<div>
  <div class="topNavAndBanner">
    <TopNav/>
    <div class="banner">
      <h1>VV-box UI</h1>
      <h2>一个骑士色彩的UI框架</h2>
      <p class="actions">
        <a href="https://github.com/gjf610?tab=repositories">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <svg class="icon">
        <use xlink:href="#icon-vue"></use>
    </svg>
    <svg class="icon">
        <use xlink:href="#icon-ts"></use>
    </svg>
    <svg class="icon">
        <use xlink:href="#icon-light_idea"></use>
    </svg>    
  </div>
</div>

</template>
<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;
.topNavAndBanner {
  background: linear-gradient(145deg, rgba(227,255,253, 1) 0%, rgba(183,233,230,1) 100%);
}
.features {
  >svg {
    width: 64px;
    height: 64px;
  }
}
.banner{
  padding: 100px 0;
  color: $color;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  >.actions {
    padding: 8px 0;
    > a {
      margin: 0 8px;
      padding: 8px 24px;
      color: white;
      background: $green;
      display: inline-block;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>