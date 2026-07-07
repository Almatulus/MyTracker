<script setup>
import VSelect from './VSelect.vue'
import {
  isHourValid,
  isNotEmptyString,
  isNull,
  isNumber,
  isTimeLineItemValid,
  validateSelectOptions,
} from '@/validators.js'
import TimelineHour from './TimelineHour.vue'
import { computed, ref } from 'vue'
import TimelineStopWatch from './TimelineStopWatch.vue'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimeLineItemValid,
  },
  activitySelectOptions: {
    type: Array,
    required: true,
    validator: validateSelectOptions,
  },
})

const emit = defineEmits({
  'update:activityId': (activityId) => isNull(activityId) || isNotEmptyString(activityId),
  scrollToHour: isHourValid,
  updateActivitySeconds: isNumber,
})

const modalValue = computed({
  get() {
    return props.timelineItem.activityId
  },
  set(val) {
    emit('update:activityId', val)
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
    <TimelineStopWatch
      :seconds="timelineItem.activitySeconds"
      :hour="timelineItem.hour"
      @update:seconds="emit('updateActivitySeconds', $event)"
    />
  </li>
</template>
