<script setup>
import { computed } from 'vue'
import { TrashIcon } from '@heroicons/vue/24/solid'
import VButton from '@/components/VButton.vue'
import VSelect from '@/components/VSelect.vue'
import ActivitySecondsToComplete from './ActivitySecondsToComplete.vue'
import { isActivityItemValid } from '@/validators'
import { updateSecondsToComplete, deleteActivity } from '@/activities.js'
import { PERIOD_SELECT_OPTIONS } from '@/constants.js'
import { resetTimelineItem } from '@/timelineItems.js'

const props = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityItemValid,
  },
})

const modelValue = computed({
  get() {
    const val = props.activity.secondsToComplete

    const exists = PERIOD_SELECT_OPTIONS.some((o) => o.value === val)

    return exists ? val : null
  },

  set(val) {
    updateSecondsToComplete(props.activity, val)
  },
})

function resetAndDeleteActivity(activity) {
  resetTimelineItem(activity)
  deleteActivity(activity)
}
</script>

<template>
  <li class="flex flex-col column gap-3 py-4">
    <div class="flex items-center justify-between">
      <span class="truncate text-l">{{ activity.name }}</span>
      <VButton @click="resetAndDeleteActivity(activity)" type="negative" class="p-1">
        <TrashIcon class="h-6" />
      </VButton>
    </div>
    <VSelect
      v-model="modelValue"
      class="font-mono"
      placeholder="h:mm"
      :options="PERIOD_SELECT_OPTIONS"
    ></VSelect>
    <ActivitySecondsToComplete :activity="activity" v-if="activity.secondsToComplete" />
  </li>
</template>
