<template>
  <HomeHero :mode="mode" />
  <HomeStats />
  <HomeAbout />
  <HomeJourney />
  <Testimonials />
  <CTA />
</template>

<script setup>
  import { ref } from 'vue';
  import HomeHero from '@/components/home/HomeHero.vue';
  import HomeStats from '@/components/home/HomeStats.vue';
  import HomeAbout from '@/components/home/HomeAbout.vue';
  import HomeJourney from '@/components/home/HomeJourney.vue';
  import Testimonials from '@/components/Testimonials.vue';
  import CTA from '@/components/CTA.vue';

  // Initialize mode based on your logic
  const isDarkModeEnabled = true; // Replace with your logic to determine dark mode
  const mode = ref(isDarkModeEnabled ? 'light' : 'dark');
</script>

<style scoped>

</style>