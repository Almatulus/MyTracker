<script setup>
import { ref } from 'vue'
import { TrashIcon } from '@heroicons/vue/24/solid'
import VButton from '@/components/VButton.vue'
import VSelect from '@/components/VSelect.vue'
import { ACTIVITY_SELECT_OPTIONS } from '@/pageConstants'
import { isActivityItemValid, isUndefined } from '@/validators'

defineProps({
  activity: {
    required: true,
    type: String,
    validator: isActivityItemValid,
  },
})

const emit = defineEmits({
  delete: isUndefined,
})

const secondsToComplete = ref(null)
</script>

<template>
  <li class="flex flex-col column gap-3 py-4">
    <div class="flex items-center justify-between">
      <span class="truncate text-l">{{ activity }}</span>
      <VButton @click="emit('delete')" type="negative" class="p-1">
        <TrashIcon class="h-6" />
      </VButton>
    </div>
    <div class="">
      <VSelect
        v-model="secondsToComplete"
        class="font-mono"
        placeholder="h:mm"
        :options="ACTIVITY_SELECT_OPTIONS"
      ></VSelect>
    </div>
  </li>
</template>
