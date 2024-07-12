<template>
    <div>
        <section class="relative border-b-2 bg-white">
            <div class="hidden lg:block absolute top-0 left-0 bottom-0 inset-0 w-1/2 ml-auto bg-gray-50 z-0" style="z-index: -1"></div>
            <div class="container px-8 lg:px-12 mx-auto">
                <Header :mode="mode" />
            </div>
        </section>
        <section class="flex px-4 bg-gray-50 align-middle border-b-2">
            <div class="container px-8 lg:px-12 mx-auto py-20 content-center">
                <div class="flex flex-wrap mx-auto py-20">
                    <div class="content-center">
                        <h3 class="leading-snug text-8xl font-bold text-primary">404</h3>
                        <h2 class="-mt-2 text-4xl font-bold font-heading">Uh Oh, looks like we couldn't find where you wanted to go!</h2>
                        <a class="mt-4 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-primary hover:brightness-120 rounded" href="/">Go Home</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from '@/views/Header.vue';

// Initialize mode based on your logic
const isDarkModeEnabled = false; // Replace with your logic to determine dark mode
const mode = ref(isDarkModeEnabled ? 'light' : 'dark');


</script>
  
  
<style scoped>
  
  </style>