import { calculateActivityCompletionPercentage } from '@/activities'
import { computed } from 'vue'
import { formatSeconds, getProgressColorClasses } from '@/functions'
import { calculateTrackedActivitySeconds, timelineItems } from '@/timelineItems'

export function useProgress(activity) {
  const percent = computed(() =>
    calculateActivityCompletionPercentage(
      activity,
      calculateTrackedActivitySeconds(timelineItems.value, activity),
    ),
  )

  const colorClasses = computed(() => getProgressColorClasses(percent.value))

  const progressTag = computed(
    () =>
      `${formatSeconds(calculateTrackedActivitySeconds(timelineItems.value, activity))} / ${formatSeconds(activity.secondsToComplete)}`,
  )

  return {
    percent,
    colorClasses,
    progressTag,
  }
}
