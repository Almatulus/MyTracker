import { reactive, computed } from 'vue'
import { generateActivities, generateActivitySelectOptions } from './functions'

export const activities = reactive(generateActivities())
export const activitySelectOptions = computed(() => generateActivitySelectOptions(activities))

export function createActivity(activity) {
  activities.push(activity)
}

export function deleteActivity(activity) {
  activities.splice(activities.indexOf(activity), 1)
}

export function updateActivityId(timeline, activityId) {
  timeline.activityId = activityId
}

export function updateSecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete
}
