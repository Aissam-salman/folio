<script lang="ts" setup>
import { ref } from 'vue';
import ProjectCard from './ProjectCard.vue';
import projectsData from '@/data/projects.json';

const projects = ref(projectsData.slice(0, 2));
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="proj in projects" :key="proj.id" class="transform transition-all duration-300 hover:scale-[1.02]">
            <ProjectCard :project="proj" />
        </div>
    </div>
</template>