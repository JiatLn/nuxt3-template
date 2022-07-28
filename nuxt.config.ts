import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBase: process.env.BASE_URL,
    },
  },
  buildModules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `usePinia()`
          'defineStore',
          // automatically imports `usePinia()` as `usePiniaStore()`
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
  ],
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],
  components: {
    dirs: [
      '~/components',
    ],
  },
  unocss: {
    preflight: true,
  },
})
