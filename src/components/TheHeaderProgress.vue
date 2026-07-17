<script setup>
import { PAGE_PROGRESS } from '@/constants'
import { routeTo } from '@/router'
import VIcon from './VIcon.vue'
import { ICON_CHECK_CIRCLE } from '@/icons'
</script>

<template>
  <a :href="`#${PAGE_PROGRESS}`" class="text-sm" @click="routeTo(PAGE_PROGRESS)">
    <div v-if="true" class="flex items-center gap-1 font-medium">
      Day complete!
      <VIcon :name="ICON_CHECK_CIRCLE" class="h-7 text-green-500" />
    </div>

    <div v-else class="flex items-center gap-1 font-medium">
      Progress: 20%
      <div class="bg-red-500 h-3 w-3 rounded-full"></div>
    </div>
  </a>
</template>
