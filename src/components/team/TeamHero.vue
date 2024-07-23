<template>
  <section
    class="h-screen overflow-hidden bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
  >
    <div class="h-screen  bg-black/50 relative py-24 lg:py-28 lg:pb-36 overflow-hidden content-center">
      <div class="container px-8 mx-auto text-center">
          <span class="inline-block sub center text-white mb-4" data-aos="fade-up" data-aos-delay="200">Meet The Tea</span>
          <h2 class="mb-4 text-6xl md:text-12xl font-bold tracking-px-n leading-tight font-sans text-white" data-aos="fade-up" data-aos-delay="400">Our Team of Real Estate Experts</h2>
  
          <p class="hidden max-w-lg text-white/90 md:mt-6 md:text-lg md:leading-relaxed text-center md:block mx-auto" data-aos="fade-up" data-aos-delay="600">
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