import { ref } from 'vue'
import { MILLISECONDS_IN_SECOND } from '@/constants.js'

export function useStopWatch(initialSeconds) {
  const isRunning = ref(false)
  let timerId = null
  const seconds = ref(initialSeconds)

  function start() {
    timerId = setInterval(() => {
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

    seconds.value = 0
  }

  return {
    start,
    stop,
    reset,
    seconds,
    isRunning,
  }
}
