<script setup>
import TimelineItem from '@/components/TimelineItem.vue'
import { isTimeLineItemValid } from '@/validators'

defineProps({
  timelineItems: {
    type: Array,
    required: true,
    validator: (timelineItems) => {
      return timelineItems.every(isTimeLineItemValid)
    },
  },
})
</script>

<template>
  <div class="mt-10">
    <ul>
      <TimelineItem v-for="item in timelineItems" :key="item" :timeline-item="item" />
    </ul>
  </div>
</template>
