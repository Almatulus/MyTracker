<script setup>
import { ref } from 'vue'
import VSelect from './VSelect.vue'
import { isTimeLineItemValid } from '@/validators.js'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimeLineItemValid,
  },
})

const linkClasses = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounded  px-2  font-mono',
  props.timelineItem.hour === new Date().getHours()
    ? 'bg-purple-500 text-white font-bold text-lg'
    : 'bg-gray-100 text-grey-500',
]

const options = [
  { value: 1, label: 'Coding' },
  { value: 2, label: 'Reading' },
]

let selectedId = ref(3)
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <VSelect :options="options" placeholder="Rest" :selected="selectedId" />
    <a href="#" :class="linkClasses"> {{ timelineItem.hour }}:00 </a>
  </li>
</template>
