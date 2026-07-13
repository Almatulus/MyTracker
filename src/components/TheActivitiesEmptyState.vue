<script setup>
import { ICON_FACE_FROWN } from '@/icons.js'
import VIcon from './VIcon.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-3 grow">
    <VIcon :name="ICON_FACE_FROWN" class="h-25 text-gray-900" />
    <span class="text-gray-700">You don't have any activities</span>
  </div>
</template>
