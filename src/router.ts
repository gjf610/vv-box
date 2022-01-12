import { createWebHashHistory, createRouter } from "vue-router";
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Intro from "./views/intro.vue";
import Install from "./views/Install.vue";
import GetStarted from "./views/GetStarted.vue";
import ComponentDemo from './components/ComponentDemo';
import DocDemo from './components/DocDemo.vue';
import { h } from "vue";
const cDemoDoc = (filename: string) => h(ComponentDemo, { path: `./${filename}.doc.md`, key: filename })
const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc, children: [
        { path: '', component: DocDemo },
        { path: 'intro', component: Intro },
        { path: 'get-started', component: GetStarted },
        { path: 'install', component: Install },
        { path: 'switch', component: cDemoDoc('Switch') },
        { path: 'button', component: cDemoDoc('Button') },
        { path: 'dialog', component: cDemoDoc('Dialog') },
        { path: 'tabs', component: cDemoDoc('Tabs') }
      ]
    }

  ]
})