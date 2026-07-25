<script setup>
import VSelect from '../ui/VSelect.vue'
import { isTimeLineItemValid } from '@/validators.js'
import TimelineHour from './TimelineHour.vue'
import { computed, ref } from 'vue'
import TimelineStopWatch from './TimelineStopWatch.vue'
import { activitySelectOptions } from '@/modules/activities.js'
import { scrollToHour, updateTimelineItem } from '@/modules/timelineItems.js'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimeLineItemValid,
  },
})

const modelValue = computed({
  get() {
    return props.timelineItem.activityId
  },
  set(val) {
    updateTimelineItem(props.timelineItem, { activityId: val })
  },
})

const liRef = ref(null)

defineExpose({
  liRef,
})
</script>

<template>
  <li ref="liRef" class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <VSelect v-model="modelValue" :options="activitySelectOptions" placeholder="Rest" />
    <TimelineHour
      :hour="props.timelineItem.hour"
      @click.prevent="scrollToHour(timelineItem.hour)"
    />
    <TimelineStopWatch :timeline-item="timelineItem" />
  </li>
</template>
