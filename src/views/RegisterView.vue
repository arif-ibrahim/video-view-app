<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from "vue-router";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getVideoFromLocalStorage } from "@/composables/useLocalStorage";


const router = useRouter()
const email = ref('')
const password = ref('')

const redirectPage = () => {
    if (getVideoFromLocalStorage()) {
        router.push({ name: 'detailview', params: { id: getVideoFromLocalStorage() } })

    } else {
        router.push('/')
    }
}

const register = () => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email.value, password.value).then((data) => {
        console.log('Successfully Registered...');
        console.log(auth.currentUser);
        redirectPage()

    }).catch((error) => {
        console.log(error.code);
        alert(error.message)

    })
}

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider).then((result) => {
        console.log(result.user);
        redirectPage()

    }).catch((error) => {
        console.log(error);

    })
}

</script>

<template>
    <div class="min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6">Register</h2>

            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
                <input v-model="email" type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded-md">
            </div>

            <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
                <input v-model="password" type="password" id="password" name="password"
                    class="mt-1 p-2 w-full border rounded-md">
            </div>

            <button @click="signInWithGoogle" class="bg-red-600 text-white py-2 px-4 rounded-md mb-4 w-full">
                Sign in with Google
            </button>

            <button @click="register" class="bg-blue-500 text-white py-2 px-4 rounded-md w-full">
                Register
            </button>
            <div class="mt-2 flex gap-1">
                <div>Already have an account?</div>
                <RouterLink class="p-0 hover:text-blue-600 hover:bg-white" to="/signin">SIGN IN</RouterLink>
            </div>
        </div>
    </div>
</template>