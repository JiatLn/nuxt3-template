<script setup lang="ts">
const content = computed(() => '<span style="color: red">web-component 111</span>')
</script>

<template>
  <div flex="c col" min-h="60vh">
    <div flex="c" space-x-10px>
      <h2 text="2xl" font-bold leading-40>
        Home
      </h2>
    </div>
    <LittleDemoTheVueUse />
    <ClientOnly>
      <CommonWebContent :content="content" />
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss">
</style>
