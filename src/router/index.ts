import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
      path: '/',
      name: 'Index',
      meta: {
          title: '首页',
          keepAlive: true,
          requireAuth: true
      },
      component: () => import('../view/Mission.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
        title: '登录',
        keepAlive: true,
        requireAuth: true
    },
    component: () => import('../view/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
    if (!localStorage.getItem("token")) {
      // 如果没有
      if (to.name == "Login") {
        // 判断是否要去登陆界面如果是则放行
        next();
      } else {
        // 否则直接跳转登录界面
        router.push("Login");
      }
    } else {
      // 如果有则放行
      next();
    }
  });

export default router;