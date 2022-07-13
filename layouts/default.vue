<script setup lang="ts"></script>

<template>
  <main>
    <TheNav />
    <div min-h="[calc(100vh-80px)]">
      <slot />
    </div>
    <TheFooter />
  </main>
</template>

<style scoped lang="less">
</style>
