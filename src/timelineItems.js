import { computed, ref, watch } from 'vue'
import { MIDNIGHT_HOUR, HOURS_PER_DAY } from './constants'
import { endOfHour, isToday, now, today, toSeconds } from './time'
import { stopTimelineItemTimer } from './timelineItemTimer'

export const timelineItems = ref([])
export const activeTimelineItem = computed(() =>
  timelineItems.value.find((timelineItem) => timelineItem.isActive),
)

export const timelineRefs = ref([])

watch(now, (after, before) => {
  if (activeTimelineItem.value && activeTimelineItem.value.hour !== after.getHours()) {
    stopTimelineItemTimer()
  }

  if (before.getHours() !== after.getHours() && after.getHours() === MIDNIGHT_HOUR) {
    resetTimelineItems()
  }
})

export function updateTimelineItem(timelineItem, fields) {
  return Object.assign(timelineItem, fields)
}

export function scrollToCurrentHour(isSmooth = false) {
  scrollToHour(today().getHours(), isSmooth)
}

export function scrollToHour(hour, isSmooth = true) {
  const el = hour === MIDNIGHT_HOUR ? document.body : timelineRefs.value[hour].liRef

  el.scrollIntoView({
    block: 'center',
    behavior: isSmooth ? 'smooth' : 'instant',
  })
}

export function resetTimelineItem(timelineItems, activity) {
  filterTimelineItemsByActivity(timelineItems, activity).forEach((item) =>
    updateTimelineItem(item, {
      activityId: null,
      activitySeconds: timelineItems.hour === today().getHours() ? activity.activitySeconds : 0,
    }),
  )
}

export function calculateTrackedActivitySeconds(timelineItems, activity) {
  return filterTimelineItemsByActivity(timelineItems, activity)
    .map(({ activitySeconds }) => activitySeconds)
    .reduce((total, seconds) => Math.round(seconds + total), 0)
}

export function initializeTimelineItems(state) {
  const lastActiveAt = new Date(state.lastActiveAt)

  timelineItems.value =
    state.timelineItems && state.timelineItems.length > 0
      ? state.timelineItems
      : generateTimelineItems()

  if (activeTimelineItem.value && isToday(lastActiveAt)) {
    syncIdleSeconds(lastActiveAt)
  } else if (state.timelineItems && !isToday(lastActiveAt)) {
    resetTimelineItems(state.timelineItems)
  }
}

function resetTimelineItems() {
  timelineItems.value.forEach((timelineItem) =>
    updateTimelineItem(timelineItem, {
      activitySeconds: 0,
      isActive: false,
    }),
  )
}

function syncIdleSeconds(lastActiveAt) {
  updateTimelineItem(activeTimelineItem.value, {
    activitySeconds: activeTimelineItem.value.activitySeconds + calculateIdleSeconds(lastActiveAt),
  })
}

function calculateIdleSeconds(lastActiveAt) {
  return lastActiveAt.getHours() === today().getHours()
    ? toSeconds(today() - lastActiveAt)
    : toSeconds(endOfHour(lastActiveAt) - lastActiveAt)
}

function generateTimelineItems() {
  const timelineItems = []
  for (let hour = MIDNIGHT_HOUR; hour < HOURS_PER_DAY; hour++) {
    timelineItems.push({
      hour,
      activityId: null,
      activitySeconds: 0,
      isActive: false,
    })
  }

  return timelineItems
}

function filterTimelineItemsByActivity(timelineItems, activity) {
  return timelineItems.filter((item) => item.activityId === activity.id)
}
