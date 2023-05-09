import { useUserStore } from '~/stores/user'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      userStore: useUserStore(),
    },
  }
})
