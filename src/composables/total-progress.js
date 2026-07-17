import { trackedActivities, calculateCompletionPercentage } from '@/activities'
import { computed } from 'vue'
import { calculateTrackedActivitySeconds, timelineItems } from '@/timelineItems'
import { getProgressColorClasses } from '@/functions'

export function useTotalProgress() {
  const percent = computed(() => calculateCompletionPercentage(totalTrackedSeconds.value))

  const colorClasses = computed(() => getProgressColorClasses(percent.value))

  const totalTrackedSeconds = computed(() => {
    return trackedActivities.value.reduce((total, activity) => {
      let trackedSeconds = calculateTrackedActivitySeconds(timelineItems.value, activity)

      trackedSeconds =
        activity.secondsToComplete > trackedSeconds ? trackedSeconds : activity.secondsToComplete

      return total + trackedSeconds
    }, 0)
  })
  return {
    percent,
    colorClasses,
  }
}
