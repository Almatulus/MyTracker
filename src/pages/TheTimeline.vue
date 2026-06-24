<script setup>
import TimelineItem from '@/components/TimelineItem.vue'
import {
  validateTimeLineItems,
  validateSelectOptions,
  isTimeLineItemValid,
  isNull,
  isNotEmptyString,
} from '@/validators'

defineProps({
  timelineItems: {
    type: Array,
    required: true,
    validator: validateTimeLineItems,
  },

  activitySelectOptions: {
    type: Array,
    required: true,
    validator: validateSelectOptions,
  },
})

const emit = defineEmits({
  'update:activityId': (timelineItem, activityId) => {
    return isTimeLineItemValid(timelineItem) && (isNull(activityId) || isNotEmptyString(activityId))
  },
})
</script>

<template>
  <div class="mt-10">
    <ul>
      <TimelineItem
        v-for="timeline in timelineItems"
        :key="timeline"
        :timeline-item="timeline"
        :activity-select-options="activitySelectOptions"
        @update:activity-id="emit('update:activityId', timeline, $event)"
      />
    </ul>
  </div>
</template>
