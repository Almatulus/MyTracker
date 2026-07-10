<script setup>
import { ref, provide } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivitites from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import {
  generateTimeItems,
  generateActivitySelectOptions,
  generatePeriodSelectOptions,
} from './functions.js'
import { currentPage, timelineRef } from './router.js'
import { PAGE_PROGRESS, PAGE_TIMELINE, PAGE_ACTIVITIES } from './constants.js'
import * as keys from './keys.js'
import {
  activities,
  activitySelectOptions,
  createActivity,
  deleteActivity,
  updateActivityId,
  updateSecondsToComplete,
} from './activities.js'

const timelineItems = ref(generateTimeItems())

function updateTimelineItemActivitySeconds(timeline, activitySeconds) {
  timeline.activitySeconds += activitySeconds
}

provide(keys.timelineItemsKey, timelineItems)
provide(keys.activitySelectOptionsKey, activitySelectOptions)
provide(keys.periodSelectOptionsKey, generatePeriodSelectOptions())
provide(keys.updateActivityIdKey, updateActivityId)
provide(keys.createActivityKey, createActivity)
provide(keys.deleteActivityKey, deleteActivity)
provide(keys.updateTimelineItemActivitySecondsKey, updateTimelineItemActivitySeconds)
provide(keys.updateSecondsToCompleteKey, updateSecondsToComplete)
</script>

<template>
  <TheHeader />

  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      ref="timelineRef"
    />
    <TheActivitites v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav />
</template>
