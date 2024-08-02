<template>
  <section
    class="h-90 md:h-screen overflow-hidden bg-[url(https://s3.us-central-1.wasabisys.com/house-jet/assets/JHawkins/agents4.png)] bg-cover bg-top bg-no-repeat md:bg-fixed"
  >
    <div class="h-90 md:h-screen bg-black/50 relative py-24 lg:py-28 lg:pb-36 overflow-hidden content-center">
      <div class="container px-8 mx-auto text-center">
          <span class="inline-block sub center text-white mb-4" data-aos="fade-up" data-aos-delay="200">Meet The Team</span>
          <h2 class="mb-4 text-8xl md:text-12xl leading-tight font-calm text-white" data-aos="fade-up" data-aos-delay="400">Our Team of Real Estate Experts</h2>
  
          <p class="max-w-lg text-white/90 md:mt-6 md:text-lg md:leading-relaxed text-center mx-auto" data-aos="fade-up" data-aos-delay="600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi
          doloribus iure architecto quae voluptatum beatae excepturi dolores.
          </p>
  
      </div>
    </div>
  </section>
</template>
<script setup>
import Header from '@/views/Header.vue';
import { defineProps } from 'vue';

const props = defineProps({
mode: {
  type: String,
  required: true,
},
});
</script>

<style scoped>

</style>