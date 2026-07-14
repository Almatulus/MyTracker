<script setup>
import TimelineItem from '@/components/TimelineItem.vue'
import { onActivated } from 'vue'
import { timelineItems, timelineRefs } from '@/timelineItems'
import { scrollToHour, scrollToCurrentHour } from '@/timelineItems'

onActivated(scrollToCurrentHour)
</script>

<template>
  <div class="mt-10">
    <ul>
      <TimelineItem
        v-for="timeline in timelineItems"
        :key="timeline"
        :timeline-item="timeline"
        @scroll-to-hour="scrollToHour(timeline.hour)"
        ref="timelineRefs"
      />
    </ul>
  </div>
</template>
