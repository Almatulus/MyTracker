import { reactive, computed } from 'vue'
import { generateId } from './functions'
import { HUNDRED_PERCENT, SECONDS_IN_HOUR } from './constants'

export const activities = reactive(generateActivities())
export const activitySelectOptions = computed(() => generateActivitySelectOptions(activities))
export const trackedActivities = computed(() =>
  activities.filter((activity) => activity.secondsToComplete),
)

export function updateActivity(activity, fields) {
  return Object.assign(activity, fields)
}

export function createActivity(activity) {
  activities.push(activity)
}

export function deleteActivity(activity) {
  activities.splice(activities.indexOf(activity), 1)
}

export function calculateActivityCompletionPercentage({ secondsToComplete }, trackedSeconds) {
  return Math.floor((trackedSeconds * HUNDRED_PERCENT) / secondsToComplete)
}

function generateActivities() {
  return ['Coding', 'Reading', 'Hiding'].map((name, hours) => {
    return {
      id: generateId(),
      name: name,
      secondsToComplete: 15 * 60, // hours * SECONDS_IN_HOUR,
    }
  })
}

function generateActivitySelectOptions(activities) {
  return activities.map((activity) => {
    return {
      label: activity.name,
      value: activity.id,
    }
  })
}
