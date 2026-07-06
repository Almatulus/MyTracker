<script setup>
import { isActivityItemValid } from '@/validators'
import { formatSeconds } from '@/functions'
import { computed } from 'vue'

const props = defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityItemValid,
  },
})

const formattedSeconds = computed(() => formatSeconds(props.activity.secondsToComplete))
</script>

<template>
  <div class="rounded bg-green-100 p-1 text-green-800">
    {{ formattedSeconds }}
  </div>
</template>
