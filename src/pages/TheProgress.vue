<script setup>
import ProgressItem from '@/components/ProgressItem.vue'
import { activities, trackedActivities } from '@/activities'
import TheEmptyState from '@/components/TheEmptyState.vue'
import { ICON_CLIPBOARD_DOCUMENT_LIST } from '@/icons'
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
