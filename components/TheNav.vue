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
          <NuxtLink v-for="child in item.subMenu" :key="child.label" :to="child.route" active-class="text-brand-primary" transition="all" hover:text-brand-primary bg="black" text="white center" px-2 py-1 w-full>
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
      height: fit-content;
      opacity: 1;
    }
  }

  .nav-item__sub-items {
    left: 50%;
    overflow: hidden;
    width: 100px;
    height: 0;
    transform: translateX(-50%);
    opacity: 0;
    @apply transition-all transition-duration-600ms;
  }
}
</style>
