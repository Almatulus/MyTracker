<script setup>
import { ref } from 'vue'
import VSelect from './VSelect.vue'
import { isTimeLineItemValid } from '@/validators.js'
import TimelineHour from './TimelineHour.vue'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimeLineItemValid,
  },
})

const options = [
  { value: 1, label: 'Coding' },
  { value: 2, label: 'Reading' },
]

let selectedId = ref(null)
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <VSelect v-model="selectedId" :options="options" placeholder="Rest" />
    <TimelineHour :hour="props.timelineItem.hour" />
  </li>
</template>
