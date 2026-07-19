<script setup>
import {
  HUNDRED_PERCENT,
  MILLISECONDS_IN_SECOND,
  MINUTES_IN_HOUR,
  SECONDS_IN_DAY,
  SECONDS_IN_MINUTE,
} from '@/constants'
import { computed, ref, watch, onActivated, onDeactivated } from 'vue'

const indicatorRef = ref()
let secondsSinceMidnight = ref(calculateSecondsSinceMidnight())
let timer = null

onActivated(() => {
  secondsSinceMidnight = calculateSecondsSinceMidnight()

  timer = setInterval(
    () => secondsSinceMidnight.value++,

    MILLISECONDS_IN_SECOND,
  )
})

onDeactivated(() => clearInterval(timer))

watch(secondsSinceMidnight, () => {
  if (secondsSinceMidnight.value > SECONDS_IN_DAY) secondsSinceMidnight.value = 0
})

const topOffset = computed(
  () => (secondsSinceMidnightInPercent.value * getTimelineHeight()) / HUNDRED_PERCENT,
)

const secondsSinceMidnightInPercent = computed(() => {
  return (HUNDRED_PERCENT * secondsSinceMidnight.value) / SECONDS_IN_DAY
})

function calculateSecondsSinceMidnight() {
  const now = new Date()

  return SECONDS_IN_MINUTE * MINUTES_IN_HOUR * now.getHours() + SECONDS_IN_MINUTE * now.getMinutes()
}

function getTimelineHeight() {
  return indicatorRef.value?.parentNode.getBoundingClientRect().height
}
</script>

<template>
  <hr
    ref="indicatorRef"
    class="pointer-events-none absolute z-10 w-full border-b-2 border-red-600"
    :style="{ top: `${topOffset}px` }"
  />
</template>
