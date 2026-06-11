<script setup>
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivitites from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import { normalizeHash, generateTimeItems } from './functions.js'
import { PAGE_PROGRESS, PAGE_TIMELINE, PAGE_ACTIVITIES } from './pageConstants.js'

const currentPage = ref(normalizeHash())

const timeItems = generateTimeItems()

function routeTo(page) {
  currentPage.value = page
}
</script>

<template>
  <TheHeader @navigate="routeTo($event)" />

  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" :timeline-items="timeItems" />
    <TheActivitites v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav v-model="currentPage" />
</template>
