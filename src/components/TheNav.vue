<script setup>
import { ref } from 'vue'
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/solid'

const menuList = ref({
  timeline: ClockIcon,
  activities: ListBulletIcon,
  progress: ChartBarIcon,
})
</script>

<template>
  <nav class="sticky bottom-0 bg-white border-t border-gray-400">
    <ul class="flex items-center justify-around">
      <li v-for="(icon, page) in menuList" :key="page" class="flex-1 border border-gray-400">
        <a :href="`#${page}`" class="flex flex-col items-center capitalize font-medium p-2">
          <component class="h-6 w-6" :is="icon"></component>{{ page }}
        </a>
      </li>
    </ul>
  </nav>
</template>
