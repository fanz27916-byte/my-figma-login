<template>
  <div class="min-h-screen bg-[#eef4f5] flex items-center justify-center p-4">
    <div class="w-full max-w-[585px]">
      <!-- Login Card -->
      <div class="bg-white rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-8">
        <!-- Header -->
        <div class="text-left mb-8">
          <h1 class="text-3xl font-bold text-gray-900 mb-2" style="font-family: 'Inter', sans-serif; font-weight: 700; font-size: 30px; line-height: 36.31px;">
            Back to your digital life
          </h1>
          <p class="text-gray-700" style="font-family: 'IBM Plex Serif', serif; font-size: 18px; line-height: 23.4px;">
            Choose one of the option to go
          </p>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Email Input -->
          <div>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full pl-12 pr-4 py-4 border border-blue-400 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="get@ziontutorial.com"
                style="font-family: 'IBM Plex Serif', serif; font-size: 16px; line-height: 20.8px;"
              />
            </div>
          </div>

          <!-- Password Input -->
          <div>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Password"
                style="font-family: 'Inter', sans-serif; font-size: 16px; line-height: 19.36px;"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
              >
                <svg v-if="showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Login Button -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-[#0366ff] text-white font-medium py-4 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            style="font-family: 'IBM Plex Serif', serif; font-size: 16px; line-height: 20.8px; border-radius: 8px;"
          >
            <span v-if="loading" class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Logging in...
            </span>
            <span v-else>Log in</span>
          </button>
        </form>

        <!-- Divider -->
        <div class="mt-8 mb-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center">
              <span class="px-4 bg-white text-gray-700 text-sm" style="font-family: 'Inter', sans-serif; font-size: 16px; line-height: 19.36px;">
                Or continue with
              </span>
            </div>
          </div>
        </div>

        <!-- Social Login -->
        <div class="grid grid-cols-3 gap-4">
          <!-- Social Button 1 -->
          <button
            type="button"
            class="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-4 flex items-center justify-center transition duration-200"
          >
            <div class="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
              <!-- Placeholder for social icon -->
              <span class="text-gray-700 font-medium">G</span>
            </div>
          </button>

          <!-- Social Button 2 -->
          <button
            type="button"
            class="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-4 flex items-center justify-center transition duration-200"
          >
            <div class="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
              <!-- Placeholder for social icon -->
              <span class="text-gray-700 font-medium">F</span>
            </div>
          </button>

          <!-- Social Button 3 -->
          <button
            type="button"
            class="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-4 flex items-center justify-center transition duration-200"
          >
            <div class="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
              <!-- Placeholder for social icon -->
              <span class="text-gray-700 font-medium">T</span>
            </div>
          </button>
        </div>

        <!-- Footer Links -->
        <div class="mt-8 text-center">
          <p class="text-gray-600 text-sm" style="font-family: 'Inter', sans-serif;">
            Don't have an account? 
            <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Sign up</a>
          </p>
          <p class="text-gray-500 text-xs mt-2" style="font-family: 'Inter', sans-serif;">
            By continuing, you agree to our 
            <a href="#" class="text-blue-600 hover:text-blue-800">Terms of Service</a> 
            and 
            <a href="#" class="text-blue-600 hover:text-blue-800">Privacy Policy</a>
          </p>
        </div>
      </div>

      <!-- Branding -->
      <div class="mt-8 text-center">
        <p class="text-gray-500 text-sm" style="font-family: 'Inter', sans-serif;">
          © 2024 Zion Tutorial. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

interface LoginForm {
  email: string
  password: string
}

const form = reactive<LoginForm>({
  email: '',
  password: ''
})

const showPassword = ref(false)
const loading = ref(false)

const handleLogin = async () => {
  loading.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  console.log('Login attempt:', form)
  loading.value = false
  alert(`Login attempted with email: ${form.email}`)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=IBM+Plex+Serif:wght@400;500&display=swap');

/* Custom styles to match Figma design */
input {
  font-family: 'IBM Plex Serif', serif;
}

input::placeholder {
  color: #4d4d4d;
  opacity: 0.7;
}

/* Blue border for email input */
.border-blue-400 {
  border-color: rgba(86, 192, 255, 1);
}

/* Gray border for password input */
.border-gray-300 {
  border-color: rgba(230, 230, 230, 1);
}

/* Button background color */
.bg-\[\#0366ff\] {
  background-color: rgba(3, 102, 255, 1);
}

/* Card shadow */
.shadow-\[0_1px_3px_rgba\(0\2c 0\2c 0\2c 0\.1\)\] {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Social button hover */
.bg-gray-50:hover {
  background-color: rgba(248, 248, 248, 1);
}
</style>