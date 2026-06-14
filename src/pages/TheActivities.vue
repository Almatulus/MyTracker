<script setup>
import { ref } from 'vue'
import { TrashIcon } from '@heroicons/vue/24/solid'
import VButton from '@/components/VButton.vue'
import VSelect from '@/components/VSelect.vue'

const periodOptions = [
  { value: 15, label: '0:15' },
  { value: 30, label: '0:30' },
  { value: 45, label: '0:45' },
]

const activities = ['Coding', 'Training', 'Reading']
</script>

<template>
  <div class="py-1 px-4">
    <ul class="divide-y">
      <li v-for="activity in activities" :key="activity" class="flex flex-col column gap-3 py-4">
        <div class="flex items-center justify-between">
          <span class="truncate text-l">{{ activity }}</span>
          <VButton type="negative" class="p-1">
            <TrashIcon class="h-6" />
          </VButton>
        </div>
        <div class="">
          <v-select class="font-mono" placeholder="h:mm" :options="periodOptions"></v-select>
        </div>
      </li>
    </ul>
  </div>
</template>
