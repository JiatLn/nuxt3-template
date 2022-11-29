<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useCounterStore } from '~/stores'

const store = useCounterStore()

const { locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const content = computed(() => `<span style="color: red">web-component ${store.count}</span>`)
</script>

<template>
  <div flex="c col" min-h="60vh">
    <div flex="c" space-x-10px>
      <h2 text="2xl" font-bold leading-40>
        {{ $t('home.title') }}
      </h2>
      <NuxtLink btn :to="switchLocalePath(locale === 'en' ? 'zhCn' : 'en')">
        {{ locale === 'en' ? '中文' : 'EN' }}
      </NuxtLink>
    </div>
    <LittleDemoTheVueUse />
    <div>
      <pre>{{ store.$state }}</pre>
      <button btn @click="store.increment()">
        +1
      </button>
    </div>
    <ClientOnly>
      <CommonWebContent :content="content" />
    </ClientOnly>
  </div>
</template>

<style scoped lang="less">

</style>
