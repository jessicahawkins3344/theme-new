<template>
    <section class="relative border-b-2 bg-zinc-800">
      <div class="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-gray-50 z-0" style="z-index: -1"></div>
      <div class="container px-0 mx-auto">
          <Header :mode="mode" />
      </div>
  </section>
    <div>
      <AboutHero :mode="mode" />
      <AboutStory class="border-b-2 pb-6"/>
      <ServiceAreas />
      <Testimonials />
      <CTATwo />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Header from '@/views/Header.vue';
  import AboutHero from '@/components/about/AboutHero.vue';
  import AboutStory from '@/components/about/AboutStory.vue';
  import Testimonials from '@/components/sections/Testimonials.vue';
  import ServiceAreas from '@/components/sections/ServiceAreas.vue';
  import CTATwo from '@/components/sections/CTATwo.vue';
  
    // Initialize mode based on your logic
    const isDarkModeEnabled = true; // Replace with your logic to determine dark mode
    const mode = ref(isDarkModeEnabled ? 'light' : 'dark');
  </script>
  
  
<style scoped>
  
  </style>