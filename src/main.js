import { createApp } from 'vue'
import App from './App.vue'
import './css/style.css'
import { loadState, saveState } from './storage.js'
import { activeTimelineItem, startTimelineItemTimer } from './timelineItems.js'

loadState()

if (activeTimelineItem.value) startTimelineItemTimer(activeTimelineItem.value)

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') saveState()
})

createApp(App).mount('#app')
