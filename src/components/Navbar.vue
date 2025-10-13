<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import Enter from '@/components/Animations/Enter.vue'

const route = useRoute()
const isActive = (path: string) => route.path === path
</script>

<template>
  <div class="flex justify-center p-5">
      <header class="w-fit border border-gray-600/30 rounded-lg backdrop-blur-sm bg-white/5">
        <nav class="py-2 px-10 flex items-center gap-10">
          <RouterLink
            to="/"
            :class="isActive('/') ? 'font-bold text-purple-50' : 'font-normal text-white'"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/work"
            :class="isActive('/work') ? 'font-bold text-purple-50' : 'font-normal text-white'"
          >
            Work
          </RouterLink>
          <RouterLink
            to="/about"
            :class="isActive('/about') ? 'font-bold text-purple-50' : 'font-normal text-white'"
          >
            About
          </RouterLink>
        </nav>
      </header>
  </div>
</template>
