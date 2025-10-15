<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import { onMounted, ref } from 'vue';
import { supabase } from '@/lib/connection.ts';
import Enter from '@/components/Animations/Enter.vue';
import Button from '@/components/Button.vue';

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
  <div class="w-full max-w-[56rem] mx-auto px-4 sm:px-6 lg:px-8 sm:border-x border-gray-600/30 pt-10 min-h-svh pb-20">
    <Navbar />
    <Enter>
      <h1 class="text-2xl font-semibold my-10">
        Les projets auxquels j'ai pris part recemment
      </h1>
    </Enter>
    <Enter>
      <p class="mb-5">
        Développeur Fullstack avec plus de 3 ans d'expérience en développement, spécialisé dans la conception et la
        réalisation de solutions informatiques fiables. J'ai eu l'occasion d’utilisé de nombreuses technologie tel que
        Spring boot, Laravel, Django, React et Nextjs.
      </p>
    </Enter>
    <Enter>
      <div class="flex gap-2 mb-20">
        <Button>Parlons</Button>
        <Button>Email</Button>
      </div>
    </Enter>
    <div class="flex flex-col gap-20">
      <div v-for="proj in projects">
        <Enter>
          <div class="flex gap-4 justify-between">
            <div>
              <div class="text-gray-400 mb-5">{{ proj.date }}</div>
              <h2 class="font-semibold">{{ proj.title }}</h2>
              <p class="text-gray-400 mb-2">{{ proj.description }}</p>
              <div class="flex gap-2 flex-col sm:flex-row mb-3">
                <div v-for="tech in proj.tech" class="rounded-lg bg-white/50 border-gray-600/30 px-2 py-1">
                  {{ tech }}
                </div>
              </div>
              <a :href="proj.link" class="text-blue-700 ">Visiter</a>
            </div>
            <div
              class="overflow-hidden rounded-lg w-90 h-60 flex items-center justify-center bg-white/10 border border-gray-600/30">
              <img :src="proj.image" alt="illustration" class="w-full h-full object-contain" />
            </div>
          </div>
        </Enter>
      </div>
    </div>
  </div>
</template>
