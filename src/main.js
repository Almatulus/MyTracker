import { createApp } from 'vue'
import App from './App.vue'
import './css/style.css'
import { syncState } from './modules/storage.js'
import { startCurrentDateTimer } from './modules/time.js'

syncState()

startCurrentDateTimer()

document.addEventListener('visibilitychange', () => {
  syncState(document.visibilityState === 'visible')
})

createApp(App).mount('#app')
