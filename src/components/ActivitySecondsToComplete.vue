<script setup>
import { isActivityItemValid, validateTimeLineItems } from '@/validators'
import { formatSeconds, getTotalActivitySeconds } from '@/functions'
import { computed } from 'vue'

const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityItemValid,
  },
  timelineItems: {
    type: Array,
    required: true,
    validator: validateTimeLineItems,
  },
})

const seconds = computed(() =>
  formatSeconds(
    getTotalActivitySeconds(props.activity, props.timelineItems) - props.activity.secondsToComplete,
  ),
)
</script>

<template>
  <div class="rounded bg-green-100 p-1 text-green-800">{{ seconds }}</div>
</template>
