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
const projects = ref(projectsData)

function copyEmail() {
  const email = 'aissam.lamjadab@gmail.com'
  navigator.clipboard.writeText(email).then(() => {
    setTimeout(() => {
      open.value = true
      // Fermer automatiquement après 3 secondes
      setTimeout(() => {
        open.value = false
      }, 3000)
    }, 100)
  })
}
</script>

<template>
  <ToastProvider>
    <div
      class="w-full max-w-[56rem] mx-auto px-4 sm:px-6 lg:px-8 sm:border-x border-gray-600/30 pt-10 min-h-svh pb-20"
    >
      <Navbar />
      <Enter>
        <h1 class="text-3xl text-white font-light my-10 tracking-tight">Projets récents</h1>
      </Enter>
      <Enter>
        <p class="mb-5 text-gray-400 leading-relaxed text-sm">
          Développeur Fullstack avec plus de 3 ans d'expérience en développement, spécialisé dans la
          conception et la réalisation de solutions informatiques fiables. Expertise en
          <span class="text-white/70">Spring Boot</span>,
          <span class="text-white/70">Laravel</span>, <span class="text-white/70">Django</span>,
          <span class="text-white/70">React</span> et <span class="text-white/70">Next.js</span>.
        </p>
      </Enter>
      <Enter>
        <div class="flex gap-2 mb-20">
          <Button
            :action="copyEmail"
            class="font-normal text-sm text-white tracking-wide bg-white/5 hover:bg-white/10 cursor-pointer transition-all duration-300 border border-white/10 hover:border-white/20"
            >Contactez-moi</Button
          >
        </div>
      </Enter>
      <div class="flex flex-col gap-16">
        <div v-for="proj in projects" :key="proj.id">
          <Enter>
            <div
              class="flex flex-col md:flex-row gap-6 p-6 rounded-lg backdrop-blur-sm bg-white/2 hover:bg-white/4 border border-white/5 hover:border-white/10 transition-all duration-500"
            >
              <div class="flex-1">
                <div class="text-gray-500 text-xs font-medium mb-3 uppercase tracking-wider">
                  {{ proj.date }}
                </div>
                <h2 class="font-light text-xl mb-3 text-white tracking-tight">{{ proj.title }}</h2>
                <p class="text-gray-400 mb-4 leading-relaxed text-sm">{{ proj.description }}</p>
                <div class="flex gap-2 flex-wrap mb-4">
                  <div
                    v-for="tech in proj.tech"
                    :key="tech"
                    class="rounded-md bg-white/3 border border-white/10 px-2.5 py-1 text-xs font-normal text-gray-400 hover:bg-white/6 hover:text-gray-300 transition-all"
                  >
                    {{ tech }}
                  </div>
                </div>
                <a
                  :href="proj.link"
                  target="_blank"
                  class="inline-flex items-center gap-1.5 text-gray-400 hover:text-white text-xs font-normal transition-colors group uppercase tracking-wider"
                >
                  Voir le projet
                  <svg
                    class="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform"
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
                class="md:w-96 h-64 overflow-hidden rounded-lg flex items-center justify-center bg-white/2 border border-white/5 transition-all"
              >
                <img
                  :src="proj.image"
                  :alt="`Illustration du projet ${proj.title}`"
                  class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
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
