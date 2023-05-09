<script setup lang="ts">
definePageMeta({
  key: route => route.fullPath,
})

const childId = useRouteParam<string>('childId')
</script>

<template>
  <div>child page</div>
  <div>childId: {{ childId }}</div>
</template>

<style scoped lang="scss">
</style>
