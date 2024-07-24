<template>
    <section
      class="h-100 md:h-screen overflow-hidden bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat md:bg-fixed"
    >
      <div class="h-100 md:h-screen  bg-black/70 relative py-24 lg:py-28 lg:pb-36 overflow-hidden content-center">
        <div class="container px-8 mx-auto text-center">
            <span class="inline-block sub center text-white mb-4" data-aos="fade-up" data-aos-delay="200">Meet Mike</span>
            <h2 class="mb-4 text-8xl md:text-12xl font-bold tracking-px-n leading-snug font-sans text-white" data-aos="fade-up" data-aos-delay="400">About Mike Oddo</h2>
    
            <p class="max-w-lg text-white/90 md:mt-6 md:text-lg md:leading-relaxed text-center mx-auto" data-aos="fade-up" data-aos-delay="600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officiasds corporis quasi
            doloribus iure architecto quae voluptatum beatae excepturi dolores.
            </p>
    
            <div class="mt-4 sm:mt-8">
                <a class="inline-block px-8 py-4 text-zinc-800 font-semibold tracking-tight bg-white hover:bg-zinc-300 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="/contact" data-aos="fade-down" data-aos-delay="600">Contact</a>
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

</style>