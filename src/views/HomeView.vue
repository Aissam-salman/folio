<script setup lang="ts">
import Enter from '@/components/Animations/Enter.vue'
import Github from '@/components/Icon/Github.vue'
import Linkedin from '@/components/Icon/Linkedin.vue'
import Navbar from '@/components/Navbar.vue'
import Projects from '@/components/Projects.vue'
</script>

<template>
  <main class="text-slate-50 relative z-0 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-white/5 pt-10 pb-20">
    <Navbar />
    <Enter>
      <div class="flex flex-col gap-3 items-center mt-12">
        <!-- Hero Section -->
        <div class="text-center mt-8 mb-4 relative w-full border-b border-slate-800/60 pb-16">
          <div class="inline-block mb-8 relative z-10">
            <span class="px-5 py-2 rounded-full border border-slate-700 bg-slate-900/50 text-xs font-medium tracking-widest text-slate-300 uppercase">
              Consultant & Développeur Web
            </span>
          </div>
          <h1 class="font-bold text-5xl sm:text-7xl mb-8 tracking-tighter relative z-10 text-white">
            Aissam Salman
          </h1>
          <p class="flex flex-col mt-6 text-slate-400 leading-relaxed max-w-2xl mx-auto text-lg relative z-10 font-light">
            <span>Issu de <span class="font-medium text-slate-200">L'École 42</span>, j'accompagne les entreprises</span>
            <span>dans la conception de solutions web <span class="text-slate-200 font-medium">fiables</span> et <span class="text-slate-200 font-medium">performantes</span>.</span>
            <span>Mon objectif : transformer vos enjeux complexes en outils simples et efficaces.</span>
          </p>
        </div>

        <!-- Social Links -->
        <div class="flex gap-6 justify-center mt-8 mb-16 relative z-10">
          <a
            class="group cursor-pointer transition-all duration-300 p-4 rounded-full premium-panel hover:bg-slate-800 hover:-translate-y-1"
            href="https://www.linkedin.com/in/aissam-salman-webdev/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <Linkedin class="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
          </a>
          <a
            class="group cursor-pointer transition-all duration-300 p-4 rounded-full premium-panel hover:bg-slate-800 hover:-translate-y-1"
            href="https://github.com/Aissam-salman"
            target="_blank"
            aria-label="GitHub"
          >
            <Github class="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
          </a>
        </div>

        <!-- Projects Section -->
        <section class="flex flex-col items-center mt-4 w-full relative z-10">
          <div class="flex items-center gap-4 mb-10 w-full justify-between">
            <h2 class="font-light text-2xl text-slate-200 tracking-wide uppercase">
              Missions & Projets
            </h2>
            <div class="h-[1px] flex-1 ml-6 bg-gradient-to-r from-slate-700 to-transparent"></div>
          </div>
          <Projects />
        </section>
      </div>
    </Enter>
  </main>
</template>
