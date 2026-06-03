<script setup>
import { ref } from 'vue'
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/solid'
import NavItem from './NavItem.vue'

const menuList = ref({
  timeline: ClockIcon,
  activities: ListBulletIcon,
  progress: ChartBarIcon,
})

const currentPage = ref('timeline')
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
