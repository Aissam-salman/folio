<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()
const isActive = (path: string) => {
  return route.path == path
}
</script>
<template>
  <div class="flex justify-center p-5 z-10">
    <header class="w-fit border-1 border-gray-600/30 rounded-lg backdrop-blur-sm bg-white/5">
      <nav
        :class="
          'py-2 px-10 flex items-center flex-row gap-10 ' +
          (isActive('/') ? 'text-purple-50' : 'text-slate-900')
        "
      >
        <RouterLink to="/" :class="isActive('/') ? 'font-bold' : 'font-normal'"> Home </RouterLink>
        <RouterLink to="/work" :class="isActive('/work') ? 'font-bold' : 'font-normal'"
          >Work</RouterLink
        >
        <RouterLink to="/about" :class="isActive('/about') ? 'font-bold' : 'font-normal'"
          >About</RouterLink
        >
      </nav>
    </header>
  </div>
</template>
