<script setup>
defineProps({
  type: {
    type: String,
    default: 'primary',
  },
})

const buttonType = {
  primary: 'bg-blue-400 text-white',
  negative: 'bg-red-400 text-white',
  danger: 'bg-yellow-400 text-black',
}
</script>

<template>
  <button
    class="rounded enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 hover:brightness-70"
    :class="[buttonType[type]]"
  >
    <slot></slot>
  </button>
</template>
