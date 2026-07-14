import { ref } from 'vue'
import { MIDNIGHT_HOUR, HOURS_PER_DAY } from './constants'
import { currentHour } from './functions'

export const timelineItems = ref(generateTimelineItems())

export function updateTimelineItem(timelineItem, fields) {
  return Object.assign(timelineItem, fields)
}

export const timelineRefs = ref([])

export function scrollToCurrentHour(isSmooth = false) {
  scrollToHour(currentHour(), isSmooth)
}

export function scrollToHour(hour, isSmooth = true) {
  const el = hour === MIDNIGHT_HOUR ? document.body : timelineRefs.value[hour].liRef

  el.scrollIntoView({
    block: 'center',
    behavior: isSmooth ? 'smooth' : 'instant',
  })
}

export function resetTimelineItem(activity) {
  filterTimelineItemsByActivity(activity).forEach((item) =>
    updateTimelineItem(item, {
      activityId: null,
      activitySeconds: 0,
    }),
  )
}

function generateTimelineItems() {
  const timelineItems = []
  for (let hour = MIDNIGHT_HOUR; hour < HOURS_PER_DAY; hour++) {
    timelineItems.push({
      hour,
      activityId: null,
      activitySeconds: 0,
    })
  }

  return timelineItems
}

export function calculateTrackedActivitySeconds(activity) {
  return filterTimelineItemsByActivity(activity)
    .map(({ activitySeconds }) => activitySeconds)
    .reduce((total, seconds) => Math.round(seconds + total), 0)
}

function filterTimelineItemsByActivity(activity) {
  return timelineItems.value.filter((item) => item.activityId === activity.id)
}
