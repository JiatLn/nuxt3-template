<script setup>
useHead({
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/icon.png',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
