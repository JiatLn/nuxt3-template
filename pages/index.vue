<script setup lang="ts">
const fn = useServerFn()

const data = await fn.sayHi('haha')
</script>

<template>
  <div flex="c col" min-h="60vh">
    <h2 text="2xl" font-bold leading-40>
      Home Page
    </h2>
    <p>data: {{ data }}</p>
    <LittleDemoTheVueUse />
  </div>
</template>

<style scoped lang="less">
</style>
