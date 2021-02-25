/*
 * @Author: your name
 * @Date: 2021-02-23 13:02:41
 * @LastEditTime: 2021-02-23 15:01:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'; // 全局引入样式
import ant from "./util/ant";
import './util/rem.ts'

createApp(App)
.use(router)
.use(store)
.use(ant)
.mount('#app')
