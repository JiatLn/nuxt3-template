<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAsset } from '@/composables/useAsset'

const { $userStore } = useNuxtApp()
const { isLoggedIn } = storeToRefs($userStore)

const indexs = ref<number[]>([0, 1])
</script>

<template>
  <div flex="c col" gap-8 min-h-80vh>
    <div flex="c" space-x-10px>
      <h2 text="2xl" font-bold>
        Home
      </h2>
    </div>
    <!-- dynamic import image from assets -->
    <div flex-c>
      <div v-for="(item, index) in indexs" :key="index">
        <img :src="useAsset(`/assets/images/${index}.jpg`)" w-40>
      </div>
    </div>
    <div flex-c w-full>
      <button v-if="!isLoggedIn" btn flex-c @click="$userStore.login('a token')">
        <Icon name="pixelarticons:login" />
        <span ml-2>Login</span>
      </button>
      <button v-else btn @click="$userStore.logout()">
        <Icon name="pixelarticons:logout" />
        <span ml-2>Logout</span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
