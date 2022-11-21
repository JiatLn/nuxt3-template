<script setup lang="ts">
const group = useRouteParam('group')
const groupId = useRouteParam('id')
</script>

<template>
  <div>group page</div>
  <div>group: {{ group }}</div>
  <div>id: {{ groupId }}</div>
</template>

<style scoped lang="less">

</style>
