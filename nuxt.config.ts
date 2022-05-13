import { defineNuxtConfig } from 'nuxt'

import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBase: process.env.BASE_URL,
    },
  },
  modules: [
    '@unocss/nuxt',
  ],
  components: true,
  vite: {
    plugins: [
      Components({
        dts: true,
        resolvers: [NaiveUiResolver()],
      }),
    ],
  },
  unocss: {
    preflight: true,
  },
})
