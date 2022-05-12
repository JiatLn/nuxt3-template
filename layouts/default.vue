<script setup lang="ts"></script>

<template>
  <main>
    <TheNav />
    <TheHeader />
    <div min-h-100vh>
      <slot />
    </div>
    <TheFooter />
  </main>
</template>

<style scoped lang="scss"></style>
