<script setup>
import { PlusIcon } from '@heroicons/vue/24/solid'
import VButton from '@/components/VButton.vue'
import { BUTTON_TYPE_PRIMARY } from '@/pageConstants'
import { ref } from 'vue'
import { isActivityItemValid } from '@/validators'

const emit = defineEmits({
  submit: isActivityItemValid,
})

const activity = ref('')

function submit() {
  emit('submit', activity.value)
  activity.value = ''
}
</script>

<template>
  <form @submit.prevent="submit" class="sticky bottom-[64px] flex gap-2 border-t bg-white py-2">
    <input
      v-model="activity"
      type="text"
      placeholder="Type action name"
      class="w-full p-1 outline rounded text-md focus:outline-blue-500"
    />
    <VButton :type="BUTTON_TYPE_PRIMARY" :disabled="!activity.trim()">
      <PlusIcon class="h-8" />
    </VButton>
  </form>
</template>
