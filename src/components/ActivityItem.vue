<script setup>
import { computed, inject } from 'vue'
import { TrashIcon } from '@heroicons/vue/24/solid'
import VButton from '@/components/VButton.vue'
import VSelect from '@/components/VSelect.vue'
import ActivitySecondsToComplete from './ActivitySecondsToComplete.vue'
import { isActivityItemValid, isUndefined } from '@/validators'

const props = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityItemValid,
  },
})

const emit = defineEmits({
  delete: isUndefined,
})

const updateSecondsToComplete = inject('updateSecondsToComplete')
const periodSelectOptions = inject('periodSelectOptions')

const modelValue = computed({
  get() {
    const val = props.activity.secondsToComplete

    const exists = periodSelectOptions.some((o) => o.value === val)

    return exists ? val : null
  },

  set(val) {
    updateSecondsToComplete(props.activity, val)
  },
})
</script>

<template>
  <li class="flex flex-col column gap-3 py-4">
    <div class="flex items-center justify-between">
      <span class="truncate text-l">{{ activity.name }}</span>
      <VButton @click="emit('delete')" type="negative" class="p-1">
        <TrashIcon class="h-6" />
      </VButton>
    </div>
    <VSelect
      v-model="modelValue"
      class="font-mono"
      placeholder="h:mm"
      :options="periodSelectOptions"
    ></VSelect>
    <ActivitySecondsToComplete :activity="activity" v-if="activity.secondsToComplete" />
  </li>
</template>
