<script setup>
import { generateTimeItems } from '@/functions'

const timeItems = generateTimeItems()
</script>

<template>
  <div class="mt-10">
    <ul>
      <li
        v-for="{ hour } in timeItems"
        :key="hour"
        class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4"
      >
        <a
          href="#"
          class="absolute -top-4 left-1/2 -translate-x-1/2 rounded bg-gray-100 px-2 text-lg font-mono"
        >
          {{ hour }}:00
        </a>
      </li>
    </ul>
  </div>
</template>
