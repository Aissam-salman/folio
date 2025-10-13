<script lang="ts" setup>
defineProps({
  project: Object,
})
</script>
<template>
  <div
    class="flex gap-2 flex-col p-2 border-1 border-gray-600/30 rounded-lg backdrop-blur-sm bg-white/5"
  >
    <div class="flex flex-row justify-between">
      <h3 class="text-lg">{{ project.title }}</h3>
      <span class="font-semibold">{{ project.date }}</span>
    </div>
    <span class="font-light">{{ project.description }}</span>
    <div class="flex gap-2 flex-col sm:flex-row">
      <div v-for="tech in project.tech" class="rounded-lg bg-white/20 border-gray-600/30 p-1">
        {{ tech }}
      </div>
    </div>
  </div>
</template>
