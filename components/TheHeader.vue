<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <div>这是头部</div>
  </div>
</template>

<script setup lang="ts">
const title = ref<string>('这里是标题');
</script>

<style scoped lang="scss"></style>
