import { ref } from 'vue'
import { MIDNIGHT_HOUR, HOURS_PER_DAY } from './constants'

export const timelineItems = ref(generateTimelineItems())

export function updateTimelineItem(timelineItem, fields) {
  return Object.assign(timelineItem, fields)
}

export function resetTimelineItem(activity) {
  timelineItems.value
    .filter((item) => hasActivity(item, activity))
    .forEach((item) =>
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

export function getTotalActivitySeconds(activity) {
  return timelineItems.value
    .filter((timelineItem) => hasActivity(timelineItem, activity))
    .reduce(
      (totalSeconds, timelineItem) => Math.round(timelineItem.activitySeconds + totalSeconds),
      0,
    )
}

function hasActivity(timelineItem, activity) {
  return timelineItem.activityId === activity.id
}
