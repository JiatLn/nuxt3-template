<script setup lang="ts">
const { menuItems } = useMenu()
</script>

<template>
  <nav flex="~ c gap-20px" h-40px>
    <template v-for="item in menuItems" :key="item.label">
      <NuxtLink v-if="item.isSingle" :to="item.route" active-class="text-brand-primary">
        {{ item.label }}
      </NuxtLink>
      <div v-else relative class="nav-item">
        <div>{{ item.label }}</div>
        <div absolute top="100%" left="0" flex="c col" class="nav-item__sub-items">
          <NuxtLink v-for="child in item.subMenu" :key="child.label" :to="child.route" active-class="text-brand-primary" transition="all" hover:text-brand-primary bg="black" text-white px-2 py-1>
            {{ child.label }}
          </NuxtLink>
        </div>
      </div>
    </template>
  </nav>
</template>

<style scoped lang="scss">
.nav-item {
  @apply cursor-pointer transition-all;

  &:hover {
    .nav-item__sub-items {
      height: 100px;
    }
  }

  .nav-item__sub-items {
    // top: 50%;
    left: 50%;
    overflow: hidden;
    height: 0;
    transform: translateX(-50%);
    @apply transition-all;
  }
}
</style>
