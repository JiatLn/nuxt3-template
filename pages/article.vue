<script setup lang="ts">

</script>

<template>
  <section>
    <div>文章页</div>
    <div flex gap-16px>
      <NuxtLink :to="{ name: 'article-id', params: { id: '123' } }" btn>
        /page/123
      </NuxtLink>
      <NuxtLink :to="{ name: 'article' }" btn>
        文章页
      </NuxtLink>
    </div>
    <NuxtPage page-key="id" />
  </section>
</template>

<style scoped lang="scss"></style>
