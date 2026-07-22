import { ref } from 'vue'
import { MIDNIGHT_HOUR, HOURS_PER_DAY, MILLISECONDS_IN_SECOND } from './constants'
import { now } from './time'

export const timelineItems = ref(generateTimelineItems())

let timelineItemTimer = null

export function startTimelineItemTimer(activeTimelineItem) {
  timelineItemTimer = setInterval(() => {
    updateTimelineItem(activeTimelineItem, {
      activitySeconds: activeTimelineItem.activitySeconds + 1,
    })
  }, MILLISECONDS_IN_SECOND)
}

export function stopTimelineIemTimer() {
  clearInterval(timelineItemTimer)
}

export function findActiveTimelineItem() {
  return timelineItems.value.find((timelineItem) => timelineItem.isActive)
}

export function updateTimelineItem(timelineItem, fields) {
  return Object.assign(timelineItem, fields)
}

export const timelineRefs = ref([])

export function scrollToCurrentHour(isSmooth = false) {
  scrollToHour(now.value.getHours(), isSmooth)
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
      activitySeconds: timelineItems.hour === now.value.getHours() ? activity.activitySeconds : 0,
    }),
  )
}

export function calculateTrackedActivitySeconds(timelineItems, activity) {
  return filterTimelineItemsByActivity(timelineItems, activity)
    .map(({ activitySeconds }) => activitySeconds)
    .reduce((total, seconds) => Math.round(seconds + total), 0)
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
