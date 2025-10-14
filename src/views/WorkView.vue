<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import { onMounted, ref } from 'vue';
import { supabase } from '@/lib/connection.ts';

const projects = ref([]);
async function getProjects() {
  const { data, error } = await supabase.from('projects').select('*');
  if (error) {
    console.error("Erreur fetch project from supabase", error);
    return;
  }
  console.log('Données récupérées :', data);
  projects.value = data.slice(0, 2);
}

onMounted(() => {
  getProjects();
})
</script>

<template>
  <Navbar />
  <div class="w-full max-w-[56rem] mx-auto px-4 sm:px-6 lg:px-8 sm:border-x border-[#262626
] pt-10">
    <h1 class="text-2xl text-center font-semibold my-10">
      Designing Interfaces, Building Experiences.
    </h1>
    <p>
      I've worked on a variety of projects, focusing on creating intuitive digital experiences where thoughtful design
      meets clean code. Here are some highlights I'm proud of, showcasing my process from concept to execution.
    </p>
    <div>
      <button>Parlons en</button>
      <button>Email</button>
    </div>
    <div v-for="proj in projects">
      <div>{{ proj.date }}</div>
      <h2 class="">{{ proj.title }}</h2>
      <p>{{ proj.description }}</p>
      <a href="#">link</a>
      <img src="" alt="">
    </div>
  </div>
</template>
