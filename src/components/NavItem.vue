<script setup>
import { routeTo, currentPage } from '@/router'
import { isMenuItemValid } from '@/validators'
import { computed } from 'vue'
import VIcon from './VIcon.vue'

const props = defineProps({
  menuItem: {
    type: Object,
    required: true,
    validator: isMenuItemValid,
  },
})

const classes = computed(() => [
  'flex flex-col items-center capitalize font-medium p-2',
  { 'bg-slate-300 pointer-events-none': props.menuItem.page === currentPage.value },
])
</script>

<template>
  <li class="flex-1">
    <a :href="`#${menuItem.page}`" :class="classes" @click="routeTo(menuItem.page)">
      <VIcon classes="h-6 w-6" :name="menuItem.icon"></VIcon>{{ menuItem.page }}
    </a>
  </li>
</template>
