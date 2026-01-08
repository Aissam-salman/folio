import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAnimationStore = defineStore('animation', () => {
  const enterPlayed = ref(false)

  const markEnterPlayed = () => {
    enterPlayed.value = true
  }

  return {
    enterPlayed,
    markEnterPlayed,
  }
})
