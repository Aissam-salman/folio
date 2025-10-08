<script setup lang="ts">
import { Motion } from 'motion-v'
</script>

<template>
  <Motion
    :transition="{ duration: 0.4, scale: { type: 'spring', visualDuration: 0.8, bounce: 0.2 } }"
    :initial="{ opacity: 0, scale: 0 }"
    :animate="{ opacity: 1, scale: 1 }"
    as-child
  >
    <slot />
  </Motion>
</template>
