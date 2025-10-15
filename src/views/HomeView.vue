<script setup lang="ts">
import Enter from '@/components/Animations/Enter.vue'
import Dither from '@/components/Dither.vue'
import Github from '@/components/Icon/Github.vue'
import Linkedin from '@/components/Icon/Linkedin.vue'
import Navbar from '@/components/Navbar.vue'
import Projects from '@/components/Projects.vue'
</script>

<template>
  <main class="text-white relative z-0 w-full max-w-[56rem] mx-auto px-4 sm:px-6 lg:px-8 sm:border-x border-gray-600/30  pt-10">
    <Navbar />
    <Enter>
      <div class="flex flex-col gap-3 items-center">
        <div class="text-center mt-5">
          <h1 class="font-extrabold text-3xl">Aissam-Salman, Full-stack developer</h1>
          <p class="flex flex-col mt-2">
            <span>Né en 1994, j'ai grandi avec le web, passé beaucoup de temps à l'explorer.</span>
            <span>J'aimerais maintenant participer à son évolution, apporter de nouveaux usages,</span>
            <span>des designs qui resteront dans les mémoires de chaque utilisateur.</span>
          </p>
        </div>
        <div class="flex gap-6 justify-center mt-16">
          <a
            class="cursor-pointer"
            href="https://www.linkedin.com/in/aissam-salman-webdev/"
            target="_blank"
          >
            <Linkedin />
          </a>
          <a class="cursor-pointer" href="https://github.com/Aissam-salman" target="_blank">
            <Github />
          </a>
        </div>
        <section class="flex flex-col items-center mt-16 w-full">
          <h2 class="font-semibold text-2xl mb-3">Projets recents</h2>
          <Projects />
        </section>
      </div>
    </Enter>
  </main>
</template>
