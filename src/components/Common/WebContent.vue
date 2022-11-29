<script setup lang="ts">
const props = defineProps<{
  content: string
}>()

function initWebComp() {
  if (!customElements.get('html-content')) {
    customElements.define('html-content',
      class extends HTMLElement {
        static get observedAttributes() {
          return ['content']
        }

        constructor() {
          super()

          const shadow = this.attachShadow({
            mode: 'open',
          })

          shadow.innerHTML = this.getAttribute('content') || ''
        }

        attributeChangedCallback(name: string, oldVal: string, newVal: string) {
          if (name === 'content') {
            const shadow = this.shadowRoot
            if (shadow) {
              shadow.innerHTML = newVal
            }
          }
        }
      },
    )
  }
}

initWebComp()

onMounted(() => {
  initWebComp()
})
</script>

<template>
  <html-content :content="props.content" />
</template>

<style scoped lang="less">

</style>
