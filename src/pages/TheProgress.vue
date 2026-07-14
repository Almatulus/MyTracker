<script setup>
import ProgressItem from '@/components/ProgressItem.vue'
import { activities, trackedActivities } from '@/activities'
</script>

<template>
  <ul class="divide-y">
    <ProgressItem v-for="activity in trackedActivities" :key="activity" :activity="activity" />
  </ul>
</template>
