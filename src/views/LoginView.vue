<template>
  <div class="min-h-screen flex items-center justify-center p-4" style="background-color: #eef2f5;">
    <!-- Main Container (1440px width from Figma) -->
    <div class="w-full max-w-[1440px] mx-auto flex justify-center">
      <!-- Login Card (585px × 690px from Figma) -->
      <div class="w-[585px] h-[690px] bg-white rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.1)] relative">
        <!-- Card Content Container -->
        <div class="absolute top-[-346px] left-[-293px] w-[585px] h-[690px]">
          <!-- Card Background Rectangle -->
          <div class="absolute inset-0 bg-white rounded-lg"></div>
          
          <!-- Header Section -->
          <div class="absolute top-[85px] left-[77px]">
            <h1 class="text-[30px] font-bold leading-[36.31px] mb-2" style="font-family: 'Inter', sans-serif; font-weight: 700; color: #292929;">
              Back to your digital life
            </h1>
            <p class="text-[18px] leading-[23.4px]" style="font-family: 'IBM Plex Serif', serif; color: #545454;">
              Choose one of the option to go
            </p>
          </div>

          <!-- Email Input -->
          <div class="absolute top-[205px] left-[77px] w-[440px] h-[69px]">
            <div class="absolute inset-0 bg-white border rounded-[10px]" style="border-color: #8ac0ff;"></div>
            <div class="absolute left-[36px] top-1/2 transform -translate-y-1/2">
              <svg class="w-5 h-5" style="color: #999;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <input
              v-model="form.email"
              type="email"
              required
              class="absolute inset-0 bg-transparent pl-[64px] pr-4 text-[16px] leading-[20.8px] placeholder-gray-500 focus:outline-none"
              placeholder="get@ziontutorial.com"
              style="font-family: 'IBM Plex Serif', serif; color: #4d4d4d;"
            />
          </div>

          <!-- Password Input -->
          <div class="absolute top-[290px] left-[77px] w-[440px] h-[69px]">
            <div class="absolute inset-0 bg-white border rounded-[10px]" style="border-color: #e6e6e6;"></div>
            <div class="absolute left-[36px] top-1/2 transform -translate-y-1/2">
              <svg class="w-5 h-5" style="color: #999;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <input
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              required
              class="absolute inset-0 bg-transparent pl-[64px] pr-12 text-[16px] leading-[19.36px] placeholder-gray-500 focus:outline-none"
              placeholder="Password"
              style="font-family: 'Inter', sans-serif; color: #4d4d4d;"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-[16px] top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
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

          <!-- Login Button -->
          <button
            @click="handleLogin"
            :disabled="loading"
            class="absolute top-[575px] left-[143px] w-[312px] h-[62px] bg-[#0366ff] text-white rounded-lg flex items-center justify-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            style="font-family: 'IBM Plex Serif', serif; font-size: 16px; line-height: 20.8px;"
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

          <!-- Divider Line -->
          <div class="absolute top-[396px] left-[201px] w-[304px] h-[0.5px]" style="background-color: #e7e7e7;"></div>

          <!-- "Or continue with" Text -->
          <div class="absolute top-[396px] left-[77px]">
            <span class="text-[16px] leading-[19.36px] px-4 bg-white" style="font-family: 'Inter', sans-serif; color: #4d4d4d;">
              Or continue with
            </span>
          </div>

          <!-- Social Login Buttons -->
          <div class="absolute top-[451px] left-[77px] flex gap-4">
            <!-- Social Button 1 -->
            <div class="w-[131px] h-[67px] bg-[#f7f7f7] rounded flex items-center justify-center cursor-pointer hover:bg-gray-100 transition duration-200">
              <div class="w-[46px] h-[45px] bg-gray-200 rounded flex items-center justify-center">
                <!-- Placeholder for social icon 1 -->
                <span class="text-gray-700 font-medium">G</span>
              </div>
            </div>

            <!-- Social Button 2 -->
            <div class="w-[136px] h-[71px] bg-[#f7f7f7] rounded flex items-center justify-center cursor-pointer hover:bg-gray-100 transition duration-200">
              <div class="w-[59px] h-[44px] bg-gray-200 rounded flex items-center justify-center">
                <!-- Placeholder for social icon 2 -->
                <span class="text-gray-700 font-medium">F</span>
              </div>
            </div>

            <!-- Social Button 3 -->
            <div class="w-[137px] h-[71px] bg-[#f7f7f7] rounded flex items-center justify-center cursor-pointer hover:bg-gray-100 transition duration-200">
              <div class="w-[48px] h-[48px] bg-gray-200 rounded flex items-center justify-center">
                <!-- Placeholder for social icon 3 -->
                <span class="text-gray-700 font-medium">T</span>
              </div>
            </div>
          </div>

          <!-- Footer Links -->
          <div class="absolute bottom-[30px] left-0 right-0 text-center">
            <p class="text-[14px] text-gray-600" style="font-family: 'Inter', sans-serif;">
              Don't have an account? 
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Sign up</a>
            </p>
            <p class="text-[12px] text-gray-500 mt-1" style="font-family: 'Inter', sans-serif;">
              By continuing, you agree to our 
              <a href="#" class="text-blue-600 hover:text-blue-800">Terms of Service</a> 
              and 
              <a href="#" class="text-blue-600 hover:text-blue-800">Privacy Policy</a>
            </p>
          </div>

          <!-- Branding -->
          <div class="absolute bottom-[10px] left-0 right-0 text-center">
            <p class="text-[12px] text-gray-500" style="font-family: 'Inter', sans-serif;">
              © 2024 Zion Tutorial. All rights reserved.
            </p>
          </div>
        </div>
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

/* Custom styles to match Figma design exactly */
input::placeholder {
  color: #4d4d4d;
  opacity: 0.7;
}

/* Remove default input styles */
input {
  border: none;
  outline: none;
}

/* Card shadow from Figma */
.shadow-\[0_1px_3px_rgba\(0\2c 0\2c 0\2c 0\.1\)\] {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Custom rounded corners */
.rounded-\[10px\] {
  border-radius: 10px;
}

/* Exact positioning from Figma */
.absolute {
  position: absolute;
}

/* Font families */
.font-inter {
  font-family: 'Inter', sans-serif;
}

.font-ibm-plex-serif {
  font-family: 'IBM Plex Serif', serif;
}
</style>