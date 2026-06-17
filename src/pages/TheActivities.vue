<script setup>
import { ref } from 'vue'
import ActivitiesItem from '@/components/ActivityItem.vue'
import { validateActivityItems, isActivityItemValid } from '@/validators'
import TheActivityForm from '@/components/TheActivityForm.vue'

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
    <ul class="divide-y grow">
      <ActivitiesItem
        @delete="emit('deleteActivity', activity)"
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
      />
    </ul>

    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>
