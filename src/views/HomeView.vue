<script setup lang="ts">
import Enter from '@/components/Animations/Enter.vue'
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
    class="-z-10"
  />
  <main class="text-white flex justify-center">
    <Enter>
      <h1 class="font-extrabold text-3xl">Hey, I'm Aissam-Salman, Full stack-developer</h1>
    </Enter>
  </main>
</template>
