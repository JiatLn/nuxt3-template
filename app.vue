<script setup>
useHead({
  title: '这里是标题',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/icon.png',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
