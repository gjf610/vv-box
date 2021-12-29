<script setup lang="ts">
import Jianfeng from "./components/Jianfeng.vue";
</script>

<template>
  <div>
    导航栏|
    <router-link to="/">Jianfeng</router-link>
    <router-link to="/2">Jianfeng2</router-link>
  </div>
  <hr />
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
