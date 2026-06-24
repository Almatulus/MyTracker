<script setup>
import { computed, reactive, ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivitites from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import {
  normalizeHash,
  generateTimeItems,
  generateActivitySelectOptions,
  generateActivities,
} from './functions.js'
import { PAGE_PROGRESS, PAGE_TIMELINE, PAGE_ACTIVITIES } from './constants.js'

const currentPage = ref(normalizeHash())

const timelineItems = ref(generateTimeItems())

const activities = reactive(generateActivities())

function routeTo(page) {
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
</script>

<template>
  <TheHeader @navigate="routeTo($event)" />

  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activity-select-options="activitySelectOptions"
      @update:activity-id="updateActivityId"
    />
    <TheActivitites
      @create-activity="createActivity"
      @delete-activity="deleteActivity"
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      @update:seconds-to-complete="updateSecondsToComplete"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav v-model="currentPage" />
</template>
