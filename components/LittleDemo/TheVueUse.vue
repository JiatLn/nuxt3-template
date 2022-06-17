<script setup lang="ts">
const { x, y } = useMouse()
</script>

<template>
  <div text-center w-200px h-100px flex="c col" rounded shadow m-4 border="~ dashed brand-primary">
    <h5>
      Vueuse Supported
    </h5>
    pos: {{ x }}, {{ y }}
  </div>
</template>

<style scoped lang="scss">
</style>
