import type { UseFetchOptions } from '#app'

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

type FetchType = FetchData<any> | FetchRow<any>

async function useApiFetch<T extends FetchType>(url: string, opts?: UseFetchOptions<unknown>): Promise<T> {
  const config = useRuntimeConfig().public
  const { data } = await useFetch(url, {
    baseURL: config.apiBase,
    ...opts,
  })
  return data.value as T
}

export default useApiFetch
