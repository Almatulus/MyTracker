<script setup>
import { isNumber } from '@/validators.js'
import VButton from './VButton.vue'
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/solid'
import { computed } from 'vue'
import { formatSeconds } from '@/functions.js'

const props = defineProps({
  seconds: {
    type: Number,
    default: 0,
    validator: isNumber,
  },
})

const formattedSeconds = computed(() => formatSeconds(props.seconds))
</script>

<template>
  <div class="flex items-center gap-2">
    <VButton type="negative" class="p-1">
      <ArrowPathIcon class="h-6" />
    </VButton>

    <span class="rounded bg-gray-200 px-2 py-1 flex grow font-mono text-lg">{{
      formattedSeconds
    }}</span>

    <VButton type="success" class="p-1">
      <PlayIcon class="h-6" />
    </VButton>
    <VButton type="danger" class="p-1">
      <PauseIcon class="h-6" />
    </VButton>
  </div>
</template>
