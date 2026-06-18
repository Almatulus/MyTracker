<script setup>
import ActivitiesItem from '@/components/ActivityItem.vue'
import { validateActivityItems, isActivityItemValid } from '@/validators'
import TheActivityForm from '@/components/TheActivityForm.vue'
import TheActivitiesEmptyState from '@/components/TheActivitiesEmptyState.vue'

defineProps({
  activities: {
    type: Array,
    required: true,
    validator: validateActivityItems,
  },
})

const emit = defineEmits({
  createActivity: isActivityItemValid,
  deleteActivity: isActivityItemValid,
})
</script>

<template>
  <div class="flex grow flex-col px-2">
    <ul v-if="activities.length" class="divide-y grow">
      <ActivitiesItem
        @delete="emit('deleteActivity', activity)"
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
      />
    </ul>

    <TheActivitiesEmptyState v-else />

    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>
