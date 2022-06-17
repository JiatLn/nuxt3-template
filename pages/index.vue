<script setup lang="ts">
const fn = useServerFn()

const data = await fn.sayHi('haha')
</script>

<template>
  <div>
    <div>
      home page
    </div>
    <p>data: {{ data }}</p>
    <LittleDemoTheVueUse />
  </div>
</template>

<style scoped lang="scss">
</style>
