<script setup>
import { XMarkIcon } from '@heroicons/vue/24/solid'
import VButton from './VButton.vue'
import { validateSelectOptions } from '@/validators.js'

defineProps({
  options: {
    type: Array,
    required: true,
    validator: validateSelectOptions,
  },
  placeholder: {
    type: String,
  },
  selected: {
    type: Number,
    required: true,
  },
})

const model = defineModel()
</script>

<template>
  <div class="flex gap-2">
    <VButton type="negative">
      <XMarkIcon class="h-8" />
    </VButton>
    <select class="w-full truncate rounded bg-gray-200 py-1 px-2 text-xl">
      <option selected disabled>{{ placeholder }}</option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
