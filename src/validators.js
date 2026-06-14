import { MENU_LIST, HOURS_PER_DAY, MIDNIGHT_HOUR } from './pageConstants'

export function isPageValid(page) {
  return Object.keys(MENU_LIST).includes(page)
}

export function validateTimeLineItems(timelineItems) {
  return timelineItems.every(isTimeLineItemValid)
}

export function isTimeLineItemValid({ hour }) {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_PER_DAY - 1)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

function isSelectOptionValid({ value, label }) {
  return isNumber(value) && isString(label)
}

export function isNumber(value) {
  return typeof value === 'number'
}

function isString(value) {
  return typeof value === 'string'
}

function isBetween(value, start, end) {
  return value >= start && value <= end
}
