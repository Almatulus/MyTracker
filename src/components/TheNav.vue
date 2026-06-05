<script setup>
import { ref } from 'vue'
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/solid'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '../pageConstants'
import NavItem from './NavItem.vue'

const menuList = ref({
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon,
})

const currentPage = ref(normalizeHash())

function normalizeHash() {
  const hash = window.location.hash.slice(1)

  if (Object.keys(menuList).includes(hash)) {
    return hash
  }

  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}
</script>

<template>
  <nav class="sticky bottom-0 bg-white border-t border-gray-400">
    <ul class="flex items-center justify-around">
      <NavItem
        v-for="(icon, page) in menuList"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-slate-300 pointer-events-none': page === currentPage }"
        @click="currentPage = page"
      >
        <component class="h-6 w-6" :is="icon"></component>{{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
