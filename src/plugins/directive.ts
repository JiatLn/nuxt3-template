export default defineNuxtPlugin(nuxtApp =>
  nuxtApp.vueApp.directive('focus', {
    mounted(el: HTMLInputElement) {
      setTimeout(() => {
        el.focus()
      }, 1000)
    },
  }),
)
