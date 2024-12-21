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
        component: () => import('@/views/redirect.vue')
      }
    ],
    meta: { hidden: true }
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