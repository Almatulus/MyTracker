<script setup>
import { PAGE_TIMELINE } from '@/constants'
import { currentPage, routeTo } from '@/router'
import { scrollToCurrentHour } from '@/timelineItems'
import VIcon from './VIcon.vue'
import { ICON_CLOCK } from '@/icons.js'
import TheHeaderProgress from './TheHeaderProgress.vue'

function handleClick() {
  currentPage.value === PAGE_TIMELINE ? scrollToCurrentHour(true) : routeTo(PAGE_TIMELINE)
}
</script>

<template>
  <header
    class="sticky top-0 z-50 flex items-center justify-between p-2 border-b border-gray-400 bg-white"
  >
    <a :href="`#${PAGE_TIMELINE}`" class="flex items-center" @click="handleClick">
      <VIcon :name="ICON_CLOCK" class="w-10" />
      <p class="font-semibold">MyTracker</p>
    </a>

    <TheHeaderProgress />
  </header>
</template>
