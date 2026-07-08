<script setup>
import VSelect from './VSelect.vue'
import { isHourValid, isTimeLineItemValid } from '@/validators.js'
import TimelineHour from './TimelineHour.vue'
import { computed, inject, ref } from 'vue'
import TimelineStopWatch from './TimelineStopWatch.vue'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimeLineItemValid,
  },
})

const emit = defineEmits({
  scrollToHour: isHourValid,
})

const activitySelectOptions = inject('activitySelectOptions')
const updateActivityId = inject('updateActivityId')

const modalValue = computed({
  get() {
    return props.timelineItem.activityId
  },
  set(val) {
    updateActivityId(props.timelineItem, val)
  },
})

const liRef = ref(null)

defineExpose({
  liRef,
})
</script>

<template>
  <li ref="liRef" class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <VSelect v-model="modalValue" :options="activitySelectOptions" placeholder="Rest" />
    <TimelineHour
      :hour="props.timelineItem.hour"
      @click.prevent="emit('scrollToHour', timelineItem.hour)"
    />
    <TimelineStopWatch :timeline-item="timelineItem" />
  </li>
</template>
