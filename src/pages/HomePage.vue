<template>
  <section class="relative border-b-2 border-zinc-600 bg-zinc-800">
      <div class="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-gray-50 z-0" style="z-index: -1"></div>
      <div class="container px-8 lg:px-12 mx-auto">
      </div>
  </section>
  <HomeHeroVideo :mode="mode" />
  <HomeStats />
  <HomeJourney />
  <HomeAbout />
  <Testimonials />
  <ServiceAreas />
  <FeaturedVideo />
  <AsSeenOn />
  <CTA />
</template>

<script setup>
  import { ref } from 'vue';
  import Header from '@/views/Header.vue';
  import HomeHeroVideo from '@/components/home/HomeHeroVideo.vue';

  import HomeHero from '@/components/home/HomeHero.vue';
  import HomeStats from '@/components/home/HomeStats.vue';
  import HomeAbout from '@/components/home/HomeAbout.vue';
  import HomeJourney from '@/components/home/HomeJourney.vue';
  import Testimonials from '@/components/sections/Testimonials.vue';
  import FeaturedVideo from '@/components/sections/FeaturedVideo.vue';
  import ServiceAreas from '@/components/sections/ServiceAreas.vue';
  import AsSeenOn from '@/components/sections/AsSeenOn.vue';
  import CTA from '@/components/sections/CTATwo.vue';

  // Initialize mode based on your logic
  const isDarkModeEnabled = true; // Replace with your logic to determine dark mode
  const mode = ref(isDarkModeEnabled ? 'light' : 'dark');
</script>

<style scoped>

</style>