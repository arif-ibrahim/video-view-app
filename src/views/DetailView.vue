<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { useVideoStore } from '@/stores/video'


const route = useRoute()

const videoStore = useVideoStore()
const { getVideoById } = storeToRefs(videoStore)
const selectedVideo = getVideoById.value(route.params.id)
</script>

<template>
    <video width="620" controls :poster="selectedVideo?.thumbnail">
        <source :src="selectedVideo?.src" type="video/ogg" />
    </video>
</template>
  
<style scoped></style>
  