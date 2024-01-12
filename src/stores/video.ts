import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useVideoStore = defineStore('video', {
    state: () => ({
        videos: [
            { id: 1, title: 'Video 1', thumbnail: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217', src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4' },
            { id: 2, title: 'Video 2', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg', src: 'https://archive.org/download/ElephantsDream/ed_hd.ogv' },
            { id: 3, title: 'Video 3', thumbnail: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217', src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4' },
            { id: 4, title: 'Video 4', thumbnail: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217', src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4' },
            { id: 5, title: 'Video 5', thumbnail: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217', src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4' },
            { id: 6, title: 'Video 6', thumbnail: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217', src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4' },
            { id: 2, title: 'Video 2', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg', src: 'https://archive.org/download/ElephantsDream/ed_hd.ogv' },


        ],
    }),
    getters: {
        getVideoById: (state) => {
            return (videoId: any) => {
                return state.videos.find((video) => video.id == videoId)
            }
        },
    },
})