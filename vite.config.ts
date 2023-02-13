import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteJsx from '@vitejs/plugin-vue-jsx'
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),viteJsx(),createSvgIconsPlugin({
    iconDirs:[path.resolve(process.cwd(),'src/assets/icons/svg')],
    symbolId:'icon-[dir]-[name]'
  })],
  server:{
    proxy:{
      '/api':{
        target:"http://localhost:7777",
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/api/,'')
      },

    }
  },
  resolve:{
    alias:{
      '@':path.join(__dirname,'/src')
    }
  }
})
