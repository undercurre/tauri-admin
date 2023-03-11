import { defineStore } from 'pinia'
import { QueryMission, UpdateMission } from '../api/mission'
import { userStore } from './collection'

export const useMissionStore = defineStore('mission', {
  state: () => {
    return {
      all: [
        {
          id: 0,
          name: '',
          detail: '',
          status: '',
          userId: '',
          dealline: '',
          createtime: '',
          updatetime: '',
        },
      ],
    }
  },
  getters: {
    completeMission(state) {
      return state.all.filter((item) => item.status === '1')
    },
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
    async updateMission() {
      const res = await QueryMission(userStore.info.userId)
      this.all = res.data.list ?? []
    },
    async changeMissionStatus(id: number) {
      const handleIndex = this.all.findIndex((item) => item.id === id)
      if (handleIndex > -1) {
        console.log(3, parseInt(this.all[handleIndex].status))
        const res = await UpdateMission(
          id,
          this.all[handleIndex].name,
          this.all[handleIndex].dealline,
          parseInt(this.all[handleIndex].status)
        )
        this.updateMission()
      }
    },
  },
})
