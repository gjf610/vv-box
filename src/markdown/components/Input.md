---
title: Input组件实例
dics: component
wrapperClass: input-doc
---

常规用法
```vue demo
<template>
  <Input value="VV"/>
</template>
<script lang="ts" setup>

import Input from "../../lib/Input.vue";
</script>
```

禁用
```vue demo
<template>
  <Input value="OOO" disabled/>
</template>
<script lang="ts" setup>

import Input from "../../lib/Input.vue";
</script>
```

只读
```vue demo
<template>
  <Input value="Fourze" readonly/>
</template>
<script lang="ts" setup>

import Input from "../../lib/Input.vue";
</script>
```

错误模式
```vue demo
<template>

  <Input value="魔" error="姓名不能少于两个字"/>
</template>
<script lang="ts" setup>

import Input from "../../lib/Input.vue";
</script>
```

change
```vue demo
<template>
  <Input value="铠武" @change="inputChange"/>
</template>
<script lang="ts" setup>
import Input from "../../lib/Input.vue";
const inputChange = (e) => {
  console.log(e.target.value)
}
</script>
```