<script setup>
import { isTimeLineItemValid } from '@/validators.js'
import VButton from './VButton.vue'
import { computed, ref, watch } from 'vue'
import { currentHour, formatSeconds } from '@/functions.js'
import { MILLISECONDS_IN_SECOND } from '@/constants.js'
import { updateTimelineItem } from '@/timelineItems'
import VIcon from './VIcon.vue'
import { ICON_ARROW_PATH, ICON_PAUSE, ICON_PLAY } from '@/icons.js'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimeLineItemValid,
  },
})

const formattedSeconds = computed(() => formatSeconds(props.timelineItem.activitySeconds))

const seconds = ref(props.timelineItem.activitySeconds)
let timerId = null
const isRunning = ref(false)
const isStartButtonDisabled = props.timelineItem.hour !== currentHour()

function start() {
  timerId = setInterval(() => {
    updateTimelineItem(props.timelineItem, {
      activitySeconds: props.timelineItem.activitySeconds + 1,
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

  updateTimelineItem(props.timelineItem, {
    activitySeconds: props.timelineItem.activitySeconds - seconds.value,
  })

  seconds.value = 0
}

watch(
  () => props.timelineItem.activityId,
  () => {
    updateTimelineItem(props.timelineItem, { activitySeconds: seconds.value })
  },
)
</script>

<template>
  <div class="flex items-center gap-2">
    <VButton :disabled="!seconds" @click="reset" type="negative" class="p-1">
      <VIcon :name="ICON_ARROW_PATH" />
    </VButton>

    <span class="rounded bg-gray-200 px-2 py-1 flex grow font-mono text-lg">{{
      formattedSeconds
    }}</span>

    <VButton v-if="isRunning" @click="stop" type="danger" class="p-1">
      <VIcon :name="ICON_PAUSE" />
    </VButton>

    <VButton v-else @click="start" :disabled="isStartButtonDisabled" type="success" class="p-1">
      <VIcon :name="ICON_PLAY" />
    </VButton>
  </div>
</template>
