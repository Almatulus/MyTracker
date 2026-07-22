<script setup>
import TimelineItem from '@/components/TimelineItem.vue'
import { onActivated, onDeactivated } from 'vue'
import { stopTimelineIemTimer, timelineItems, timelineRefs } from '@/timelineItems'
import { scrollToCurrentHour } from '@/timelineItems'
import TheTimelineIndicator from '@/components/TheTimelineIndicator.vue'
import { startCurrentDateTimer, stopCurrentDateTimer } from '@/time'

stopTimelineIemTimer()

onActivated(() => {
  scrollToCurrentHour()
  startCurrentDateTimer()
})

onDeactivated(stopCurrentDateTimer)
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
