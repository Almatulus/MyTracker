<script setup>
import { reactive, ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivitites from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import { normalizeHash, generateTimeItems, generateActivitySelectOptions } from './functions.js'
import { PAGE_PROGRESS, PAGE_TIMELINE, PAGE_ACTIVITIES } from './pageConstants.js'

const currentPage = ref(normalizeHash())

const timeItems = generateTimeItems()

const activities = reactive(['Coding', 'Training', 'Reading'])

function routeTo(page) {
  currentPage.value = page
}

const activitySelectOptions = generateActivitySelectOptions(activities)

function createActivity(activity) {
  console.log(activity)
  activities.push(activity)
}

function deleteActivity(activity) {
  activities.splice(activities.indexOf(activity), 1)
}
</script>

<template>
  <TheHeader @navigate="routeTo($event)" />

  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timeItems"
      :activity-select-options="activitySelectOptions"
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
