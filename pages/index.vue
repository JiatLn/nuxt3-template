<script setup lang="ts">
const fn = useServerFn()

const data = await fn.sayHi('haha')
</script>

<template>
  <div>
    <div>这里是首页</div>
    <p>data: {{ data }}</p>
    <div text="xl red-400" i-carbon-home />
  </div>
</template>

<style scoped lang="scss">
</style>
