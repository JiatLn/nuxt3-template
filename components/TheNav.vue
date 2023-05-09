<script setup lang="ts">
const { menuItems } = useMenu()
</script>

<template>
  <nav flex="~ c gap-30px" h-40px border-b>
    <template v-for="item in menuItems" :key="item.label">
      <NuxtLink v-if="item.isSingle" :to="item.route" active-class="text-brand-primary" hover:text-brand-primary flex="~" items-center>
        {{ item.label }}
      </NuxtLink>
      <div v-else relative class="nav-item">
        <div class="nav-item__label">
          {{ item.label }}
        </div>
        <div class="nav-item__sub-items">
          <div w-100px flex="~ col">
            <NuxtLink v-for="child in item.subMenu" :key="child.label" :to="child.route" active-class="text-brand-primary" transition="all" hover:text-brand-primary bg="white" text="black center" p-2 w-full>
              {{ child.label }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </template>
  </nav>
</template>

<style scoped lang="scss">
.nav-item {
  @apply h-full flex-c cp;

  .nav-item__label {
    @apply flex-c h-full;
  }

  &:hover .nav-item__sub-items {
    grid-template-rows: 1fr;
    @apply shadow border;
  }

  .nav-item__sub-items {
    position: absolute;
    top: 100%;
    left: 50%;
    display: grid;
    transform: translateX(-50%);
    transition: all .3s ease-in-out;

    grid-template-rows: 0fr;

    & > * {
      overflow: hidden;
    }
  }
}
</style>
