<script setup>
import { isTimeLineItemValid } from '@/validators.js'
import VButton from '../ui/VButton.vue'
import { computed } from 'vue'
import { formatSeconds } from '@/functions.js'
import VIcon from '../ui/VIcon.vue'
import { ICON_ARROW_PATH, ICON_PAUSE, ICON_PLAY } from '@/icons.js'
import {
  isTimerRunning,
  resetTimelineItemTimer,
  startTimelineItemTimer,
  stopTimelineItemTimer,
} from '@/timelineItemTimer.js'
import { now } from '@/time.js'
import { BUTTON_TYPE_DANGER, BUTTON_TYPE_NEGATIVE, BUTTON_TYPE_SUCCESS } from '@/constants.js'

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
      :type="BUTTON_TYPE_NEGATIVE"
      class="p-1"
    >
      <VIcon :name="ICON_ARROW_PATH" />
    </VButton>

    <span class="rounded bg-gray-200 px-2 py-1 flex grow font-mono text-lg">{{
      formattedSeconds
    }}</span>

    <VButton
      v-if="isTimerRunning && timelineItem.hour === now.getHours()"
      @click="stopTimelineItemTimer"
      :type="BUTTON_TYPE_DANGER"
      class="p-1"
    >
      <VIcon :name="ICON_PAUSE" />
    </VButton>

    <VButton
      v-else
      @click="startTimelineItemTimer(timelineItem)"
      :disabled="timelineItem.hour !== now.getHours()"
      :type="BUTTON_TYPE_SUCCESS"
      class="p-1"
    >
      <VIcon :name="ICON_PLAY" />
    </VButton>
  </div>
</template>
