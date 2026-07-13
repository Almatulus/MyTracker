<script setup>
import { ICONS } from '@/icons'
import { isIconValid, isNotEmptyString } from '@/validators'

defineProps({
  name: {
    type: String,
    required: true,
    validator: isIconValid,
  },
  classes: {
    type: String,
    default: 'h-6',
    validator: isNotEmptyString,
  },
})
</script>

<template>
  <component :is="ICONS[name]" :class="classes"></component>
</template>
