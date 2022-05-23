<script setup lang="ts">
definePageMeta({
  key: route => route.fullPath,
})

const route = useRoute()
</script>

<template>
  <div>child page: {{ route.params }}</div>
</template>

<style scoped lang="scss">
</style>
