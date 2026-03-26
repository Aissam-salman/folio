<script setup lang="ts">
import { RouterView } from 'vue-router'
import { SpeedInsights } from "@vercel/speed-insights/vue"
</script>

<template>
  <div class="min-h-screen relative overflow-x-hidden selection:bg-blue-500/30">
    <!-- Corporate / Elegant Background -->
    <div class="fixed inset-0 -z-10 bg-[#020617]">
      <!-- Subtle top light -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <!-- Subtle grid overlay -->
      <div class="absolute inset-0 opacity-30 pointer-events-none" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWNDBoLTQweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjxwYXRoIGQ9Ik0zOS41IDB2NDBoLjVWbHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz48L3N2Zz4=')"></div>
    </div>

    <SpeedInsights />
    <RouterView />
  </div>
</template>