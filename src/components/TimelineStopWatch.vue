<script setup>
import { isTimeLineItemValid } from '@/validators.js'
import VButton from './VButton.vue'
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/solid'
import { computed, ref, inject } from 'vue'
import { formatSeconds } from '@/functions.js'
import { MILLISECONDS_IN_SECOND } from '@/constants.js'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimeLineItemValid,
  },
})

const updateTimelineItemActivitySeconds = inject('updateTimelineItemActivitySeconds')

const formattedSeconds = computed(() => formatSeconds(props.timelineItem.activitySeconds))

const seconds = ref(props.timelineItem.activitySeconds)
let timerId = null
const isRunning = ref(false)
const isStartButtonDisabled = props.timelineItem.hour !== new Date().getHours()

function start() {
  timerId = setInterval(() => {
    updateTimelineItemActivitySeconds(props.timelineItem, 1)
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

  updateTimelineItemActivitySeconds(props.timelineItem, -seconds.value)

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
