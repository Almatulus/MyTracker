<script setup>
import ActivityItem from '@/components/ActivityItem.vue'
import {
  validateActivityItems,
  isActivityItemValid,
  isNumber,
  validateTimeLineItems,
} from '@/validators'
import TheActivityForm from '@/components/TheActivityForm.vue'
import TheActivitiesEmptyState from '@/components/TheActivitiesEmptyState.vue'

defineProps({
  activities: {
    type: Array,
    required: true,
    validator: validateActivityItems,
  },
  timelineItems: {
    type: Array,
    required: true,
    validator: validateTimeLineItems,
  },
})

const emit = defineEmits({
  createActivity: isActivityItemValid,
  deleteActivity: isActivityItemValid,
  'update:secondsToComplete': (activity, secondsToComplete) => {
    return isActivityItemValid(activity) && isNumber(secondsToComplete)
  },
})
</script>

<template>
  <div class="flex grow flex-col px-2">
    <ul v-if="activities.length" class="divide-y grow">
      <ActivityItem
        @delete="emit('deleteActivity', activity)"
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        :timeline-items="timelineItems"
        @update:seconds-to-complete="emit('update:secondsToComplete', activity, $event)"
      />
    </ul>

    <TheActivitiesEmptyState v-else />

    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>
