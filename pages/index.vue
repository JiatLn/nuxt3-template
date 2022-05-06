<template>
  <div>
    <TheCarousel />
    <div text-red font-bold>这里是首页</div>
  </div>
</template>

<script setup lang="ts">
import TheCarousel from '~~/components/Home/TheCarousel.vue';

definePageMeta({
  title: 'Some Page',
});
</script>

<style scoped lang="scss"></style>
