import { $fetch } from 'ohmyfetch'
import LRU from 'lru-cache'
import { hash as ohash } from 'ohash'

export async function sayHi(name: string) {
  return `Hello ${name} from server`
}

const cache = new LRU<string, any>({
  max: 500,
  ttl: 2000 * 60 * 60, // 2 hour
})

export type RecordParam = Record<string, string | number | undefined>

async function _baseFetch<T>(url: string, params: RecordParam = {}, headers: RecordParam = {}) {
  const { apiSecret } = useRuntimeConfig()
  return await $fetch<T>(url, {
    baseURL: `${apiSecret}`,
    params,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      ...headers,
    },
    responseType: 'json',
  })
}

export function baseFetch<T>(url: string, params: Record<string, string | number | undefined> = {}): Promise<T> {
  console.log('url', url)
  const hash = ohash([url, params])
  if (!cache.has(hash)) {
    cache.set(hash,
      _baseFetch(url, params)
        .catch((e) => {
          cache.delete(hash)
          throw e
        }),
    )
  }
  return cache.get(hash)!
}
