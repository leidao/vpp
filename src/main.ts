/*
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-09 10:02:04
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-26 13:51:49
 */
import 'uno.css'
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import './assets/element.scss'
import App from './App.vue'
import router from './router'
import 'virtual:svg-icons-register'
import 'simplebar-vue/dist/simplebar.min.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus, {
  locale: zhCn,
})

app.mount('#app')
