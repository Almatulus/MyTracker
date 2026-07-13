<script setup>
defineProps(['name'])
</script>

<template>
  <li class="flex flex-col gap-1 p-4">
    <div class="truncate text-lg">{{ name }}</div>
    <div class="bg-neutral-200 h-5 overflow-hidden rounded">
      <div class="bg-red-500 h-full" style="width: 20%"></div>
    </div>
    <div class="flex justify-between font-mono">
      <span>10%</span>
      <span>03:00 / 30:00</span>
    </div>
  </li>
</template>
