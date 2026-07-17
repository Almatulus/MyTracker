<script setup>
import VIcon from './VIcon.vue'
import { isIconValid, isNotEmptyString } from '@/validators.js'

defineProps({
  text: {
    type: String,
    default: `You don't have any activities`,
    validator: isNotEmptyString,
  },
  iconName: {
    type: String,
    required: true,
    validator: isIconValid,
  },
})
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-3 grow">
    <VIcon :name="iconName" class="h-25 text-gray-900" />
    <span class="text-gray-700">{{ text }}</span>
  </div>
</template>
