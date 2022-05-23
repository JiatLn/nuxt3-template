<script setup lang="ts">
const { menuItems } = useMenu()
</script>

<template>
  <nav flex="~ c gap-20px" h-40px>
    <template v-for="item in menuItems" :key="item.label">
      <NuxtLink v-if="item.isSingle" :to="item.route" active-class="text-brand-primary">
        {{ item.label }}
      </NuxtLink>
      <div v-else relative>
        <div>{{ item.label }}</div>
        <div absolute top="100%" flex="c col">
          <NuxtLink v-for="child in item.subMenu" :key="child.label" :to="child.route" active-class="text-brand-primary">
            {{ child.label }}
          </NuxtLink>
        </div>
      </div>
    </template>
  </nav>
</template>

<style scoped lang="scss">
</style>
