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
  <Input :value="gaim" @change="inputChange"/>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import Input from "../../lib/Input.vue";
const gaim = ref('铠武')
const inputChange = (e) => {
  console.log(e.target.value)
}
</script>
```

支持v-model
```vue demo
<template>
  <Input v-model:value="drive"/>
  <p>{{drive}}</p>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import Input from "../../lib/Input.vue";
const drive = ref('驱动')
</script>
```