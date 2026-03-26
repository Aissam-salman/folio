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
  <a :href="project.link" target="_blank" class="group block h-full select-none cursor-pointer mt-4">
    <div
      class="relative flex gap-4 flex-col p-6 rounded-xl premium-panel h-full overflow-hidden hover:-translate-y-1"
    >
      <div class="flex flex-row justify-between items-start pt-2">
        <h3 class="text-xl font-medium group-hover:text-blue-400 transition-colors text-white min-h-14">{{ project.title }}</h3>
        <span class="text-[10px] text-slate-400 font-medium bg-slate-800/50 px-2 py-1 rounded uppercase tracking-widest border border-slate-700 group-hover:border-slate-500 transition-colors">{{ project.date }}</span>
      </div>
      <p class="font-light text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors line-clamp-3">{{ project.description }}</p>

      <div class="flex gap-2 flex-wrap mt-auto pt-4 border-t border-slate-800/50">
        <div v-for="tech in project.tech" :key="tech"
             class="rounded border border-slate-700/50 px-2 py-1 text-xs font-medium text-slate-400 transition-all duration-300">
          {{ tech }}
        </div>
      </div>
    </div>
  </a>
</template>
