import Compression from 'vite-plugin-compression'

// https://nuxt.com/docs/api/configuration/nuxt.config
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
  modules: [
    '@nuxt/devtools',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-icon',
  ],
  components: {
    dirs: [
      '~/components',
    ],
  },
  devtools: {
    // Enable devtools (default: true)
    enabled: true,
    // VS Code Server options
    vscode: {},
    // ...other options
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
    plugins: [
      Compression({}), // gzip
    ],
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => ['html-content'].includes(tag),
    },
  },
}
