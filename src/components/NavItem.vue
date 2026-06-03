<script>
export default {
  inheritAttrs: false,
}
</script>

<template>
  <li class="flex-1">
    <a v-bind="$attrs" class="flex flex-col items-center capitalize font-medium p-2">
      <slot></slot>
    </a>
  </li>
</template>
