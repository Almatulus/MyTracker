<script setup>
import { computed, reactive, ref, provide } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivitites from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import {
  normalizeHash,
  generateTimeItems,
  generateActivitySelectOptions,
  generatePeriodSelectOptions,
  generateActivities,
} from './functions.js'
import { PAGE_PROGRESS, PAGE_TIMELINE, PAGE_ACTIVITIES } from './constants.js'

const currentPage = ref(normalizeHash())

const timelineItems = ref(generateTimeItems())

const activities = reactive(generateActivities())

const timeline = ref()

function routeTo(page) {
  if (page === PAGE_TIMELINE && currentPage.value === PAGE_TIMELINE) {
    timeline.value.scrollToHour(new Date().getHours())
  }

  currentPage.value = page
}

const activitySelectOptions = computed(() => generateActivitySelectOptions(activities))

function createActivity(activity) {
  activities.push(activity)
}

function deleteActivity(activity) {
  timelineItems.value.forEach((item) => {
    if (item.activityId === activity.id) {
      item.activityId = null
      item.activitySeconds = 0
    }
  })

  activities.splice(activities.indexOf(activity), 1)
}

function updateActivityId(timeline, activityId) {
  timeline.activityId = activityId
}

function updateSecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete
}

function updateTimelineItemActivitySeconds(timeline, activitySeconds) {
  timeline.activitySeconds += activitySeconds
}

provide('timelineItems', timelineItems)
provide('activitySelectOptions', activitySelectOptions.value)
provide('periodSelectOptions', generatePeriodSelectOptions())
provide('updateActivityId', updateActivityId)
provide('updateTimelineItemActivitySeconds', updateTimelineItemActivitySeconds)
provide('updateSecondsToComplete', updateSecondsToComplete)
</script>

<template>
  <TheHeader @navigate="routeTo($event)" />

  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      ref="timeline"
    />
    <TheActivitites
      @create-activity="createActivity"
      @delete-activity="deleteActivity"
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav v-model="currentPage" />
</template>
