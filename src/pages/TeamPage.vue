<template>
    <div>
      <TeamHero :mode="mode" />
      <TeamMembers />
      <CTA />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import TeamHero from '@/components/team/TeamHero.vue';
  import TeamMembers from '@/components/team/TeamMembers.vue';
  import CTA from '@/components/CTA.vue';
  
    // Initialize mode based on your logic
    const isDarkModeEnabled = true; // Replace with your logic to determine dark mode
    const mode = ref(isDarkModeEnabled ? 'light' : 'dark');
  </script>
  
  
<style scoped>
  
  </style>