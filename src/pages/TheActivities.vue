<script setup>
import ActivitiesItem from '@/components/ActivityItem.vue'
import { validateActivityItems, isActivityItemValid } from '@/validators'
import { PlusIcon } from '@heroicons/vue/24/solid'
import VButton from '@/components/VButton.vue'
import { BUTTON_TYPE_PRIMARY } from '@/pageConstants'

defineProps({
  activities: {
    type: Array,
    required: true,
    validator: validateActivityItems,
  },
})

const emit = defineEmits({
  deleteActivity: isActivityItemValid,
})
</script>

<template>
  <div class="flex grow flex-col px-2">
    <ul class="divide-y grow">
      <ActivitiesItem
        @delete="emit('deleteActivity', activity)"
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
      />
    </ul>

    <form class="sticky bottom-[64px] flex gap-2 border-t bg-white py-2">
      <input
        type="text"
        placeholder="Type action name"
        class="w-full p-1 outline rounded text-md"
      />
      <VButton :type="BUTTON_TYPE_PRIMARY">
        <PlusIcon class="h-8" />
      </VButton>
    </form>
  </div>
</template>
