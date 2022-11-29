// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0',
      title: 'Nuxt3 Template',
      meta: [
        { name: 'description', content: 'This is an open source Nuxt3 project template.' },
        { name: 'keywords', content: 'nuxt3, vue3, template' },
      ],
    },
  },
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
  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => ['html-content'].includes(tag),
    },
  },
}
