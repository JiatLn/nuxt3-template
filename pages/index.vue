<script setup lang="ts">
import { useCounterStore } from '~~/stores/myStore'

const fn = useServerFn()

const data = await fn.sayHi('haha')

const store = useCounterStore()
</script>

<template>
  <div flex="c col" min-h="60vh">
    <h2 text="2xl" font-bold leading-40>
      Home Page
    </h2>
    <p>data: {{ data }}</p>
    <LittleDemoTheVueUse />
    <div>
      <pre>{{ store.$state }}</pre>
      <button btn @click="store.increment()">
        +1
      </button>
    </div>
  </div>
</template>

<style scoped lang="less">
</style>
