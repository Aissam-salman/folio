<script setup lang="ts">
import { Motion } from 'motion-v'
</script>

<template>
  <Motion
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
</template>
