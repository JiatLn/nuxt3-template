import { defineNuxtConfig } from 'nuxt'

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
  unocss: {
    preflight: true,
  },
})
