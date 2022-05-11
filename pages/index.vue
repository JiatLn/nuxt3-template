<script setup lang="ts">
import TheCarousel from '~~/components/Home/TheCarousel.vue'

definePageMeta({
  title: 'Some Page',
})
</script>

<template>
  <div>
    <TheCarousel />
    <div>这里是首页</div>
    <n-button>naive-ui</n-button>
  </div>
</template>

<style scoped lang="scss"></style>
