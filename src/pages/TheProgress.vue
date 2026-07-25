<script setup>
import ProgressItem from '@/components/progress/ProgressItem.vue'
import { activities, trackedActivities } from '@/modules/activities'
import TheEmptyState from '@/components/ui/TheEmptyState.vue'
import { ICON_CLIPBOARD_DOCUMENT_LIST } from '@/modules/icons'
</script>

<template>
  <ul v-if="trackedActivities.length" class="divide-y">
    <ProgressItem v-for="activity in trackedActivities" :key="activity" :activity="activity" />
  </ul>
  <TheEmptyState
    text="You don't have any tracked activities"
    :icon-name="ICON_CLIPBOARD_DOCUMENT_LIST"
    v-else
  />
</template>
