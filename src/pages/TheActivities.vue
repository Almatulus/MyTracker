<script setup>
import ActivitiesItem from '@/components/ActivityItem.vue'
import { validateActivityItems, isActivityItemValid } from '@/validators'

defineProps({
  activities: {
    type: Array,
    required: true,
    validator: validateActivityItems,
  },
})

const emit = defineEmits({
  deleteActivity: isActivityItemValid,
})
</script>

<template>
  <div class="py-1 px-4">
    <ul class="divide-y">
      <ActivitiesItem
        @delete="emit('deleteActivity', activity)"
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
      />
    </ul>
  </div>
</template>
