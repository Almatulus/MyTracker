<script setup>
import { isActivityItemValid } from '@/validators'
import { computed } from 'vue'
import { calculateTrackedActivitySeconds, timelineItems } from '@/modules/timelineItems'
import { formatSecondsWithSign } from '@/functions'

const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityItemValid,
  },
})

const classes = computed(() => [
  `rounded p-1 font-mono `,
  remainingSeconds.value >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
])

const seconds = computed(() => formatSecondsWithSign(remainingSeconds.value))
const remainingSeconds = computed(
  () =>
    calculateTrackedActivitySeconds(timelineItems.value, props.activity) -
    props.activity.secondsToComplete,
)
</script>

<template>
  <div :class="classes">{{ seconds }}</div>
</template>
