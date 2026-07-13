<script setup>
import {
  ClockIcon as Clock,
  ListBulletIcon as ListBullet,
  ChartBarIcon as ChartBar,
  TrashIcon as Trash,
  FaceFrownIcon as FaceFrown,
  PlusIcon as Plus,
  CheckCircleIcon as CheckCircle,
  ArrowPathIcon as ArrowPath,
  PauseIcon as Pause,
  PlayIcon as Play,
  XMarkIcon as XMark,
} from '@heroicons/vue/24/solid'

defineProps({
  name: {
    type: String,
    required: true,
  },
})

const icons = {
  Clock,
  ListBullet,
  ChartBar,
  Trash,
  FaceFrown,
  Plus,
  Clock,
  CheckCircle,
  ArrowPath,
  Pause,
  Play,
  XMark,
}
</script>

<template>
  <component :is="icons[name]"></component>
</template>
