<script setup>
import { isHourValid } from '@/validators'
import { computed } from 'vue'

const props = defineProps({
  hour: {
    type: Number,
    validator: isHourValid,
  },
})

const classes = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounded  px-2  font-mono',
  props.hour === new Date().getHours()
    ? 'bg-purple-900 text-white font-bold text-lg'
    : 'bg-gray-100 text-grey-500',
]

const formattedHour = computed(() => `${props.hour.toString().padStart(2, 0)}:00`)
</script>

<template>
  <a href="#" :class="classes"> {{ formattedHour }} </a>
</template>
