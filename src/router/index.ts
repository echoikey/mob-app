import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';

// 公共路由
const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        meta: {
          title: '系统首页',
          noAuth: true,
        },
        component: () => import('@/views/Dashboard.vue')
      },
      {
        path: '/system-user',
        name: 'system-user',
        meta: {
          title: '用户管理',
          permiss: '11',
        },
        component: () => import('@/views/system/user.vue')
      }
    ]
  },
  {
    path: '/404',
    meta: {
      title: '找不到页面',
      noAuth: true,
    },
    component: () => import('@/views/error/404.vue'),
  },
  {
    path: '/401',
    meta: { 
      title: '没有权限',
      noAuth: true,
    },
    component: () => import('@/views/error/401.vue'),
  },
]

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export default router;
