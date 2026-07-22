<script setup>
import { isTimeLineItemValid } from '@/validators.js'
import VButton from './VButton.vue'
import { computed, onMounted, watch, watchEffect } from 'vue'
import { formatSeconds } from '@/functions.js'
import VIcon from './VIcon.vue'
import { ICON_ARROW_PATH, ICON_PAUSE, ICON_PLAY } from '@/icons.js'
import { useStopWatch } from '@/composables/stopwatch.js'
import { updateTimelineItem } from '@/timelineItems.js'
import { now } from '@/time.js'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimeLineItemValid,
  },
})

const { reset, stop, start, isRunning, seconds } = useStopWatch(props.timelineItem.activitySeconds)

watchEffect(() => {
  if (props.timelineItem.hour !== now.value.getHours() && isRunning.value) {
    stop()
  }
})

watchEffect(() => {
  updateTimelineItem(props.timelineItem, { activitySeconds: seconds.value })
})

watch(isRunning, () => {
  updateTimelineItem(props.timelineItem, { isActive: isRunning.value })
})

const formattedSeconds = computed(() => formatSeconds(props.timelineItem.activitySeconds))

onMounted(() => {
  if (props.timelineItem.isActive) start()
})
</script>

<template>
  <div class="flex items-center gap-2">
    <VButton :disabled="!timelineItem.activitySeconds" @click="reset" type="negative" class="p-1">
      <VIcon :name="ICON_ARROW_PATH" />
    </VButton>

    <span class="rounded bg-gray-200 px-2 py-1 flex grow font-mono text-lg">{{
      formattedSeconds
    }}</span>

    <VButton v-if="isRunning" @click="stop" type="danger" class="p-1">
      <VIcon :name="ICON_PAUSE" />
    </VButton>

    <VButton
      v-else
      @click="start"
      :disabled="timelineItem.hour !== now.getHours()"
      type="success"
      class="p-1"
    >
      <VIcon :name="ICON_PLAY" />
    </VButton>
  </div>
</template>
