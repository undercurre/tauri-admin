import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const moduleRoutes: Array<RouteRecordRaw> = [
  {
    name: 'personal',
    path: '/personal',
    meta: {
      title: '个人主页',
    },
    component: () => import('../view/personal/index.vue'),
  },
  {
    name: 'mission',
    path: '/mission',
    meta: {
      title: '任务中心',
    },
    component: () => import('../view/mission/index.vue'),
  },
]

export default moduleRoutes
