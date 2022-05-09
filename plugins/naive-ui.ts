import { NButton, create } from 'naive-ui'

export default defineNuxtPlugin((nuxtApp) => {
  const naive = create({
    components: [NButton],
  })
  nuxtApp.vueApp.use(naive)
})

