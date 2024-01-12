

export const setVideoToLocalStorage = (id: string) => {
    localStorage.setItem('videoId', id)

}

export const removeVideoFromLocalStorage = () => {
    localStorage.removeItem('videoId')

}

export const getVideoFromLocalStorage = () => {
    return localStorage.getItem('videoId')
}