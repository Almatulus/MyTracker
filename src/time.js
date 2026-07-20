import {
  HUNDRED_PERCENT,
  MILLISECONDS_IN_SECOND,
  MINUTES_IN_HOUR,
  SECONDS_IN_DAY,
  SECONDS_IN_MINUTE,
} from '@/constants'
import { computed, ref, watch, onActivated, onDeactivated } from 'vue'

let secondsSinceMidnight = ref(calculateSecondsSinceMidnight())
let timer = null

export function startTimer() {
  secondsSinceMidnight.value = calculateSecondsSinceMidnight()

  timer = setInterval(
    () => secondsSinceMidnight.value++,

    MILLISECONDS_IN_SECOND,
  )
}

export function stopTimer() {
  clearInterval(timer)
}

watch(secondsSinceMidnight, () => {
  if (secondsSinceMidnight.value > SECONDS_IN_DAY) secondsSinceMidnight.value = 0
})

function calculateSecondsSinceMidnight() {
  const now = new Date()

  return SECONDS_IN_MINUTE * MINUTES_IN_HOUR * now.getHours() + SECONDS_IN_MINUTE * now.getMinutes()
}

export const secondsSinceMidnightInPercent = computed(() => {
  return (HUNDRED_PERCENT * secondsSinceMidnight.value) / SECONDS_IN_DAY
})
