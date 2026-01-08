<script setup lang="ts">
import { Motion } from 'motion-v'
import { ref } from 'vue'

import { useAnimationStore } from '@/stores/animation'

const animationStore = useAnimationStore()
const shouldAnimate = ref(!animationStore.enterPlayed)

if (!animationStore.enterPlayed) {
  animationStore.markEnterPlayed()
}
</script>

<template>
  <Motion
    v-if="shouldAnimate"
    :initial="{
      scale: 1.1,
      opacity: 0,
      filter: 'blur(20px)'
    }"
    :animate="{
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)'
    }"
    :transition="{
      duration: 0.6,
      delay: 0.1
    }"
    as-child
  >
    <slot />
  </Motion>
  <slot v-else />
</template>
