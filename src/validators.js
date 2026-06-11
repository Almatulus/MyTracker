import { MENU_LIST, HOURS_PER_DAY, MIDNIGHT_HOUR } from './pageConstants'

export function isPageValid(page) {
  return Object.keys(MENU_LIST).includes(page)
}

export function isTimeLineItemValid({ hour }) {
  return typeof hour === 'number' && hour >= MIDNIGHT_HOUR && hour < HOURS_PER_DAY
}
