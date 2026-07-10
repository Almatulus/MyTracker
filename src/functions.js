import {
  SECONDS_IN_HOUR,
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  MILLISECONDS_IN_SECOND,
} from './constants.js'

export function currentHour() {
  return new Date().getHours()
}

export function getTotalActivitySeconds(activity, timelineItems) {
  return timelineItems
    .filter((timelineItem) => timelineItem.activityId === activity.id)
    .reduce(
      (totalSeconds, timelineItem) => Math.round(timelineItem.activitySeconds + totalSeconds),
      0,
    )
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

export function generateActivitySelectOptions(activities) {
  return activities.map((activity) => {
    return {
      label: activity.name,
      value: activity.id,
    }
  })
}

export function generatePeriodSelectOptions() {
  const periodInMinutes = [
    15, 30, 45, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480,
  ]

  return periodInMinutes.map((period) => ({
    value: period * SECONDS_IN_MINUTE,
    label: generatePeriodSelectOptionsLabel(period),
  }))
}

function generatePeriodSelectOptionsLabel(period) {
  const hours = Math.floor(period / MINUTES_IN_HOUR)
    .toString()
    .padStart(2, 0)
  const minutes = (period % MINUTES_IN_HOUR).toString().padStart(2, 0)

  return `${hours}:${minutes}`
}

export function formatSeconds(seconds) {
  const date = new Date()

  date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECOND)

  const utc = date.toUTCString()

  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6)
}
