<script setup lang="ts">
import { RouterView } from 'vue-router'
import { SpeedInsights } from "@vercel/speed-insights/vue"
</script>

<template>
  <div class="min-h-screen relative overflow-x-hidden">
    <!-- Background gradient animé - plus subtil -->
    <div class="fixed inset-0 -z-10">
      <div class="absolute inset-0 bg-[#0a0a0a]"></div>
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-white/1 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-white/1rounded-full blur-3xl"></div>
    </div>
    <SpeedInsights />
    <RouterView />
  </div>
</template>
