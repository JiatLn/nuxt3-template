import type { ComputedRef } from 'vue'

export function useRouteParam<T = string>(name: string, init?: T): ComputedRef<T> {
  const route = useRoute()
  return computed(() => route.params[name] as any ?? init)
}

export function useRouteQuery<T = string>(name: string, init?: T): ComputedRef<T> {
  const route = useRoute()
  return computed(() => route.query[name] as any ?? init)
}

