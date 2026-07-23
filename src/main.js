import { createApp } from 'vue'
import App from './App.vue'
import './css/style.css'
import { syncState } from './storage.js'

syncState()

document.addEventListener('visibilitychange', () => {
  syncState(document.visibilityState === 'visible')
})

createApp(App).mount('#app')
