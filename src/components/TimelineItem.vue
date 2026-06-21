<script setup>
import VSelect from './VSelect.vue'
import { isTimeLineItemValid, validateSelectOptions } from '@/validators.js'
import TimelineHour from './TimelineHour.vue'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimeLineItemValid,
  },
  activitySelectOptions: {
    type: Array,
    required: true,
    validator: validateSelectOptions,
  },
})
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <VSelect
      v-model="timelineItem.activityId"
      :options="activitySelectOptions"
      placeholder="Rest"
    />
    <TimelineHour :hour="props.timelineItem.hour" />
  </li>
</template>
