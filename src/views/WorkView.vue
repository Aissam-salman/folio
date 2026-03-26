<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import { ref } from 'vue'
import Enter from '@/components/Animations/Enter.vue'
import Button from '@/components/Button.vue'
import {
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from 'radix-vue'
import projectsData from '@/data/projects.json'

const open = ref(false)
const emailCopied = ref(false)
const projects = ref(projectsData)

function copyEmail() {
  const email = 'aissam.lamjadab@gmail.com'
  navigator.clipboard.writeText(email).then(() => {
    emailCopied.value = true
    setTimeout(() => {
      open.value = true
      // Fermer automatiquement après 3 secondes
      setTimeout(() => {
        open.value = false
        emailCopied.value = false
      }, 4000)
    }, 100)
  })
}
</script>

<template>
  <ToastProvider>
    <div
      class="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-white/5 pt-10 min-h-svh pb-20 relative z-0"
    >
      <Navbar />
      <Enter>
        <div class="flex items-center gap-4 mt-8 mb-6">
          <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Projets & Réalisations
          </h1>
          <div class="h-[1px] flex-1 bg-gradient-to-r from-slate-700 to-transparent ml-4 hidden sm:block"></div>
        </div>
      </Enter>
      <Enter>
        <p class="mb-8 text-slate-300 leading-relaxed text-lg border-l-2 border-blue-500 pl-6 py-2 premium-panel rounded-r-lg bg-slate-900/40 p-8">
          Je conçois et développe des <span class="text-white font-medium">applications web sur-mesure</span> pour répondre concrètement à vos enjeux métiers.
          Mon approche est centrée sur le résultat : <span class="text-blue-400 font-medium">simplifier vos processus</span>,
          accélérer votre croissance et garantir une <span class="text-blue-400 font-medium">expérience utilisateur fluide et mémorable</span> pour vos clients.
        </p>
      </Enter>
      <Enter>
        <div class="flex gap-4 mb-16">
          <Button
            :action="copyEmail"
            class="font-medium text-sm text-white tracking-widest uppercase bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded cursor-pointer transition-all duration-300 border border-blue-500 shadow-[0_4px_14px_0_rgb(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)]"
            >
            {{ emailCopied ? '📧 Email copié ✓' : '👋 Contactez-moi' }}
            </Button>
        </div>
      </Enter>
      <div class="flex flex-col gap-12 sm:gap-16">
        <div v-for="(proj, index) in projects" :key="proj.id">
          <Enter :delay="index * 0.1">
            <div
              class="group relative flex flex-col md:flex-row gap-8 p-8 rounded-xl premium-panel hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              <div class="flex-1 z-10">
                <div class="inline-block px-2 py-1 bg-slate-800 rounded text-slate-300 text-xs font-semibold mb-4 uppercase tracking-widest border border-slate-700">
                  {{ proj.date }}
                </div>
                <h2 class="font-medium text-3xl mb-4 text-white tracking-tight group-hover:text-blue-400 transition-colors">{{ proj.title }}</h2>
                <p class="text-slate-400 mb-6 leading-relaxed text-base font-light">{{ proj.description }}</p>
                <div class="flex gap-2 flex-wrap mb-6">
                  <div
                    v-for="tech in proj.tech"
                    :key="tech"
                    class="rounded border border-slate-700/50 px-2.5 py-1 text-xs font-medium text-slate-400 transition-all duration-300"
                  >
                    {{ tech }}
                  </div>
                </div>
                <a
                  :href="proj.link"
                  target="_blank"
                  class="inline-flex items-center gap-2 text-white bg-slate-800 hover:bg-slate-700 px-5 py-2.5 rounded text-xs font-medium transition-all group/btn uppercase tracking-widest border border-slate-600"
                >
                  Voir le projet
                  <svg
                    class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
              <div
                class="md:w-[45%] h-64 sm:h-auto min-h-[250px] overflow-hidden rounded-lg flex items-center justify-center border border-slate-700/50 transition-all relative"
              >
                <div class="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <!-- Optional: Image logic for proj.image can be updated to be responsive and cover -->
                <img
                  :src="proj.image"
                  :alt="`Illustration du projet ${proj.title}`"
                  class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </Enter>
        </div>
      </div>
      <ToastRoot
        v-model:open="open"
        class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 grid [grid-template-areas:'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-4 items-start data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
      >
        <ToastTitle class="[grid-area:title] font-light text-sm text-white tracking-tight">
          Email copié avec succès
        </ToastTitle>
        <ToastDescription class="[grid-area:description] text-xs text-gray-400 mt-1">
          aissam.lamjadab@gmail.com
        </ToastDescription>
        <ToastAction class="[grid-area:action]" as-child alt-text="Fermer">
          <button
            class="inline-flex items-center justify-center rounded-md w-6 h-6 text-gray-400 hover:text-white hover:bg-white/5 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </ToastAction>
      </ToastRoot>
      <ToastViewport
        class="[--viewport-padding:25px] fixed bottom-0 right-0 flex flex-col p-(--viewport-padding) gap-3 w-96 max-w-[100vw] m-0 list-none z-50 outline-none"
      />
    </div>
  </ToastProvider>
</template>
