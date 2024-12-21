// createRouter 是 Vue3 中 Vue Router 的核心函数，用于创建和管理应用的路由。
// createWebHashHistory 是 Vue Router 提供的一种路由模式，
// 它是通过利用 URL 的 hash 部分来实现客户端路由跳转。
// RouteRecordRaw 是 Vue3 路由系统中核心的类型，用于定义和配置路由。
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layouts/Layout.vue';

// 公共路由
const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: Layout,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/home/index.vue'),
        name: 'Index',
        meta: { title: '首页', icon: 'dashboard', affix: true },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/error/404.vue'),
    meta: { hidden: true },
  },
  {
    path: '/401',
    component: () => import('@/views/error/401.vue'),
    meta: { hidden: true },
  },
]

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export default router;