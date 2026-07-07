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

const classes = computed(() => `rounded p-1 font-mono ${colorClasses.value}`)
const colorClasses = computed(() =>
  secondsDiff.value >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
)

const seconds = computed(() => `${sign.value}${formatSeconds(secondsDiff.value)}`)
const sign = computed(() => (secondsDiff.value >= 0 ? '+' : '-'))
const secondsDiff = computed(
  () =>
    getTotalActivitySeconds(props.activity, props.timelineItems) - props.activity.secondsToComplete,
)
</script>

<template>
  <div :class="classes">{{ seconds }}</div>
</template>
