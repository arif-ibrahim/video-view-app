import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useVideoStore = defineStore('video', {
    state: () => ({
        videos: [
            { id: 1, title: 'Video 1', thumbnail: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217', src: 'https://download-video.akamaized.net/v3-1/playback/bbfb2c55-dbde-47e8-9927-5776ac774602/a8496c81-3ab256fb?__token__=st=1705078135~exp=1705092535~acl=%2Fv3-1%2Fplayback%2Fbbfb2c55-dbde-47e8-9927-5776ac774602%2Fa8496c81-3ab256fb%2A~hmac=f837c59ca6dc9d35e4c4f51f175acd252853559faf615612c01d57fcd0013897&r=dXMtd2VzdDE%3D' },
            { id: 2, title: 'Video 2', thumbnail: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217', src: 'https://player.vimeo.com/progressive_redirect/playback/668410459/rendition/360p/360p.mp4?loc=external&oauth2_token_id=57447761&signature=fd3f3d7b516d2fbaf948d6762af508745bbb80cfb886a63acb87e62e654f30ba' },
            { id: 3, title: 'Video 3', thumbnail: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217', src: 'https://player.vimeo.com/progressive_redirect/playback/881384029/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=db0216b0e3474f14be02d052bcd78c88dd564ef1067b4892e653f976079463b1' },
            { id: 4, title: 'Video 4', thumbnail: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217', src: 'https://player.vimeo.com/progressive_redirect/playback/878077868/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=10f9c38b71b4bf1f435a01bd60ea8d23410ca27f6bff154b322d0859f7b46df8' },
            { id: 5, title: 'Video 5', thumbnail: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217', src: 'https://player.vimeo.com/progressive_redirect/playback/727150722/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=561d913e6ed89cfaea768f672045cbe7288c64fd8dbeff1a06610b767ff35b59' },
            { id: 6, title: 'Video 6', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg', src: 'https://player.vimeo.com/progressive_redirect/playback/745363206/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=c9cb80162266a23102dea7d2d22d795a135699735c1ef2f4488cd86d23910f78' },


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