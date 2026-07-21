import { ref, computed } from 'vue'
import { generateId } from './functions'
import { HUNDRED_PERCENT, SECONDS_IN_HOUR } from './constants'

export const activities = ref(generateActivities())
export const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))
export const trackedActivities = computed(() =>
  activities.value.filter((activity) => activity.secondsToComplete),
)

export function updateActivity(activity, fields) {
  return Object.assign(activity, fields)
}

export function createActivity(activity) {
  activities.value.push(activity)
}

export function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}

export function calculateActivityCompletionPercentage({ secondsToComplete }, trackedSeconds) {
  return Math.floor((trackedSeconds * HUNDRED_PERCENT) / secondsToComplete)
}

export function calculateCompletionPercentage(totalTrackedSeconds) {
  return Math.floor((totalTrackedSeconds * HUNDRED_PERCENT) / totalActivitySecondsToComplete.value)
}

const totalActivitySecondsToComplete = computed(() => {
  return trackedActivities.value
    .map(({ secondsToComplete }) => secondsToComplete)
    .reduce((total, seconds) => (total += seconds), 0)
})

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
