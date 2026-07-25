import { trackedActivities, calculateCompletionPercentage } from '@/modules/activities'
import { computed } from 'vue'
import { calculateTrackedActivitySeconds, timelineItems } from '@/modules/timelineItems'
import { getProgressColorClasses } from '@/functions'

export function useTotalProgress() {
  const percent = computed(() => calculateCompletionPercentage(totalTrackedSeconds.value))

  const colorClasses = computed(() => getProgressColorClasses(percent.value))

  const totalTrackedSeconds = computed(() => {
    return trackedActivities.value
      .map((activity) =>
        Math.min(
          calculateTrackedActivitySeconds(timelineItems.value, activity),
          activity.secondsToComplete,
        ),
      )
      .reduce((total, seconds) => total + seconds, 0)
  })
  return {
    percent,
    colorClasses,
  }
}
