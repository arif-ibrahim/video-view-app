

<script setup lang="ts">
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter()
const email = ref('')
const password = ref('')
const errorMsg = ref('')


const register = () => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email.value, password.value).then((data) => {
        console.log('Successfully Signed In...');
        console.log(auth.currentUser);

        router.push('/')

    }).catch((error) => {
        console.log(error.code);
        switch (error.code) {
            case "auth/invalid-email":
                errorMsg.value = "Invalid email"
                break;
            case "auth/user-not-found":
                errorMsg.value = "No account with that email found"
                break;
            case "auth/wrong-password":
                errorMsg.value = "Incorrect password"
                break;

            default:
                errorMsg.value = "Email or Password was incorrect"
                break;
        }

    })
}


const signInWithGoogle = () => {
    console.log('Signing in with Google');
}

</script>

<template>
    <div class="min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6">Sign In to an Account</h2>

            <!-- Email Input -->
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
                <input v-model="email" type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded-md">
            </div>

            <!-- Password Input -->
            <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
                <input v-model="password" type="password" id="password" name="password"
                    class="mt-1 p-2 w-full border rounded-md">
            </div>
            <div v-if="errorMsg">
                <p>{{ errorMsg }}</p>
            </div>

            <!-- Sign in with Google Button -->
            <button @click="signInWithGoogle" class="bg-red-600 text-white py-2 px-4 rounded-md mb-4 w-full">
                Sign in with Google
            </button>

            <!-- Register Button -->
            <button @click="register" class="bg-blue-500 text-white py-2 px-4 rounded-md w-full">
                Sign In
            </button>
            <div class="mt-2 flex gap-1"><div>Don't have account?</div> <RouterLink class="p-0 hover:text-blue-600 hover:bg-white" to="/register">REGISTER</RouterLink></div>

        </div>
    </div>
</template>