<script setup lang="ts">
import Dither from '@/components/Dither.vue'
</script>
<template>
  <Dither
    :wave-speed="0.025"
    :wave-frequency="5"
    :wave-amplitude="0.1"
    :wave-color="[0.9, 0.2, 0.9]"
    :color-num="12"
    :pixel-size="2"
    :disable-animation="false"
    :enable-mouse-interaction="true"
    :mouse-radius="1"
  />
  <main>HOME</main>
</template>
