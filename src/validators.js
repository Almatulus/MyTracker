import { MENU_LIST, HOURS_PER_DAY, MIDNIGHT_HOUR } from './pageConstants'

export function isPageValid(page) {
  return Object.keys(MENU_LIST).includes(page)
}

export function validateTimeLineItems(timelineItems) {
  return timelineItems.every(isTimeLineItemValid)
}

export function isTimeLineItemValid({ hour }) {
  return typeof hour === 'number' && hour >= MIDNIGHT_HOUR && hour < HOURS_PER_DAY
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

function isSelectOptionValid({ value, label }) {
  return typeof value === 'number' && typeof label === 'string'
}
