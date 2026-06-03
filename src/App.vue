<script setup>
import { ref } from 'vue'
import { ClockIcon, CheckCircleIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/solid'

let menuList = ref([
  {
    title: 'timeline',
    icon: 'ClockIcon',
  },
  {
    title: 'activities',
    icon: 'ListBulletIcon',
  },
  {
    title: 'progress',
    icon: 'ChartBarIcon',
  },
])

const iconComponents = {
  ClockIcon,
  ListBulletIcon,
  ChartBarIcon,
}
</script>

<template>
  <header
    class="sticky top-0 z-50 flex items-center justify-between p-2 border-b border-gray-400 bg-white"
  >
    <a href="#" class="flex items-center">
      <ClockIcon class="w-10" />
      <p class="font-semibold">MyTracker</p>
    </a>
    <a href="#" class="text-sm">
      <div v-if="true" class="flex items-center gap-1 font-medium">
        Day complete!
        <CheckCircleIcon class="h-7 text-green-500" />
      </div>

      <div v-else class="flex items-center gap-1 font-medium">
        Progress: 20%
        <div class="bg-red-500 h-3 w-3 rounded-full"></div>
      </div>
    </a>
  </header>
  <main class="flex flex-grow flex-col"></main>

  <nav class="sticky bottom-0 bg-white border-t border-gray-400">
    <ul class="flex items-center justify-around">
      <li v-for="el in menuList" :key="el.title" class="flex-1 border border-gray-400">
        <a :href="`#${el.title}`" class="flex flex-col items-center capitalize font-medium p-2">
          <component class="h-6 w-6" :is="iconComponents[el.icon]"></component>{{ el.title }}
        </a>
      </li>
    </ul>
  </nav>
</template>
