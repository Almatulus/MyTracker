<script setup>
import { isHourValid, isNumber } from '@/validators.js'
import VButton from './VButton.vue'
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/solid'
import { computed, ref } from 'vue'
import { formatSeconds } from '@/functions.js'
import { MILLISECONDS_IN_SECOND } from '@/constants.js'

const props = defineProps({
  seconds: {
    type: Number,
    default: 0,
    validator: isNumber,
  },

  hour: {
    require: true,
    type: Number,
    validator: isHourValid,
  },
})

const formattedSeconds = computed(() => formatSeconds(seconds.value))

const seconds = ref(props.seconds)
let timerId = null
const isRunning = ref(false)
const isStartButtonDisabled = props.hour !== new Date().getHours()

function start() {
  const startTime = performance.now()

  timerId = setInterval(() => {
    seconds.value = Math.floor((performance.now() - startTime) / MILLISECONDS_IN_SECOND)
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
</script>

<template>
  <div class="flex items-center gap-2">
    <VButton :disabled="!seconds" @click="reset" type="negative" class="p-1">
      <ArrowPathIcon class="h-6" />
    </VButton>

    <span class="rounded bg-gray-200 px-2 py-1 flex grow font-mono text-lg">{{
      formattedSeconds
    }}</span>

    <VButton v-if="isRunning" @click="stop" type="danger" class="p-1">
      <PauseIcon class="h-6" />
    </VButton>

    <VButton v-else @click="start" :disabled="isStartButtonDisabled" type="success" class="p-1">
      <PlayIcon class="h-6" />
    </VButton>
  </div>
</template>
