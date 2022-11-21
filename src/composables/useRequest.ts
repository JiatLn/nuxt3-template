import type { NitroFetchRequest } from 'nitropack'
import type { UseFetchOptions } from '#app'
import { useUserStore } from '~/stores/user'

export const OK_CODE = 200
export interface FetchData<T> {
  msg: string
  code: number
  data: T
}
export interface FetchRow<T> {
  total: number
  rows: Array<T>
  code: number
  msg: number
}

export function useRequest<T>(request: NitroFetchRequest, options?: UseFetchOptions<T>) {
  const userStore = useUserStore()
  const headers = {} as Record<string, any>
  if (userStore.isLogin) {
    headers.Authorization = `Bearer ${userStore.token}`
  }
  return useFetch(request, {
    headers,
    ...options,
  })
}

