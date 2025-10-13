<script lang="ts" setup>
import {
    supabase
} from '@/lib/connection';
import { onMounted, ref } from 'vue';
import ProjectCard from './ProjectCard.vue';

const projects = ref();

async function getProjects() {
    const { data, error } = await supabase.from('projects').select('*');
    if (error) {
        console.error("Erreur fetch project from supabase", error);
        return;
    }
    console.log('Données récupérées :', data);
    projects.value = data;
}
onMounted(() => {
    getProjects();
})
</script>
<template>
    <div class="grid grid-cols-2 gap-3">
        <div v-for="proj in projects" :key="proj.id">
            <Suspense>
                <ProjectCard :project="proj" :key="proj.id" />
            </Suspense>
        </div>
    </div>
</template>