<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { useVideoStore } from '@/stores/video'
import HomeButton from '@/components/HomeButton.vue';


const route = useRoute()

const videoStore = useVideoStore()
const { getVideoById } = storeToRefs(videoStore)
const selectedVideo = getVideoById.value(route.params.id)

</script>

<template>
    <div class="flex flex-col gap-5">
        <div>
            <HomeButton />
        </div>
        <video width="620" controls :poster="selectedVideo?.thumbnail">
            <source :src="selectedVideo?.src" type="video/ogg" />
        </video>
    </div>
</template>
  
<style scoped></style>
  