<script setup>
import TimelineItem from '@/components/timeline/TimelineItem.vue'
import { onActivated } from 'vue'
import { timelineItems, timelineRefs } from '@/timelineItems'
import { scrollToCurrentHour } from '@/timelineItems'
import TheTimelineIndicator from '@/components/timeline/TheTimelineIndicator.vue'

onActivated(scrollToCurrentHour)
</script>

<template>
  <div class="mt-10 relative">
    <TheTimelineIndicator />
    <ul>
      <TimelineItem
        v-for="timeline in timelineItems"
        :key="timeline"
        :timeline-item="timeline"
        ref="timelineRefs"
      />
    </ul>
  </div>
</template>
