<script setup lang="ts">
import Enter from '@/components/Animations/Enter.vue'
import Github from '@/components/Icon/Github.vue'
import Linkedin from '@/components/Icon/Linkedin.vue'
import Navbar from '@/components/Navbar.vue'
import Projects from '@/components/Projects.vue'
</script>

<template>
  <main class="text-white relative z-0 w-full max-w-[56rem] mx-auto px-4 sm:px-6 lg:px-8 sm:border-x border-gray-600/30 pt-10 pb-20">
    <Navbar />
    <Enter>
      <div class="flex flex-col gap-3 items-center">
        <!-- Hero Section avec gradient moderne -->
        <div class="text-center mt-8 mb-4">
          <div class="inline-block mb-6">
            <span class="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-wider text-gray-400 uppercase">
              Full-stack Developer
            </span>
          </div>
          <h1 class="font-light text-5xl sm:text-6xl text-white mb-6 tracking-tight">
            Aissam-Salman
          </h1>
          <p class="flex flex-col mt-4 text-gray-300 leading-relaxed max-w-2xl mx-auto text-lg">
            <span>Né en 1994, j'ai grandi avec le web, passé beaucoup de temps à l'explorer.</span>
            <span>J'aimerais maintenant participer à son évolution, apporter de nouveaux usages,</span>
            <span>des designs qui resteront dans les mémoires de chaque utilisateur.</span>
          </p>
        </div>

        <!-- Social Links avec effets hover -->
        <div class="flex gap-6 justify-center mt-12 mb-16">
          <a
            class="cursor-pointer transition-all duration-300 p-3 rounded-full hover:bg-white/5 opacity-60 hover:opacity-100"
            href="https://www.linkedin.com/in/aissam-salman-webdev/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
          <a
            class="cursor-pointer transition-all duration-300 p-3 rounded-full hover:bg-white/5 opacity-60 hover:opacity-100"
            href="https://github.com/Aissam-salman"
            target="_blank"
            aria-label="GitHub"
          >
            <Github />
          </a>
        </div>

        <!-- Projects Section -->
        <section class="flex flex-col items-center mt-8 w-full">
          <h2 class="font-light text-2xl mb-8 text-white/90 tracking-wide">
            Projets récents
          </h2>
          <Projects />
        </section>
      </div>
    </Enter>
  </main>
</template>
