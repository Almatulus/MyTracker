import { ref } from 'vue'
import { MILLISECONDS_IN_SECOND } from '@/constants.js'

export function useStopWatch(initialSeconds, handleSecondsChange) {
  const isRunning = ref(false)
  let timerId = null
  const seconds = ref(initialSeconds)

  function start() {
    timerId = setInterval(() => {
      seconds.value++
      handleSecondsChange()
    }, MILLISECONDS_IN_SECOND)

    isRunning.value = true
  }

  function stop() {
    clearInterval(timerId)
    isRunning.value = false
  }

  function reset() {
    if (timerId) stop()

    seconds.value = 0
    handleSecondsChange()
  }

  return {
    start,
    stop,
    reset,
    seconds,
    isRunning,
  }
}
