<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import { onMounted, ref } from 'vue';
import { supabase } from '@/lib/connection.ts';
import Enter from '@/components/Animations/Enter.vue';
import Button from '@/components/Button.vue';
import { ToastAction, ToastDescription, ToastProvider, ToastRoot, ToastTitle, ToastViewport } from 'radix-vue'

const open = ref(false);
const projects = ref<any[]>([]);
async function getProjects() {
  const { data, error } = await supabase.from('projects').select('*');
  if (error) {
    console.error("Erreur fetch project from supabase", error);
    return;
  }
  console.log('Données récupérées :', data);
  projects.value = (data ?? []).slice(0, 2);
}

onMounted(() => {
  getProjects();
})

function copyEmail() {
  const email = "aissam.lamjadab@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    setTimeout(() => {
      open.value = true;
    }, 100)
  });
}
</script>

<template>
  <ToastProvider>

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
          <Button :action="copyEmail" class="font-semibold bg-purple-900 cursor-pointer">Email</Button>
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
                <a :href="proj.link" target="_blank" class="text-blue-700 ">Visiter</a>
              </div>
              <div
                class="overflow-hidden rounded-lg w-90 h-60 flex items-center justify-center bg-transparent border border-gray-400/30">
                <img :src="proj.image" alt="illustration" class="w-full h-full object-contain" />
              </div>
            </div>
          </Enter>
        </div>
      </div>
      <ToastRoot v-model:open="open"
        class="bg-white/20 rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut">
        <ToastTitle class="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
          Email copier avec success !
        </ToastTitle>
        <ToastDescription as-child>
          aissam.lamjadab@gmail.com
        </ToastDescription>
        <ToastAction class="[grid-area:_action]" as-child alt-text="Goto schedule to undo">
          <button
            class="inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-x-icon lucide-x">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </ToastAction>
      </ToastRoot>
      <ToastViewport
        class="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </div>
  </ToastProvider>
</template>
