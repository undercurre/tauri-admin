import { baseUrl } from './base'
import { post, get } from '../../utils/request'

const moduleUrl = baseUrl + 'backend/user/'
const router = useRouter()
const notification = useNotification()

export async function Register(
  username: string,
  password: string,
  email: string,
  phone: string
) {
  const res = await post<{ id: number }>(moduleUrl + 'register', {
    username: username,
    password: password,
    email: email,
    phone: phone,
  })

  const mark = {
    isSuccess: res[1] && res[1].code === 0,
  }

  const lastRes = Object.assign({}, mark, res[1])

  return lastRes
}

export async function Login(username: string, password: string) {
  const res = await get<{ token: string; info: { [key: string]: any } }>(
    import.meta.env.VITE_APP_API_URL + 'backend/' + 'login',
    {
      username: username,
      password: password,
    }
  )

  const mark = {
    isSuccess: res[1] && res[1].code === 0,
  }

  const loginRes = Object.assign({}, mark, res[1])

  return loginRes
}

export async function GetInfo(id: number) {
  const res = await get<{
    username: string
    email: string
    phone: string
    roleId: string
  }>(moduleUrl + 'getInfo', {
    userId: id,
  })

  const mark = {
    isSuccess: res[1] && res[1].code === 0,
  }

  const lastRes = Object.assign({}, mark, res[1])

  return lastRes
}
