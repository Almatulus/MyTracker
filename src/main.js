import { createApp } from 'vue'
import App from './App.vue'
import './css/style.css'
import { loadState, saveState } from './storage.js'

loadState()

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') saveState()
})

createApp(App).mount('#app')
