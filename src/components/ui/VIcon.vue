<script setup>
import { ICONS } from '@/modules/icons'
import { isIconValid } from '@/validators'

defineProps({
  name: {
    type: String,
    required: true,
    validator: isIconValid,
  },
})
</script>

<template>
  <component :is="ICONS[name]" :class="$attrs.class || 'h-6'"></component>
</template>
