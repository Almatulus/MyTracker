import { PAGE_TIMELINE, HOURS_PER_DAY, MIDNIGHT_HOUR } from './pageConstants.js'
import { isPageValid } from './validators.js'

export function normalizeHash() {
  const page = window.location.hash.slice(1)

  if (isPageValid(page)) {
    return page
  }

  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}

export function generateTimeItems() {
  const timeItems = []
  for (let hour = MIDNIGHT_HOUR; hour < HOURS_PER_DAY; hour++) {
    timeItems.push({ hour })
  }

  return timeItems
}
