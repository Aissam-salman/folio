<script setup lang="ts">
import Enter from '@/components/Animations/Enter.vue'
import Dither from '@/components/Dither.vue'
import Github from '@/components/Icon/Github.vue'
import Linkedin from '@/components/Icon/Linkedin.vue'
import Projects from '@/components/Projects.vue'
</script>
<template>
  <Dither :wave-speed="0.025" :wave-frequency="5" :wave-amplitude="0.1" :wave-color="[0.9, 0.2, 0.9]" :color-num="12"
    :pixel-size="2" :disable-animation="false" :enable-mouse-interaction="true" :mouse-radius="1" class="-z-10" />
  <main class="text-white flex justify-center">
    <Enter>
      <div class="flex flex-col gap-3">
        <h1 class="font-extrabold text-3xl">Aissam-Salman, Full-stack developer</h1>
        <p class="flex flex-col">
          <span>Né en 1994, j'ai grandi avec le web, passé beaucoup de temps à l'explorer.</span>
          <span>J'aimerais maintenant participer à son évolution, apporter de nouveaux usages,</span>
          <span>des designs qui resteront dans les mémoires de chaque utilisateur.</span>
        </p>
        <div class="flex gap-6 justify-center mt-32">
          <a class="cursor-pointer" href="https://www.linkedin.com/in/aissam-salman-webdev/" target="_blank">
            <Linkedin />
          </a>
          <a class="cursor-pointer" href="https://github.com/Aissam-salman" target="_blank">
            <Github />
          </a>
        </div>
        <section>
          Dernier projets:
          <div>

            <Projects />
          </div>
        </section>
      </div>
    </Enter>
  </main>
</template>
