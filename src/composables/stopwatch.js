import { ref, watch } from 'vue'
import { MILLISECONDS_IN_SECOND } from '@/constants.js'
import { updateTimelineItem } from '@/timelineItems'

export function useStopWatch(timelineItem) {
  const isRunning = ref(false)
  let timerId = null
  const seconds = ref(timelineItem.activitySeconds)

  function start() {
    timerId = setInterval(() => {
      updateTimelineItem(timelineItem, {
        activitySeconds: timelineItem.activitySeconds + 1,
      })
      seconds.value++
    }, MILLISECONDS_IN_SECOND)

    isRunning.value = true
  }

  function stop() {
    clearInterval(timerId)
    isRunning.value = false
  }

  function reset() {
    if (timerId) stop()

    updateTimelineItem(timelineItem, {
      activitySeconds: timelineItem.activitySeconds - seconds.value,
    })

    seconds.value = 0
  }

  watch(
    () => timelineItem.activityId,
    () => {
      updateTimelineItem(timelineItem, { activitySeconds: seconds.value })
    },
  )

  return {
    start,
    stop,
    reset,
    seconds,
    isRunning,
  }
}
