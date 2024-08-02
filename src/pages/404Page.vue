<template>
    <div>
        <section class="relative border-b-2 bg-primary">
            <div class="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-gray-50 z-0" style="z-index: -1"></div>
            <div class="container px-0 mx-auto">
                <Header :mode="mode" />
            </div>
        </section>
        <section class="flex px-4 bg-primary align-middle border-b-2">
            <div class="container px-8 lg:px-12 mx-auto py-20 content-center">
                <div class="flex flex-wrap mx-auto py-20">
                    <div class="content-center">
                        <h3 class="leading-snug text-16xl text-white font-light font-berlin">404</h3>
                        <h2 class="-mt-2 text-4xl font-calm text-white">Uh Oh, looks like we couldn't find where you wanted to go!</h2>
                        <a class="mt-4 inline-block px-5 py-4 text-primary font-semibold tracking-tight bg-white hover:bg-zinc-300 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="/">Go Home</a>
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
const isDarkModeEnabled = true; // Replace with your logic to determine dark mode
const mode = ref(isDarkModeEnabled ? 'light' : 'dark');


</script>
  
  
<style scoped>
  
  </style>