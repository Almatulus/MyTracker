import { ref } from 'vue'
import { PAGE_TIMELINE } from './constants'
import { isPageValid } from './validators.js'

function normalizeHash() {
  const page = window.location.hash.slice(1)

  if (isPageValid(page)) {
    return page
  }

  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}

export const currentPage = ref(normalizeHash())

export const timelineRef = ref()

export function routeTo(page) {
  if (page === PAGE_TIMELINE && currentPage.value === PAGE_TIMELINE) {
    timelineRef.value.scrollToHour(new Date().getHours())
  }

  currentPage.value = page
}
