<template>
  <section
    class="h-90 md:h-screen overflow-hidden bg-[url(https://s3.us-central-1.wasabisys.com/house-jet/assets/JHawkins/base-img-ca1.png)] bg-cover bg-center bg-no-repeat md:bg-fixed"
  >
    <div class="h-90 md:h-screen  bg-black/70 relative py-24 lg:py-28 lg:pb-36 overflow-hidden content-center">
      <div class="container px-8 mx-auto text-center">
          <span class="inline-block sub center text-white mb-4" data-aos="fade-up" data-aos-delay="200">The Blog</span>
          <h2 class="mb-4 text-8xl md:text-12xl font-bold tracking-px-n leading-snug font-sans text-white" data-aos="fade-up" data-aos-delay="400">Latest Local <br>Real Estate Reads</h2>
          
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