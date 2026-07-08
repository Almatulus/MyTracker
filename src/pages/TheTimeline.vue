<script setup>
import TimelineItem from '@/components/TimelineItem.vue'
import { validateTimeLineItems, isTimeLineItemValid, isNull, isNotEmptyString } from '@/validators'
import { onMounted, ref } from 'vue'

defineProps({
  timelineItems: {
    type: Array,
    required: true,
    validator: validateTimeLineItems,
  },
})

defineExpose({ scrollToHour })

const timelineRefs = ref([])

onMounted(() => {
  scrollToHour(new Date().getHours(), false)
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
        @scroll-to-hour="scrollToHour"
        ref="timelineRefs"
      />
    </ul>
  </div>
</template>
