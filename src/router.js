import { ref } from 'vue'
import { PAGE_TIMELINE } from './constants'
import { isPageValid } from './validators.js'
import { currentHour } from './functions'

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
  document.body.scrollIntoView()

  currentPage.value = page
}
