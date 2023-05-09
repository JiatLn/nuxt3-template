<script setup lang="ts">
import { useCounterStore } from '~/stores'

const store = useCounterStore()

const content = computed(() => `<span style="color: red">web-component ${store.count}</span>`)
</script>

<template>
  <div flex="c col" min-h="60vh">
    <div flex="c" space-x-10px>
      <h2 text="2xl" font-bold leading-40>
        Home
      </h2>
    </div>
    <LittleDemoTheVueUse />
    <div>
      <pre>{{ store.$state }}</pre>
      <button btn @click="store.increment()">
        +1
      </button>
    </div>
    <ClientOnly>
      <CommonWebContent :content="content" />
    </ClientOnly>
  </div>
</template>

<style scoped lang="less">

</style>
