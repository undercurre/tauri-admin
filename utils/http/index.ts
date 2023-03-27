import { http } from '@tauri-apps/api'

type ResponseHandle = (data: ResponseData<unknown>) => unknown

interface RequestHeader {
  [key: string]: unknown
}

interface RequestData {
  [key: string]: unknown
}

interface ResponseData<T> {
  msg: string
  code: number
  data: T
}

export const get = <T>(
  url: string,
  params: RequestData = {},
  header: RequestHeader = {},
  filter?: ResponseHandle
): Promise<[any, ResponseData<T> | undefined]> =>
  new Promise((resolve) => {
    header = setAuth(header)
    params = setData(params)
    http
      .fetch(url, {
        headers: header,
        method: 'GET',
        // *** 注意：get请求的参数值必须为字符串，不然tauri会报错，这是tauri框架的要求；可以自己手动进行字符串强制转换 ***
        query: params,
      })
      .then((result) => {
        let res: ResponseData<T>
        if (filter !== undefined) {
          res = filter(
            result.data as unknown as ResponseData<unknown>
          ) as unknown as ResponseData<T>
        } else {
          res = result.data as ResponseData<T>
        }
        resolve([null, res as ResponseData<T>])
      })
      .catch((err) => {
        resolve([err, undefined])
      })
  })

export const post = <T>(
  url: string,
  data: RequestData,
  header: RequestHeader = {},
  params: RequestData = {},
  filter?: ResponseHandle
): Promise<[any, ResponseData<T> | undefined]> => {
  header = setAuth(header)
  params = setData(params)
  data = setData(data)
  return new Promise((resolve) => {
    http
      .fetch(url, {
        headers: header,
        method: 'POST',
        // *** 注意：get请求的参数值必须为字符串，不然tauri会报错，这是tauri框架的要求；可以自己手动进行字符串强制转换 ***
        query: params,
        body: http.Body.json(data),
      })
      .then((result) => {
        let res: ResponseData<T>
        if (filter !== undefined) {
          res = filter(
            result.data as unknown as ResponseData<unknown>
          ) as unknown as ResponseData<T>
        } else {
          res = result.data as ResponseData<T>
        }
        resolve([null, res as ResponseData<T>])
      })
      .catch((err) => {
        resolve([err, undefined])
      })
  })
}

function setAuth(header: any) {
  const token = '123'
  header['Authorization'] = `Bearer ${
    localStorage.getItem('token') || token || ''
  }`
  return header
}

function setData(data: any) {
  Object.keys(data).forEach((key) => {
    data[key] = data[key].toString()
  })
  return data
}
