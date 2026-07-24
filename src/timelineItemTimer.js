import { ref, watchEffect } from 'vue'
import { updateTimelineItem, activeTimelineItem } from './timelineItems'
import { now } from './time'
import { MILLISECONDS_IN_SECOND } from './constants'

const timelineItemTimer = ref(null)
export const isTimerRunning = ref(false)

watchEffect(() => {
  if (activeTimelineItem.value && activeTimelineItem.value.hour !== now.value.getHours()) {
    stopTimelineItemTimer()
  }
})

export function startTimelineItemTimer(timelineItem) {
  timelineItem = timelineItem ?? activeTimelineItem.value

  updateTimelineItem(timelineItem, { isActive: true })

  timelineItemTimer.value = setInterval(() => {
    updateTimelineItem(timelineItem, {
      activitySeconds: timelineItem.activitySeconds + 1,
    })
  }, MILLISECONDS_IN_SECOND)

  isTimerRunning.value = true
}

export function stopTimelineItemTimer() {
  updateTimelineItem(activeTimelineItem.value, { isActive: false })

  clearInterval(timelineItemTimer.value)

  isTimerRunning.value = false
}

export function resetTimelineItemTimer(timelineItem) {
  updateTimelineItem(timelineItem, { activitySeconds: 0 })

  if (activeTimelineItem.value) stopTimelineItemTimer(timelineItem)
}
