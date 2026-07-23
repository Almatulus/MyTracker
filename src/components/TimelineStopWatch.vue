<script setup>
import { isTimeLineItemValid } from '@/validators.js'
import VButton from './VButton.vue'
import { computed } from 'vue'
import { formatSeconds } from '@/functions.js'
import VIcon from './VIcon.vue'
import { ICON_ARROW_PATH, ICON_PAUSE, ICON_PLAY } from '@/icons.js'
import {
  isTimerRunning,
  resetTimelineItemTimer,
  startTimelineItemTimer,
  stopTimelineItemTimer,
  updateTimelineItem,
} from '@/timelineItems.js'
import { now } from '@/time.js'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimeLineItemValid,
  },
})

const formattedSeconds = computed(() => formatSeconds(props.timelineItem.activitySeconds))
</script>

<template>
  <div class="flex items-center gap-2">
    <VButton
      :disabled="!timelineItem.activitySeconds"
      @click="resetTimelineItemTimer(props.timelineItem)"
      type="negative"
      class="p-1"
    >
      <VIcon :name="ICON_ARROW_PATH" />
    </VButton>

    <span class="rounded bg-gray-200 px-2 py-1 flex grow font-mono text-lg">{{
      formattedSeconds
    }}</span>

    <VButton
      v-if="isTimerRunning && timelineItem.hour === now.getHours()"
      @click="stopTimelineItemTimer(timelineItem)"
      type="danger"
      class="p-1"
    >
      <VIcon :name="ICON_PAUSE" />
    </VButton>

    <VButton
      v-else
      @click="startTimelineItemTimer(timelineItem)"
      :disabled="timelineItem.hour !== now.getHours()"
      type="success"
      class="p-1"
    >
      <VIcon :name="ICON_PLAY" />
    </VButton>
  </div>
</template>
