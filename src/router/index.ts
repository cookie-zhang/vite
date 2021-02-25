/*
 * @Author: your name
 * @Date: 2021-02-23 13:08:07
 * @LastEditTime: 2021-02-23 13:13:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite/src/router/index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        meta:{},
        component: () => import('../views/home.vue')
    },
    {
        path: '/login',
        name: 'Login',
        meta:{},
        component: () => import('../views/login.vue')
    }

]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;