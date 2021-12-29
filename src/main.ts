import { createApp } from 'vue'
import App from './App.vue'
import { createWebHashHistory, createRouter } from "vue-router";
import Jianfeng from './components/Jianfeng.vue';
import Jianfeng2 from './components/Jianfeng2.vue';

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Jianfeng },
    { path: '/2', component: Jianfeng2 }

  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')