import { createApp } from 'vue'
import App from './App.vue'
import './css/style.css'
import * as storage from './storage.js'
import { timelineItems } from './timelineItems.js'
import { activities } from './activities.js'

loadState()

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') saveState()
})

function saveState() {
  storage.save({
    timelineItems: timelineItems.value,
    activities: activities.value,
  })
}

function loadState() {
  const state = storage.load()

  timelineItems.value = state.timelineItems
  activities.value = state.activities
}

createApp(App).mount('#app')
