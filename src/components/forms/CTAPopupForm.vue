<template>
    <transition name="fade-scale">
      <div v-if="visible" class="z-40 fixed inset-0 flex items-center justify-center bg-black/55" >
        <div class="bg-zinc-800 border-2 border-white text-center mx-4 md:mx-0 p-12 rounded-lg shadow-lg w-full max-w-xl relative drop-shadow-xl" data-aos="zoom-in" data-aos-duration="500">
          <button @click="closePopup" class="absolute top-0 right-0 mt-4 mr-4 text-white hover:text-gray-900 focus:outline-none">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <span data-aos="fade-down" data-aos-delay="200" class="inline-block sub center text-center text-white mb-4 mt-4">Exclusive Listings</span>
          <h2 class="text-8xl mb-4 font-calm uppercase text-white">Get VIP Access</h2>
          <form @submit.prevent="handleSubmit">
            <div class="mb-4">
              <input class="transition-all ease-in-out w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none focus:ring-2 ring-primary" type="text" placeholder="Name">
            </div>
            <div class="mb-4">
              <input class="transition-all ease-in-out w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none focus:ring-2 ring-primary" type="email" placeholder="name@example.com">
            </div>
            <div class="flex justify-between items-center">
              <label>
                <input class="mr-1" type="checkbox" name="terms" value="1">
                <span class="text-sm font-semibold text-white">I agree to terms and conditions.</span>
              </label>
              <button class="inline-block border-2 px-10 py-4 text-white font-semibold tracking-tight bg-zinc-800 hover:bg-white hover:text-zinc-800 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const visible = ref(false);
  
  const closePopup = () => {
    visible.value = false;
  };
  
  const handleSubmit = () => {
    // Handle form submission logic here
    alert("Form submitted!");
    closePopup();
  };
  
  onMounted(() => {
    setTimeout(() => {
      visible.value = true; // Show the popup after a delay
    }, 3000); // 3000ms = 3 seconds
  });
  </script>
  
  <style scoped>
  .fade-scale-enter-active, .fade-scale-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}
.fade-scale-enter, .fade-scale-leave-to /* .fade-scale-leave-active in <2.1.8 */ {
  opacity: 0;
}
  </style>
  