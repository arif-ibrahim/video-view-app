import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { toast, type ToastOptions } from 'vue3-toastify';
import { setVideoToLocalStorage, removeVideoFromLocalStorage } from "@/composables/useLocalStorage";
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detailview/:id',
      name: 'detailview',
      component: () => import('../views/DetailView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SigninView.vue')
    },
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(getAuth(), (user) => {
      removeListener();
      resolve(user)
    }, reject)
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      removeVideoFromLocalStorage()
      next()
    } else {
      setVideoToLocalStorage(to.params.id[0])
      toast("you don't have access to view this video",)
      next("/signin")
    }
  } else {
    next()
  }

})

export default router
