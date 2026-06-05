<script setup>
import { MENU_LIST } from '@/pageConstants.js'
import NavItem from './NavItem.vue'

const currentPage = defineModel({
  type: String,
  required: true,
})
</script>

<template>
  <nav class="sticky bottom-0 bg-white border-t border-gray-400">
    <ul class="flex items-center justify-around">
      <NavItem
        v-for="(icon, page) in MENU_LIST"
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
