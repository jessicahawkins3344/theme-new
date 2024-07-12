<template>
    <div>
      <AboutHero :mode="mode" />
      <AboutStory />
      <CTA />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import AboutHero from '@/components/about/AboutHero.vue';
  import AboutStory from '@/components/about/AboutStory.vue';
  import CTA from '@/components/CTA.vue';
  
    // Initialize mode based on your logic
    const isDarkModeEnabled = false; // Replace with your logic to determine dark mode
    const mode = ref(isDarkModeEnabled ? 'light' : 'dark');
  </script>
  
  
<style scoped>
  
  </style>