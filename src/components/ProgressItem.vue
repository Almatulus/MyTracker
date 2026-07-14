<script setup>
import { getActivityProgress } from '@/activities'
import { isActivityItemValid } from '@/validators'
import { computed } from 'vue'

const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityItemValid,
  },
})

const percent = computed(() => getActivityProgress(props.activity))
</script>

<template>
  <li class="flex flex-col gap-1 p-4">
    <div class="truncate text-lg">{{ activity.name }}</div>
    <div class="bg-neutral-200 h-5 overflow-hidden rounded">
      <div class="bg-red-500 h-full" :style="{ width: percent + 'px' }"></div>
    </div>
    <div class="flex justify-between font-mono">
      <span>{{ percent }}%</span>
      <span>03:00 / 30:00</span>
    </div>
  </li>
</template>
