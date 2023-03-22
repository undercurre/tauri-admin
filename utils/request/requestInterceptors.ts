export interface RequestHeaders {
  Authorization: string
  [key: string]: unknown
}

export function getDefaultHeaders() {
  const headers: RequestHeaders = {
    Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
  }
  return headers
}
