import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      info: {
        email: '',
        phone: '',
        roleIds: '',
        userId: 0,
        username: '未登录',
      },
    }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {},
})
