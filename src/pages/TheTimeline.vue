<script setup>
import TimelineItem from '@/components/TimelineItem.vue'
import { currentHour } from '@/functions'
import { onMounted, ref } from 'vue'
import { timelineItems } from '@/timelineItems'

defineExpose({ scrollToHour })

const timelineRefs = ref([])

onMounted(() => {
  scrollToHour(currentHour(), false)
})

function scrollToHour(hour, isSmooth = true) {
  timelineRefs.value[hour].liRef.scrollIntoView({
    block: 'center',
    behavior: isSmooth ? 'smooth' : 'instant',
  })
}
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
