import { createWebHashHistory, createRouter } from "vue-router";
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Markdown from "./components/Markdown";
import Intro from "./markdown/md/intro.md";
import Install from "./markdown/md/install.md";
import GetStarted from "./markdown/md/get-started.md";
import Switch from './markdown/components/Switch.md';
import Button from './markdown/components/Button.md';
import Dialog from './markdown/components/Dialog.md';
import Tabs from './markdown/components/Tabs.md';

import { h } from "vue";

const md = (component: any) => {
  const { title } = component.$vd.matter
  return h(Markdown, { component, title, key: title })
}


const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc, children: [
        { path: '', redirect: '/doc/intro' },
        { path: 'intro', component: md(Intro) },
        { path: 'get-started', component: md(GetStarted) },
        { path: 'install', component: md(Install) },
        { path: 'switch', component: md(Switch) },
        { path: 'button', component: md(Button) },
        { path: 'dialog', component: md(Dialog) },
        { path: 'tabs', component: md(Tabs) }
      ]
    }
  ]
})