import { MENU_LIST, HOURS_PER_DAY } from './pageConstants'

export function isPageValid(page) {
  return Object.keys(MENU_LIST).includes(page)
}

export function isTimeLineItemValid({ hour }) {
  return typeof hour === 'number' && hour < HOURS_PER_DAY
}
