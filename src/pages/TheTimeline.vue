<script setup>
import TimelineItem from '@/components/TimelineItem.vue'
import { validateTimeLineItems, validateSelectOptions } from '@/validators'

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
</script>

<template>
  <div class="mt-10">
    <ul>
      <TimelineItem
        v-for="item in timelineItems"
        :key="item"
        :timeline-item="item"
        :activity-select-options="activitySelectOptions"
      />
    </ul>
  </div>
</template>
