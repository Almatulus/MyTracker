<script setup>
import ActivityItem from '@/components/ActivityItem.vue'
import TheActivityForm from '@/components/TheActivityForm.vue'
import TheEmptyState from '@/components/TheEmptyState.vue'
import { activities } from '@/activities'
import { ICON_FACE_FROWN } from '@/icons'
</script>

<template>
  <div class="flex grow flex-col px-2">
    <ul v-if="activities.length" class="divide-y grow">
      <ActivityItem v-for="activity in activities" :key="activity.id" :activity="activity" />
    </ul>

    <TheEmptyState :icon-name="ICON_FACE_FROWN" v-else />

    <TheActivityForm />
  </div>
</template>
