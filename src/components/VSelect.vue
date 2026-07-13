<script setup>
import VButton from './VButton.vue'
import { isSelectValueValid, validateSelectOptions } from '@/validators.js'
import { BUTTON_TYPE_NEGATIVE } from '@/constants.js'
import VIcon from './VIcon.vue'

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
  type: [Number, String, null],
  required: true,
  validator: isSelectValueValid,
})
</script>

<template>
  <div class="flex gap-2">
    <select v-model="model" class="w-full truncate rounded bg-gray-200 py-1 px-2 text-xl">
      <option :value="null" disabled>{{ placeholder }}</option>
      <option v-for="{ value, label } in options" :key="value" :value="value">
        {{ label }}
      </option>
    </select>
    <VButton :type="BUTTON_TYPE_NEGATIVE" @click="model = null">
      <VIcon name="XMark" class="h-8" />
    </VButton>
  </div>
</template>
