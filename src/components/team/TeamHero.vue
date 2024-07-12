<template>
    <section class="relative pb-8 bg-top bg-cover bg-no-repeat " style="background-image: url('https://s3.us-central-1.wasabisys.com/house-jet/assets/JHawkins/base-img-ca3.png'); background-attachment: fixed;">
        <div class="overlay "></div>
        <div class="container px-8 lg:px-12 mx-auto">
          <Header :mode="mode" />
          <div class="py-12 text-center pt-24">
            <div class="max-w-lg mx-auto mb-8">
              <span data-aos="fade-up" data-aos-delay="0" class="inline-block py-1 px-3 text-xs font-semibold bg-gray-50 text-primary rounded-xl">Our Team</span>
              <h1 data-aos="fade-up" data-aos-delay="200" class="leading-snug mt-4 text-3xl md:text-5xl mb-4 text-white font-bold font-heading">
                <span>Our Expert Team in </span>
                <span class="text-primary">Springfield,MO</span>
              </h1>
            </div>
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

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 1;
  transition: .5s ease;
  background: linear-gradient(180deg, rgb(0 0 0 / 45%) 26.4%, rgb(2 15 23 / 79%) 54.63%, rgb(6 14 29 / 76%) 81.76%);
}

</style>