import { BUTTON_TYPES, MENU_ITEMS, HOURS_PER_DAY, MIDNIGHT_HOUR } from './constants'
import { ICONS } from './modules/icons'

export function isPageValid(page) {
  return MENU_ITEMS.some((menuItem) => menuItem.page === page)
}

export function isMenuItemValid(menuItem) {
  return MENU_ITEMS.includes(menuItem)
}

export function isButtonTypeValid(type) {
  return BUTTON_TYPES.includes(type)
}

export function isTimeLineItemValid({ hour }) {
  return isHourValid(hour)
}

export function isActivityItemValid({ id, name, secondsToComplete }) {
  return [isNotEmptyString(id), isNotEmptyString(name), isNumberOrNull(secondsToComplete)].every(
    Boolean,
  )
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

function isSelectOptionValid({ value, label }) {
  return (isNumber(value) || isNotEmptyString(value)) && isNotEmptyString(label)
}

export function isSelectValueValid(value) {
  return isNotEmptyString(value) || isNumberOrNull(value)
}

export function isHourValid(value) {
  return isNumber(value) && isBetween(value, MIDNIGHT_HOUR, HOURS_PER_DAY - 1)
}

export function isIconValid(icon) {
  return Object.hasOwn(ICONS, icon)
}

export function isNumber(value) {
  return typeof value === 'number'
}

function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
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

export function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

export function isNotEmptyString(value) {
  return isString(value) && isNotEmpty(value)
}
