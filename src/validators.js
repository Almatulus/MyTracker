import { BUTTON_TYPES, MENU_LIST, HOURS_PER_DAY, MIDNIGHT_HOUR } from './pageConstants'

export function isPageValid(page) {
  return Object.keys(MENU_LIST).includes(page)
}

export function isButtonTypeValid(type) {
  return Object.keys(BUTTON_TYPES).includes(type)
}

export function validateTimeLineItems(timelineItems) {
  return timelineItems.every(isTimeLineItemValid)
}

export function isTimeLineItemValid({ hour }) {
  return isHourValid(hour)
}

export function validateActivityItems(activities) {
  return activities.every(isActivityItemValid)
}

export function isActivityItemValid(activity) {
  return isString(activity) && isNotEmpty(activity)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

function isSelectOptionValid({ value, label }) {
  return isNumber(value) && isString(label)
}

export function isHourValid(value) {
  return isNumber(value) && isBetween(value, MIDNIGHT_HOUR, HOURS_PER_DAY - 1)
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
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

function isNull(value) {
  return value === null
}

function isNotEmpty(value) {
  return value.length > 0
}
