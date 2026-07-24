import {
  HUNDRED_PERCENT,
  MILLISECONDS_IN_SECOND,
  SECONDS_IN_DAY,
  SECONDS_IN_HOUR,
} from '@/constants'
import { computed, ref } from 'vue'

export function today() {
  const today = new Date()

  return today
}

export function tomorrow() {
  const tomorrow = new Date()

  tomorrow.setDate(tomorrow.getDate() + 1)

  return tomorrow
}

export function isToday(date) {
  return date.toDateString() === today().toDateString()
}

export const now = ref(today())
let currentDateTimer = null

const midnight = computed(() => new Date(now.value).setHours(0, 0, 0, 0))

export const secondsSinceMidnightInPercent = computed(() => {
  return (HUNDRED_PERCENT * secondsSinceMidnight.value) / SECONDS_IN_DAY
})

const secondsSinceMidnight = computed(() => (now.value - midnight.value) / MILLISECONDS_IN_SECOND)

export function startCurrentDateTimer() {
  now.value = today()

  currentDateTimer = setInterval(
    () => (now.value = new Date(now.value.getTime() + MILLISECONDS_IN_SECOND)),

    MILLISECONDS_IN_SECOND,
  )
}

export function stopCurrentDateTimer() {
  clearInterval(currentDateTimer)
}

export function endOfHour(date) {
  const endOfHour = new Date(date)

  endOfHour.setTime(endOfHour.getTime() + SECONDS_IN_HOUR * MILLISECONDS_IN_SECOND)

  endOfHour.setMinutes(0, 0, 0)

  return endOfHour
}

export function toSeconds(milliseconds) {
  return Math.round(milliseconds / MILLISECONDS_IN_SECOND)
}
