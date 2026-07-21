import { HUNDRED_PERCENT, MILLISECONDS_IN_SECOND, SECONDS_IN_DAY } from '@/constants'
import { computed, ref } from 'vue'

const date = new Date()
date.setHours(0, 0)

export const now = ref(new Date())
let timer = null

const midnight = computed(() => new Date(now.value).setHours(0, 0, 0, 0))

export const secondsSinceMidnightInPercent = computed(() => {
  return (HUNDRED_PERCENT * secondsSinceMidnight.value) / SECONDS_IN_DAY
})

const secondsSinceMidnight = computed(() => (now.value - midnight.value) / MILLISECONDS_IN_SECOND)

export function startTimer() {
  // now.value = new Date()
  now.value = date

  timer = setInterval(
    () => (now.value = new Date(now.value.getTime() + MILLISECONDS_IN_SECOND * 60)),

    MILLISECONDS_IN_SECOND,
  )
}

export function stopTimer() {
  clearInterval(timer)
}
