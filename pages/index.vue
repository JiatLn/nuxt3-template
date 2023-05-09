<script setup lang="ts">
import { storeToRefs } from 'pinia'

const content = computed(() => '<span style="color: red">web-component 111</span>')

const { $userStore } = useNuxtApp()
const { isLoggedIn } = storeToRefs($userStore)
</script>

<template>
  <div flex="c col" min-h="60vh">
    <div flex="c" space-x-10px>
      <h2 text="2xl" font-bold leading-40>
        Home
      </h2>
    </div>
    <button v-if="!isLoggedIn" btn @click="$userStore.login('a token')">
      Login
    </button>
    <button v-else btn @click="$userStore.logout()">
      Logout
    </button>
    <LittleDemoTheVueUse />
    <ClientOnly>
      <CommonWebContent :content="content" />
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss">
</style>
