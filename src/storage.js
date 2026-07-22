import { APP_NAME, MILLISECONDS_IN_SECOND } from './constants'
import { isToday, today } from './time'
import { findActiveTimelineItem, timelineItems } from './timelineItems'
import { activities } from './activities'

export function saveState() {
  localStorage.setItem(
    APP_NAME,
    JSON.stringify({
      timelineItems: timelineItems.value,
      activities: activities.value,
      lastActiveAt: today(),
    }),
  )
}

export function loadState() {
  const serializedState = localStorage.getItem(APP_NAME)

  const state = serializedState ? JSON.parse(serializedState) : {}

  const lastActiveAt = new Date(state.lastActiveAt)

  timelineItems.value = isToday(lastActiveAt)
    ? syncIdleSeconds(state.timelineItems, lastActiveAt)
    : timelineItems.value

  activities.value = state.activities || activities.value
}

function syncIdleSeconds(timelineItems, lastActiveAt) {
  const activeTimelineItem = timelineItems.find((timelineItem) => timelineItem.isActive)

  console.log(lastActiveAt)
  console.log(today())

  if (activeTimelineItem) {
    console.log((today() - lastActiveAt) / MILLISECONDS_IN_SECOND)
    activeTimelineItem.activitySeconds += (today() - lastActiveAt) / MILLISECONDS_IN_SECOND
  }

  return timelineItems
}
