import { reactive, computed } from 'vue'
import { generateId } from './functions'
import { SECONDS_IN_HOUR } from './constants'

export const activities = reactive(generateActivities())
export const activitySelectOptions = computed(() => generateActivitySelectOptions(activities))

export function createActivity(activity) {
  activities.push(activity)
}

export function deleteActivity(activity) {
  activities.splice(activities.indexOf(activity), 1)
}

export function updateSecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete
}

function generateActivities() {
  return ['Coding', 'Reading', 'Hiding'].map((name, hours) => {
    return {
      id: generateId(),
      name: name,
      secondsToComplete: hours * SECONDS_IN_HOUR,
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
