<script setup>
import ActivitiesItem from '@/components/ActivitiesItem.vue'

const activities = ['Coding', 'Training', 'Reading']
</script>

<template>
  <div class="py-1 px-4">
    <ul class="divide-y">
      <ActivitiesItem v-for="activity in activities" :key="activity" :activity="activity" />
    </ul>
  </div>
</template>
