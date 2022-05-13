import type { UseFetchOptions } from '#app'

export interface FetchResponse<T> {
  total: number
  rows: Array<T>
  code: number
  msg: number
}

type FetchOption<T> = UseFetchOptions<FetchResponse<T>>

async function useApiFetch<T>(url: string, options?: FetchOption<T>) {
  const config = useRuntimeConfig().public
  const { data, pending } = await useFetch<FetchResponse<T>>(url, {
    baseURL: config.apiBase,
    ...options,
  })
  if (pending)
    return data.value
}

export default useApiFetch
