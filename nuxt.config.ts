import { defineNuxtConfig } from 'nuxt'

import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
  ],
  vite: {
    plugins: [
      Components({
        resolvers: [NaiveUiResolver()],
      }),
    ],
  },
  unocss: {
    preflight: true,
  },
})
