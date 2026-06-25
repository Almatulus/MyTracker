<script>
import {
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_PRIMARY,
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEGATIVE,
  BUTTON_TYPE_SUCCESS,
} from '@/constants'

const buttonType = {
  [BUTTON_TYPE_NEUTRAL]: 'bg-gray-300',
  [BUTTON_TYPE_PRIMARY]: 'bg-blue-400 text-white',
  [BUTTON_TYPE_NEGATIVE]: 'bg-red-400 text-white',
  [BUTTON_TYPE_DANGER]: 'bg-yellow-400 text-black',
  [BUTTON_TYPE_SUCCESS]: 'bg-green-400 text-white',
}
</script>

<script setup>
import { isButtonTypeValid } from '@/validators'

defineProps({
  type: {
    type: String,
    default: BUTTON_TYPE_NEUTRAL,
    validator: isButtonTypeValid,
  },
})
</script>

<template>
  <button
    class="rounded enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 hover:brightness-70"
    :class="[buttonType[type]]"
  >
    <slot></slot>
  </button>
</template>
