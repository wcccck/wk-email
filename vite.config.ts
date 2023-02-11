import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),viteJsx()],
  server:{
    proxy:{
      '/api':{
        target:"http://localhost:7777",
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/api/,'')
      },

    }
  }
})
