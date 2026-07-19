<script setup>
import { isActivityItemValid } from '@/validators'
import { useProgress } from '@/composables/progress'
import { HUNDRED_PERCENT } from '@/constants'

const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityItemValid,
  },
})

const { colorClasses, percent, progressTag } = useProgress(props.activity)
</script>

<template>
  <li class="flex flex-col gap-1 p-4">
    <div class="truncate text-lg">{{ activity.name }}</div>
    <div class="bg-neutral-200 h-5 overflow-hidden rounded">
      <div
        class="h-full"
        :class="['transition-all', colorClasses]"
        :style="{ width: Math.min(percent, HUNDRED_PERCENT) + '%' }"
      ></div>
    </div>
    <div class="flex justify-between font-mono">
      <span>{{ percent }}%</span>
      <span>{{ progressTag }}</span>
    </div>
  </li>
</template>
