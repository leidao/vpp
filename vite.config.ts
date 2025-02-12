import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'path'
import { presetUno } from 'unocss'
import Unocss from 'unocss/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
// const pathSrc = resolve(__dirname, "src");
// console.log('pathSrc', pathSrc);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    Unocss({
      presets: [
        presetUno(),
        // ...custom presets
      ],
      // safelist: safelist
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
    // 配置插件
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
    }),
    ElementPlus({
      useSource: true,
    }),
  ],
  server: {
    /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
    host: true, // host: "0.0.0.0"
    /** 端口号 */
    port: 3333,
    /** 是否自动打开浏览器 */
    open: true,
    /** 跨域设置允许 */
    cors: true,
    /** 端口被占用时，是否直接退出 */
    strictPort: false,
    /** 接口代理 */
    proxy: {
      '/api': {
        // target: "http://jdphtest.nat300.top/",
        // target: "http://1081de84.r10.cpolar.top",
        target: 'http://mm7rhy.natappfree.cc', //穿透地址
        // target: "http://192.168.43.37:8080/",
        // target: "http://localhost:3333/",
        // target: "http://10.41.233.36:8080/", // 内网地址
        ws: true,
        /** 是否允许跨域 */
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    /** 预热常用文件，提高初始页面加载速度 */
    warmup: {
      clientFiles: ['./src/layouts/**/*.vue'],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/element.scss" as *;`,
      },
    },
  },
  build: {
    outDir: 'docs',
  },
  base: '/vpp',
})
