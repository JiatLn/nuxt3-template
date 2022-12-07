import type { NitroFetchRequest } from 'nitropack'
import type { UseFetchOptions } from '#app'
import { useUserStore } from '~/stores/user'

export const OK_CODE = 200

export function useRequest<T>(request: NitroFetchRequest | (() => NitroFetchRequest), options?: Partial<UseFetchOptions<T>>) {
  const userStore = useUserStore()
  const headers: HeadersInit = {}
  if (userStore.isLogin) {
    headers.Authorization = `Bearer ${userStore.token}`
  }
  return useFetch(request, {
    headers,
    ...options,
  })
}

