import { ref, computed } from 'vue'
import { HUNDRED_PERCENT } from '../constants'

export const activities = ref([])
export const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))
export const trackedActivities = computed(() =>
  activities.value.filter((activity) => activity.secondsToComplete),
)

export function initializeActivities(state) {
  activities.value = state.activities || []
}

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

function generateActivitySelectOptions(activities) {
  return activities.map((activity) => {
    return {
      label: activity.name,
      value: activity.id,
    }
  })
}
