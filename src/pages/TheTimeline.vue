<script setup>
import { generateTimeItems } from '@/functions'
import TimelineItem from '@/components/TimelineItem.vue'

const timeItems = generateTimeItems()
</script>

<template>
  <div class="mt-10">
    <ul>
      <TimelineItem v-for="item in timeItems" :key="item" :timeline-item="item" />
    </ul>
  </div>
</template>
