<script setup lang="ts">

const route = useRoute()
const currentRoute = computed<string>(() => route.name as string)
</script>

<template>
  <nav>
    {{ currentRoute }}
  </nav>
</template>

<style scoped lang="scss">
</style>
