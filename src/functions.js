import {
  PAGE_TIMELINE,
  HOURS_PER_DAY,
  MIDNIGHT_HOUR,
  SECONDS_IN_HOUR,
  MILLISECONDS_IN_SECOND,
} from './pageConstants.js'
import { isNull, isPageValid } from './validators.js'

export function normalizeHash() {
  const page = window.location.hash.slice(1)

  if (isPageValid(page)) {
    return page
  }

  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}

export function generateActivities() {
  return ['Coding', 'Reading', 'Hiding'].map((name, hours) => {
    return {
      id: generateId(),
      name: name,
      secondsToComplete: hours * SECONDS_IN_HOUR,
    }
  })
}

export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function generateTimeItems() {
  const timeItems = []
  for (let hour = MIDNIGHT_HOUR; hour < HOURS_PER_DAY; hour++) {
    timeItems.push({
      hour,
      activityId: null,
      activitySeconds: 0,
    })
  }

  return timeItems
}

export function generateActivitySelectOptions(activities) {
  return activities.map((activity) => {
    return {
      label: activity.name,
      value: activity.id,
    }
  })
}

export function formatSeconds(seconds) {
  const date = new Date()

  date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECOND)

  const utc = date.toUTCString()

  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6)
}
