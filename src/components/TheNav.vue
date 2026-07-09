<script setup>
import NavItem from './NavItem.vue'
import { MENU_ITEMS } from '@/constants.js'
</script>

<template>
  <nav class="sticky bottom-0 bg-white border-t border-gray-400">
    <ul class="flex items-center justify-around">
      <NavItem v-for="menuItem in MENU_ITEMS" :key="menuItem.page" :menu-item="menuItem">
        <component class="h-6 w-6" :is="menuItem.icon"></component>{{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
