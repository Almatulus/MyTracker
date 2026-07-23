import { ref, watchEffect } from 'vue'
import { updateTimelineItem, activeTimelineItem } from './timelineItems'
import { now } from './time'
import { MILLISECONDS_IN_SECOND } from './constants'

export const timelineItemTimer = ref(null)
export const isTimerRunning = ref(false)

export function startTimelineItemTimer(timelineItem) {
  updateTimelineItem(timelineItem, { isActive: true })

  timelineItemTimer.value = setInterval(() => {
    updateTimelineItem(timelineItem, {
      activitySeconds: timelineItem.activitySeconds + 1,
    })
  }, MILLISECONDS_IN_SECOND)

  isTimerRunning.value = true
}

export function stopTimelineItemTimer(timelineItem) {
  updateTimelineItem(timelineItem, { isActive: false })

  clearInterval(timelineItemTimer.value)

  isTimerRunning.value = false
}

export function resetTimelineItemTimer(timelineItem) {
  updateTimelineItem(timelineItem, { activitySeconds: 0 })
  stopTimelineItemTimer(timelineItem)
}

watchEffect(() => {
  if (activeTimelineItem.value && activeTimelineItem.value.hour !== now.value.getHours()) {
    stopTimelineItemTimer(activeTimelineItem.value)
  }
})
