import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import { createPlugin, vueDocFiles } from 'vite-plugin-vuedoc'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createPlugin({
      highlight: {
        theme: 'one-light'
      }
    }),
    vue({
      include: [/\.vue$/, /\.md$/, ...vueDocFiles],
    }),
    vueJsx(),

  ]
})
