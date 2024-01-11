<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useVideoStore } from '@/stores/video'

const videoList = useVideoStore()

</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Video List</h1>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
      <div v-for="video in videoList.videos">
        <div class="">
          <img class=" object-cover" :src="video.thumbnail" alt="">
        </div>
        <RouterLink :to="{name: 'detailview', params: {id: video.id}}"><button class="bg-gray-100 hover:bg-gray-400 hover:text-gray-100 w-full">watch</button></RouterLink>
        
      </div>
  </div>
  </div>
</template>
<style scoped>
a {
    padding: 0px;
}

</style>
