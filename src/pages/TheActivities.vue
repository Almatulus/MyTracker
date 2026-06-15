<script setup>
import ActivitiesItem from '@/components/ActivitiesItem.vue'
import { validateActivityItems } from '@/validators'

defineProps({
  activities: {
    type: Array,
    required: true,
    validator: validateActivityItems,
  },
})
</script>

<template>
  <div class="py-1 px-4">
    <ul class="divide-y">
      <ActivitiesItem v-for="activity in activities" :key="activity" :activity="activity" />
    </ul>
  </div>
</template>
