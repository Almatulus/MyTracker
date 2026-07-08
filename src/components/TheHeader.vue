<script setup>
import { ClockIcon, CheckCircleIcon } from '@heroicons/vue/24/solid'
import { PAGE_TIMELINE, PAGE_PROGRESS } from '@/constants'
import { routeTo } from '@/router'
</script>

<template>
  <header
    class="sticky top-0 z-50 flex items-center justify-between p-2 border-b border-gray-400 bg-white"
  >
    <a :href="`#${PAGE_TIMELINE}`" class="flex items-center" @click="routeTo(PAGE_TIMELINE)">
      <ClockIcon class="w-10" />
      <p class="font-semibold">MyTracker</p>
    </a>
    <a :href="`#${PAGE_PROGRESS}`" class="text-sm" @click="routeTo(PAGE_PROGRESS)">
      <div v-if="true" class="flex items-center gap-1 font-medium">
        Day complete!
        <CheckCircleIcon class="h-7 text-green-500" />
      </div>

      <div v-else class="flex items-center gap-1 font-medium">
        Progress: 20%
        <div class="bg-red-500 h-3 w-3 rounded-full"></div>
      </div>
    </a>
  </header>
</template>
