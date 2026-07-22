import { createApp } from 'vue'
import App from './App.vue'
import './css/style.css'
import { loadState, saveState } from './storage.js'
import { findActiveTimelineItem, startTimelineItemTimer } from './timelineItems.js'

loadState()

const activeTimelineItem = findActiveTimelineItem()

if (activeTimelineItem) startTimelineItemTimer(activeTimelineItem)

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') saveState()
})

createApp(App).mount('#app')
