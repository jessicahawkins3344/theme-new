<template>
  <div v-if="visible" class="z-40 transition-all fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
      <button @click="closePopup" class="absolute top-0 right-0 mt-4 mr-4 text-gray-700 hover:text-gray-900 focus:outline-none">
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <template v-if="!forgotPassword">
        <h2 class="text-2xl font-bold mb-4">Login Form</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
            <input type="email" id="email" v-model="email" required
                  class="mt-1 transition-all ease-in-out w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none focus:ring-2 ring-primary">
          </div>

          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
            <input type="password" id="password" v-model="password" required
                  class="mt-1 transition-all ease-in-out w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none focus:ring-2 ring-primary">
          </div>

          <button type="submit" class="rounded text-sm w-full bg-primary text-white py-4 px-4 rounded-md hover:brightness-120 transition duration-200">
            Login
          </button>
        </form>

        <p class="mt-4 text-sm text-gray-600"><a href="#" @click.prevent="forgotPassword = true" class="text-primary hover:underline">Forgot password?</a></p>
      </template>
      <template v-else>
        <h2 class="text-2xl font-bold mb-4">Forgot Password Form</h2>
        <!-- Implement your forgot password form here -->
        <form @submit.prevent="sendResetEmail">
          <div class="mb-4">
            <label for="forgotEmail" class="block text-sm font-medium text-gray-700">Enter your email:</label>
            <input type="email" id="forgotEmail" v-model="forgotEmail" required
                  class="mt-1 transition-all ease-in-out w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none focus:ring-2 ring-primary">
          </div>

          <button type="submit" class="rounded text-sm w-full bg-primary text-white py-4 px-4 rounded-md hover:brightness-120 transition duration-200">
            Send Reset Email
          </button>
        </form>

        <p class="mt-4 text-sm text-gray-600"><a href="#" @click.prevent="forgotPassword = false" class="text-primary hover:underline">Back to login</a></p>
      </template>

    </div>
  </div>
</template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  const props = defineProps(['visible']);
  const emits = defineEmits(['close']);
  
  const email = ref('');
  const password = ref('');
  const forgotPassword = ref(false);
const forgotEmail = ref('');
  
  const login = () => {
    // Handle login logic
    console.log('Logging in with:', email.value, password.value);
    // Emit close event to parent component
    emits('close');
  };
  
  const closePopup = () => {
    // Emit close event to parent component
    emits('close');
  };
  </script>
  
  <!-- No need for scoped styles with Tailwind CSS -->
  