<template>
    <div class="relative h-screen w-full overflow-hidden bg-black/70">
      <video
        class="absolute top-0 left-0 w-full h-full object-cover"
        autoplay
        loop
        muted
        playsinline
      >
        <source src="../../assets/images/backgrounds/background-video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="absolute top-0 left-0 w-full h-full bg-black bg-black/60"></div>
    <div class="relative z-10 flex items-center justify-center h-full w-full">
      <slot></slot>
    </div>
    </div>
  </template>
  
  <script>
  import Header from '@/views/Header.vue';
    import { defineProps } from 'vue';
    
    const props = defineProps({
      mode: {
        type: String,
        required: true,
      },
    });
  export default {
    name: 'VideoBackground',
  };
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  