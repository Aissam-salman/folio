<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import Enter from '@/components/Animations/Enter.vue'

const route = useRoute()
const isActive = (path: string) => route.path === path
</script>

<template>
  <div class="flex justify-center p-5 sticky top-0 z-[100] mb-8">
    <header class="w-fit premium-panel rounded-full overflow-hidden">
      <nav class="py-2.5 px-8 flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
        <RouterLink to="/" class="relative group transition-colors duration-300" :class="isActive('/') ? 'text-white' : 'text-slate-400 hover:text-white'">
          <span class="relative z-10">Home</span>
          <div v-if="isActive('/')" class="absolute w-full h-[1px] bottom-[-4px] left-0 bg-white"></div>
          <div v-else class="absolute w-full h-[1px] bottom-[-4px] left-0 bg-slate-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></div>
        </RouterLink>
        <RouterLink to="/work" class="relative group transition-colors duration-300" :class="isActive('/work') ? 'text-white' : 'text-slate-400 hover:text-white'">
          <span class="relative z-10">Work</span>
          <div v-if="isActive('/work')" class="absolute w-full h-[1px] bottom-[-4px] left-0 bg-white"></div>
          <div v-else class="absolute w-full h-[1px] bottom-[-4px] left-0 bg-slate-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></div>
        </RouterLink>
      </nav>
    </header>
  </div>
</template>
