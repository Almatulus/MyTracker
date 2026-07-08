import { ref } from 'vue'
import { PAGE_TIMELINE } from './constants'
import { normalizeHash } from './functions'

export const currentPage = ref(normalizeHash())

export const timelineRef = ref()

export function routeTo(page) {
  if (page === PAGE_TIMELINE && currentPage.value === PAGE_TIMELINE) {
    timelineRef.value.scrollToHour(new Date().getHours())
  }

  currentPage.value = page
}
