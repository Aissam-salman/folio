<script setup lang="ts">
interface Props {
    action?: () => void
}
const props = defineProps<Props>()
</script>
<template>
    <button @click="props.action" class="border-gray-600/30 rounded-lg backdrop-blur-sm bg-white/5 px-3 py-1">
        <slot />
    </button>
</template>