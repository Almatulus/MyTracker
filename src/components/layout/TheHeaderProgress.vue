<script setup>
import { HUNDRED_PERCENT, PAGE_PROGRESS } from '@/constants'
import { routeTo } from '@/modules/router.js'
import VIcon from '../ui/VIcon.vue'
import { ICON_CHECK_CIRCLE } from '@/modules/icons.js'
import { computed } from 'vue'
import { useTotalProgress } from '@/composables/total-progress.js'

const { percent, colorClasses } = useTotalProgress()

const classes = computed(() => ['h-3 w-3 rounded-full', colorClasses.value])
</script>

<template>
  <a :href="`#${PAGE_PROGRESS}`" class="text-sm" @click="routeTo(PAGE_PROGRESS)">
    <div v-if="percent < HUNDRED_PERCENT" class="flex items-center gap-1 font-medium">
      Progress: {{ percent }}%
      <div :class="classes"></div>
    </div>

    <div v-else class="flex items-center gap-1 font-medium">
      Day complete!
      <VIcon :name="ICON_CHECK_CIRCLE" class="h-7 text-green-500" />
    </div>
  </a>
</template>
