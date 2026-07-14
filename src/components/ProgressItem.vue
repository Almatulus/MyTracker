<script setup>
import { calculateActivityCompletionPercentage } from '@/activities'
import { isActivityItemValid } from '@/validators'
import { computed } from 'vue'
import { formatSeconds, getProgressColorClasses } from '@/functions'
import { calculateTrackedActivitySeconds } from '@/timelineItems'

const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityItemValid,
  },
})

const percent = computed(() =>
  calculateActivityCompletionPercentage(
    props.activity,
    calculateTrackedActivitySeconds(props.activity),
  ),
)

const colorClasses = computed(() => getProgressColorClasses(percent.value))

const progressTag = computed(
  () =>
    `${formatSeconds(calculateTrackedActivitySeconds(props.activity))} / ${formatSeconds(props.activity.secondsToComplete)}`,
)
</script>

<template>
  <li class="flex flex-col gap-1 p-4">
    <div class="truncate text-lg">{{ activity.name }}</div>
    <div class="bg-neutral-200 h-5 overflow-hidden rounded">
      <div class="h-full" :class="colorClasses" :style="{ width: percent + '%' }"></div>
    </div>
    <div class="flex justify-between font-mono">
      <span>{{ percent }}%</span>
      <span>{{ progressTag }}</span>
    </div>
  </li>
</template>
