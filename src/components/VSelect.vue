<script setup>
import { XMarkIcon } from '@heroicons/vue/24/solid'
import VButton from './VButton.vue'
import { isNumberOrNull, validateSelectOptions } from '@/validators.js'

defineProps({
  options: {
    type: Array,
    required: true,
    validator: validateSelectOptions,
  },
  placeholder: {
    type: String,
  },
})

const model = defineModel({
  type: [Number, null],
  required: true,
  validator: isNumberOrNull,
})
</script>

<template>
  <div class="flex gap-2">
    <select v-model="model" class="w-full truncate rounded bg-gray-200 py-1 px-2 text-xl">
      <option :value="null" disabled selected>{{ placeholder }}</option>
      <option v-for="{ value, label } in options" :key="value" :value="value">
        {{ label }}
      </option>
    </select>
    <VButton type="negative" @click="model = null">
      <XMarkIcon class="h-8" />
    </VButton>
  </div>
</template>
