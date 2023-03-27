import { baseUrl } from './base'
import { post, get } from '../../utils/http'

const moduleUrl = baseUrl + 'backend/mission/'

export async function CreateMission(
  missionname: string,
  deadline: string,
  detail: string
) {
  let info = {
    userId: 0,
    email: '',
    phone: '',
    username: '',
    roleIds: '',
  }
  if (typeof localStorage.getItem('info') === 'string') {
    info = JSON.parse(localStorage.getItem('info') as string)
  }
  const res = await post<{ id: number }>(moduleUrl + 'create', {
    userId: info.userId,
    detail: detail,
    missionname: missionname,
    deadline: deadline,
  })

  const mark = {
    isSuccess: res[1] && res[1].code === 0,
  }

  const lastRes = Object.assign({}, mark, res[1])

  return lastRes
}

export async function QueryMission(userId: number) {
  const res = await get<{
    list: Array<Mission> | null
    page: number
    size: number
    total: number
  }>(moduleUrl + 'queryByUser', {
    userId: userId,
  })

  const mark = {
    isSuccess: res[1] && res[1].code === 0,
  }

  const lastRes = Object.assign({}, mark, res[1])

  return lastRes
}

export async function UpdateMission(
  missionId: number,
  missionname: string,
  deadline: string,
  status: number
) {
  const res = await post<{ id: number }>(moduleUrl + 'update', {
    missionId: missionId,
    missionName: missionname,
    status: status,
    deadline: deadline,
  })

  const mark = {
    isSuccess: res[1] && res[1].code === 0,
  }

  const lastRes = Object.assign({}, mark, res[1])

  return lastRes
}

export async function deleteMission(missionId: number) {
  const res = await post<{ id: number }>(moduleUrl + 'delete', {
    missionId: missionId,
  })

  const mark = {
    isSuccess: res[1] && res[1].code === 0,
  }

  const lastRes = Object.assign({}, mark, res[1])

  return lastRes
}
