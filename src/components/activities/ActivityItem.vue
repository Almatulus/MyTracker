<script setup>
import { computed } from 'vue'
import VButton from '@/components/ui/VButton.vue'
import VSelect from '@/components/ui/VSelect.vue'
import RemainingActivitySeconds from './RemainingActivitySeconds.vue'
import { isActivityItemValid } from '@/validators'
import { deleteActivity, updateActivity } from '@/activities.js'
import { PERIOD_SELECT_OPTIONS } from '@/constants.js'
import { resetTimelineItem, timelineItems } from '@/timelineItems.js'
import VIcon from '../ui/VIcon.vue'
import { ICON_TRASH } from '@/icons.js'

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
    updateActivity(props.activity, { secondsToComplete: val })
  },
})

function resetAndDeleteActivity(activity) {
  resetTimelineItem(timelineItems.value, activity)
  deleteActivity(activity)
}
</script>

<template>
  <li class="flex flex-col column gap-3 py-4">
    <div class="flex items-center justify-between">
      <span class="truncate text-l">{{ activity.name }}</span>
      <VButton @click="resetAndDeleteActivity(activity)" type="negative" class="p-1">
        <VIcon :name="ICON_TRASH" class="h-6" />
      </VButton>
    </div>
    <VSelect
      v-model="modelValue"
      class="font-mono"
      placeholder="h:mm"
      :options="PERIOD_SELECT_OPTIONS"
    ></VSelect>
    <RemainingActivitySeconds :activity="activity" v-if="activity.secondsToComplete" />
  </li>
</template>
