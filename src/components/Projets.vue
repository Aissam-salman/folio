<script lang="ts" setup>
import {
    supabase

} from '@/data/connection.ts';
const { data, error } = await supabase
    .from('projects')
    .select()
</script>
<template>
    <div v-for="proj in data">
        <ProjectCard :project="proj" />
    </div>
</template>