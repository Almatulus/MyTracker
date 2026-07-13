<script setup>
import TimelineItem from '@/components/TimelineItem.vue'
import { watchPostEffect, nextTick } from 'vue'
import { timelineItems, timelineRefs } from '@/timelineItems'
import { scrollToHour, scrollToCurrentHour } from '@/timelineItems'
import { currentPage } from '@/router'
import { PAGE_TIMELINE } from '@/constants'

watchPostEffect(async () => {
  if (currentPage.value === PAGE_TIMELINE) {
    await nextTick()

    scrollToCurrentHour(false)
  }
})
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
