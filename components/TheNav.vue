<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { NuxtLink } from '#components'

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        NuxtLink, { to: { name: 'index' } },
        { default: () => '首页' },
      ),
    key: 'index',
  }, {
    label: () =>
      h(
        NuxtLink, { to: { name: 'article' } },
        { default: () => '文章' },
      ),
    key: 'article',
  }, {
    label: () =>
      h(
        NuxtLink, { to: { name: 'about' } },
        { default: () => '关于' },
      ),
    key: 'about',
  },
]

const route = useRoute()
const selectedKey = ref<string>(route.name as string || 'index')
</script>

<template>
  <nav>
    <n-menu v-model:value="selectedKey" mode="horizontal" :options="menuOptions" />
  </nav>
</template>

<style scoped lang="scss"></style>
