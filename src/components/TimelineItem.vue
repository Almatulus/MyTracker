<script setup>
import VSelect from './VSelect.vue'
import {
  isNotEmptyString,
  isNull,
  isTimeLineItemValid,
  validateSelectOptions,
} from '@/validators.js'
import TimelineHour from './TimelineHour.vue'
import { computed } from 'vue'
import VButton from './VButton.vue'
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/solid'

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
})

const modalValue = computed({
  get() {
    return props.timelineItem.activityId
  },
  set(val) {
    emit('update:activityId', val)
  },
})
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <VSelect v-model="modalValue" :options="activitySelectOptions" placeholder="Rest" />
    <TimelineHour :hour="props.timelineItem.hour" />
    <div class="flex items-center gap-2">
      <VButton type="negative" class="p-1">
        <ArrowPathIcon class="h-6" />
      </VButton>

      <span class="rounded bg-gray-200 px-2 py-1 flex grow font-mono text-lg">00:00:00</span>

      <VButton type="success" class="p-1">
        <PlayIcon class="h-6" />
      </VButton>
      <VButton type="danger" class="p-1">
        <PauseIcon class="h-6" />
      </VButton>
    </div>
  </li>
</template>
