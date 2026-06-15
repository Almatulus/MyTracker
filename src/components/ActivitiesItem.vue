<script setup>
import { ref } from 'vue'
import { TrashIcon } from '@heroicons/vue/24/solid'
import VButton from '@/components/VButton.vue'
import VSelect from '@/components/VSelect.vue'

defineProps({
  activity: {
    required: true,
    type: String,
  },
})

const periodOptions = [
  { value: 15, label: '0:15' },
  { value: 30, label: '0:30' },
  { value: 45, label: '0:45' },
]

const secondsToComplete = ref(null)
</script>

<template>
  <li class="flex flex-col column gap-3 py-4">
    <div class="flex items-center justify-between">
      <span class="truncate text-l">{{ activity }}</span>
      <VButton type="negative" class="p-1">
        <TrashIcon class="h-6" />
      </VButton>
    </div>
    <div class="">
      <VSelect
        v-model="secondsToComplete"
        class="font-mono"
        placeholder="h:mm"
        :options="periodOptions"
      ></VSelect>
    </div>
  </li>
</template>
