<template>
    <section class="relative border-b-2 bg-zinc-800">
      <div class="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-gray-50 z-0" style="z-index: -1"></div>
      <div class="container px-0 mx-auto">
          <Header :mode="mode" />
      </div>
  </section>
    <div>
        <BlogHero :mode="mode" />
        <BlogArchive :isSingle="isSingle"/>
        <CTA />
    </div>
</template>
<script setup>
    import { ref } from 'vue';
    import Header from '@/views/Header.vue';
    import BlogHero from '@/components/blog/BlogHero.vue';
    import BlogArchive from '@/components/blog/BlogArchive.vue';
    import CTA from '@/components/sections/CTA.vue';
    
      // Initialize mode based on your logic
      const isDarkModeEnabled = true; // Replace with your logic to determine dark mode
      const mode = ref(isDarkModeEnabled ? 'light' : 'dark');
      const isSingle = ref(false); // Set this based on your condition (e.g., current route check)
</script>
<style scoped>
</style>