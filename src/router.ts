import { createWebHashHistory, createRouter } from "vue-router";
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Markdown from "./components/Markdown";
import DocDemo from './components/DocDemo.vue';
import { h } from "vue";
const md = (address: string, filename: string) => h(Markdown, { path: `../markdown/${address}/${filename}.md`, key: filename })
const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc, children: [
        { path: '', component: DocDemo },
        { path: 'intro', component: md('md', 'intro') },
        { path: 'get-started', component: md('md', 'get-started') },
        { path: 'install', component: md('md', 'install') },
        { path: 'switch', component: md('components', 'Switch') },
        { path: 'button', component: md('components', 'Button') },
        { path: 'dialog', component: md('components', 'Dialog') },
        { path: 'tabs', component: md('components', 'Tabs') }
      ]
    }

  ]
})