// createRouter 是 Vue3 中 Vue Router 的核心函数，用于创建和管理应用的路由。
// createWebHashHistory 是 Vue Router 提供的一种路由模式，
// 它是通过利用 URL 的 hash 部分来实现客户端路由跳转。
// RouteRecordRaw 是 Vue3 路由系统中核心的类型，用于定义和配置路由。
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/Home',
  },
  {
    path: '/Home',
    component: () => import('@/views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


export default router;
