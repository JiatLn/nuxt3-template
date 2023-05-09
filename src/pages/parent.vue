<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <section>
    <div>parent page: {{ route.name }}</div>
    <NuxtPage :foobar="123" />
  </section>
</template>

<style scoped lang="scss">

</style>
