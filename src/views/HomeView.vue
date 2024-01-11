<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useVideoStore } from '@/stores/video'

const videoList = useVideoStore()

</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Video List</h1>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="video in videoList.videos">
        <div class="h-32 w-32">
          <img class="" :src="video.thumbnail" alt="">
        </div>
        <RouterLink :to="{name: 'detailview', params: {id: video.id}}"><button class="bg-gray-500 p-1">watch</button></RouterLink>
        
      </div>
  </div>
  </div>
</template>
