<script setup>
import { routeTo, currentPage } from '@/modules/router.js'
import { isMenuItemValid } from '@/validators'
import { computed } from 'vue'
import VIcon from '../ui/VIcon.vue'
import { PAGE_TIMELINE } from '@/constants.js'
import { scrollToCurrentHour } from '@/modules/timelineItems.js'

const props = defineProps({
  menuItem: {
    type: Object,
    required: true,
    validator: isMenuItemValid,
  },
})

const classes = computed(() => [
  'flex flex-col items-center capitalize font-medium p-2',
  props.menuItem.page === currentPage.value ? 'bg-gray-200' : 'hover:bg-gray-100',
])

function handleClick() {
  currentPage.value === PAGE_TIMELINE && props.menuItem.page === PAGE_TIMELINE
    ? scrollToCurrentHour(true)
    : routeTo(props.menuItem.page)
}
</script>

<template>
  <li class="flex-1">
    <a :href="`#${menuItem.page}`" :class="classes" @click="handleClick">
      <VIcon class="h-6 w-6" :name="menuItem.icon"></VIcon>{{ menuItem.page }}
    </a>
  </li>
</template>
