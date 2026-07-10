import { ref } from 'vue'
import { MIDNIGHT_HOUR, HOURS_PER_DAY } from './constants'

export const timelineItems = ref(generateTimelineItems())

export function updateTimelineItemActivitySeconds(timeline, activitySeconds) {
  timeline.activitySeconds += activitySeconds
}

export function resetTimelineItem(activity) {
  timelineItems.value.forEach((item) => {
    if (item.activityId === activity.id) {
      item.activityId = null
      item.activitySeconds = 0
    }
  })
}

function generateTimelineItems() {
  const timeItems = []
  for (let hour = MIDNIGHT_HOUR; hour < HOURS_PER_DAY; hour++) {
    timeItems.push({
      hour,
      activityId: null,
      activitySeconds: 0,
    })
  }

  return timeItems
}
