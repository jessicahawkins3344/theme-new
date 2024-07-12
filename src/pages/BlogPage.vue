<template>
    <div>
        <BlogHero :mode="mode" />
        <BlogArchive isSingle="isSingle"/>
        <CTA />
    </div>
</template>
<script setup>
    import { ref } from 'vue';
    import BlogHero from '@/components/blog/BlogHero.vue';
    import BlogArchive from '@/components/blog/BlogArchive.vue';
    import CTA from '@/components/CTA.vue';
    
      // Initialize mode based on your logic
      const isDarkModeEnabled = true; // Replace with your logic to determine dark mode
      const mode = ref(isDarkModeEnabled ? 'light' : 'dark');
      const isSingle = ref(false); // Set this based on your condition (e.g., current route check)
</script>
<style scoped>
</style>