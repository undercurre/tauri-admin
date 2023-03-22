import { http } from '@tauri-apps/api'
import handleError from './handleError'
import { getDefaultHeaders, RequestHeaders } from './requestInterceptors'

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
  params: RequestData = {}
): Promise<[any, ResponseData<T> | undefined]> =>
  new Promise((resolve) => {
    const headers: RequestHeaders = getDefaultHeaders()
    console.log(url)
    http
      .fetch<ResponseData<T>>(url, {
        headers,
        method: 'GET',
        query: params,
      })
      .then((result) => {
        console.log(111)
        console.log(result)
        resolve([null, result.data as ResponseData<T>])
      })
      .catch((err) => {
        resolve([err, undefined])
      })
  })

export const post = <T>(
  url: string,
  data: Record<string, http.Part> | FormData
): Promise<[any, ResponseData<T> | undefined]> => {
  return new Promise((resolve) => {
    const headers: RequestHeaders = getDefaultHeaders()
    http
      .fetch<ResponseData<T>>(url, {
        headers,
        method: 'POST',
        body: http.Body.form({
          ...data,
        }),
      })
      .then((response) => {
        if (response.status !== 200) return Promise.reject(response.data)
        handleError.handleAuthError(response.data.code)
        resolve([null, response.data as ResponseData<T>])
      })
      .catch((err) => {
        handleError.handleNetworkError(err.response.status)
        resolve([err, undefined])
      })
  })
}
