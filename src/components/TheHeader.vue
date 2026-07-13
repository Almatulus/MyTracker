<script setup>
import { PAGE_TIMELINE, PAGE_PROGRESS } from '@/constants'
import { currentPage, routeTo } from '@/router'
import { scrollToCurrentHour } from '@/timelineItems'
import VIcon from './VIcon.vue'

function handleClick() {
  currentPage.value === PAGE_TIMELINE ? scrollToCurrentHour(true) : routeTo(PAGE_TIMELINE)
}
</script>

<template>
  <header
    class="sticky top-0 z-50 flex items-center justify-between p-2 border-b border-gray-400 bg-white"
  >
    <a :href="`#${PAGE_TIMELINE}`" class="flex items-center" @click="handleClick">
      <VIcon name="Clock" class="w-10" />
      <p class="font-semibold">MyTracker</p>
    </a>
    <a :href="`#${PAGE_PROGRESS}`" class="text-sm" @click="routeTo(PAGE_PROGRESS)">
      <div v-if="true" class="flex items-center gap-1 font-medium">
        Day complete!
        <VIcon name="CheckCircle" class="h-7 text-green-500" />
      </div>

      <div v-else class="flex items-center gap-1 font-medium">
        Progress: 20%
        <div class="bg-red-500 h-3 w-3 rounded-full"></div>
      </div>
    </a>
  </header>
</template>
