import { APP_NAME } from '../constants'
import { today } from './time'
import { activeTimelineItem, timelineItems, initializeTimelineItems } from './timelineItems'
import { activities, initializeActivities } from './activities'
import { startTimelineItemTimer, stopTimelineItemTimer } from './timelineItemTimer'

export function syncState(shouldLoad = true) {
  shouldLoad ? loadState() : saveState()

  if (activeTimelineItem.value) {
    shouldLoad ? startTimelineItemTimer() : stopTimelineItemTimer()
  }
}

function saveState() {
  localStorage.setItem(
    APP_NAME,
    JSON.stringify({
      timelineItems: timelineItems.value,
      activities: activities.value,
      lastActiveAt: today(),
    }),
  )
}

function loadState() {
  // Загрузка данных из localstorage
  const state = loadFromLocalStorage()
  //Инициализация timelineItems
  initializeTimelineItems(state)
  //Инициализация activities
  initializeActivities(state)
}

function loadFromLocalStorage() {
  const serializedState = localStorage.getItem(APP_NAME)

  return serializedState ? JSON.parse(serializedState) : {}
}
