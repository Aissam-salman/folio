<script setup lang="ts">
import { RouterView } from 'vue-router'
import { SpeedInsights } from "@vercel/speed-insights/vue"
</script>

<template>
  <div class="bg-[#171717] text-white min-h-screen">
    <SpeedInsights />
    <RouterView />
  </div>
</template>
