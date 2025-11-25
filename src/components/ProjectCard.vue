<script lang="ts" setup>
interface Project {
  link: string
  title: string
  date?: string
  description?: string
  tech?: string[]
}

const { project } = defineProps<{ project: Project }>()
</script>
<template>
  <a :href="project.link" target="_blank" class="group block h-full">
    <div
      class="flex gap-3 flex-col p-5 border border-white/5 rounded-lg backdrop-blur-sm bg-white/2 hover:bg-white/4 transition-all duration-500 h-full hover:border-white/10"
    >
      <div class="flex flex-row justify-between items-start">
        <h3 class="text-base font-light group-hover:text-white transition-colors text-white/90">{{ project.title }}</h3>
        <span class="text-xs text-gray-500 font-normal uppercase tracking-wider">{{ project.date }}</span>
      </div>
      <span class="font-light text-gray-400 leading-relaxed text-sm">{{ project.description }}</span>
      <div class="flex gap-2 flex-wrap mt-auto">
        <div v-for="tech in project.tech" :key="tech" class="rounded-md bg-white/3 border border-white/10 px-2.5 py-0.5 text-xs font-normal text-gray-400 hover:bg-white/6 hover:text-gray-300 transition-all">
          {{ tech }}
        </div>
      </div>
    </div>
  </a>
</template>
