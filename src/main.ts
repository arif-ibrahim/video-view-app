import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css'
import router from './router'
import { initializeApp } from "firebase/app";
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';



const firebaseConfig = {
    apiKey: "AIzaSyDbFPyU5svVIQsL8pdUAvGjJ9kX_duUH7I",
    authDomain: "video-view-app-84068.firebaseapp.com",
    projectId: "video-view-app-84068",
    storageBucket: "video-view-app-84068.appspot.com",
    messagingSenderId: "57333670741",
    appId: "1:57333670741:web:93a2074ec162fa4e8445dc"
  };

  initializeApp(firebaseConfig);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(
  Vue3Toastify,
  {
    autoClose: 9000,
  } as ToastContainerOptions,
)

app.mount('#app')
