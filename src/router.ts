import { createWebHashHistory, createRouter } from "vue-router";
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import ComponentDemo from './components/ComponentDemo';
import Markdown from "./components/Markdown";
import DocDemo from './components/DocDemo.vue';
import { h } from "vue";
const cDemoDoc = (filename: string) => h(ComponentDemo, { path: `../markdown/components/${filename}.doc.md`, key: filename })
const md = (filename: string) => h(Markdown, { path: `../markdown/md/${filename}.md`, key: filename })
const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc, children: [
        { path: '', component: DocDemo },
        { path: 'intro', component: md('intro') },
        { path: 'get-started', component: md('get-started') },
        { path: 'install', component: md('install') },
        { path: 'switch', component: cDemoDoc('Switch') },
        { path: 'button', component: cDemoDoc('Button') },
        { path: 'dialog', component: cDemoDoc('Dialog') },
        { path: 'tabs', component: cDemoDoc('Tabs') }
      ]
    }

  ]
})