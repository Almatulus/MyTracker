<script setup>
import VButton from '@/components/VButton.vue'
import { BUTTON_TYPE_PRIMARY } from '@/constants'
import { ref, nextTick } from 'vue'
import { generateId } from '@/functions'
import { createActivity } from '@/activities'
import VIcon from './VIcon.vue'
import { ICON_PLUS } from '@/icons.js'

const activityName = ref('')

async function submit() {
  createActivity({
    id: generateId(),
    name: activityName.value,
    secondsToComplete: 0,
  })

  activityName.value = ''

  await nextTick()

  window.scrollTo(0, document.body.scrollHeight)
}
</script>

<template>
  <form @submit.prevent="submit" class="sticky bottom-[64px] flex gap-2 border-t bg-white py-2">
    <input
      v-model="activityName"
      type="text"
      placeholder="Type action name"
      class="w-full p-1 outline rounded text-md focus:outline-blue-500"
    />
    <VButton :type="BUTTON_TYPE_PRIMARY" :disabled="!activityName.trim()">
      <VIcon :name="ICON_PLUS" class="h-8" />
    </VButton>
  </form>
</template>
