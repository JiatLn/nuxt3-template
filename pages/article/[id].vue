<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>我是子页面 {{ route.params }}</div>
</template>

<style scoped lang="scss"></style>
