<template>
  <div>
    <div class="topNav">
      <div class="logo">LOGO</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
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
.topNav {
  background: pink;
  display: flex;
  padding: 16px;
  >.logo{
    max-width: 6em;
    margin-right: auto;
    >.meun{
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;
      > li{
        margin: 0 1em;
      }
    }
  }
}
</style>