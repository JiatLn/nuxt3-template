// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  runtimeConfig: {
    apiSecret: process.env.BASE_URL,
  },
  srcDir: 'src/',
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
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  i18n: {
    lazy: true,
    locales: [
      {
        code: 'zhCn',
        file: 'zhCn.json',
      },
      {
        code: 'en',
        file: 'en.json',
      },
    ],
    defaultLocale: 'en',
    langDir: 'locales',
    vueI18n: {
      locale: 'en',
    },
    strategy: 'prefix_except_default',
  },
  components: {
    dirs: [
      '~/components',
    ],
  },
  unocss: {
    preflight: true,
  },
  vite: {
    optimizeDeps: {
      include: [
        'vue',
      ],
    },
  },
}
