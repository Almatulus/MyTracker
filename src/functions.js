import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE, HOURS_PER_DAY } from './pageConstants.js'

export function normalizeHash() {
  const hash = window.location.hash.slice(1)

  if ([PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE].includes(hash)) {
    return hash
  }

  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}

export function generateTimeItems() {
  const timeItems = []
  for (let hour = 0; hour <= HOURS_PER_DAY; hour++) {
    timeItems.push({ hour })
  }

  return timeItems
}
