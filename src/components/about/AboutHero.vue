<template>
    <section class="relative border-b-2">
        <div class="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-gray-50 z-0" style="z-index: -1"></div>
        <div class="container px-8 lg:px-12 mx-auto">
            <Header :mode="mode" />
            <div class="flex flex-wrap items-center -mx-3">
                <div class="w-full lg:w-1/2 px-3">
                    <div class="py-12">
                        <div class="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                            <h1 data-aos="fade-up" data-aos-delay="0" class="leading-snug text-3xl md:text-5xl mb-4 font-bold font-heading">
                                <span>Experience that&nbsp;</span>
                                <span class="text-primary">Matters.</span>
                            </h1>
                            <p data-aos="fade-up" data-aos-delay="200" class="text-blueGray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis. Quisque vitae nulla malesuada, auctor arcu vitae, luctus nisi.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="400" class="text-center lg:text-left">
                            <a class="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-primary hover:brightness-120 rounded" href="/contact">Contact Us</a><a class="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-500 hover:border-blueGray-300 hover:text-blueGray-300 rounded" href="/blog">Area News</a>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 px-3 lg:bg-blueGray-50 lg:mb-0">
                    <div class="flex items-center justify-center">
                        <img data-aos="fade-right" data-aos-delay="0" class="lg:max-w-lg md:max-w-sm sm:max-w-sm xs:max-w-xs" src="../../assets/images/mike-no-bg-small.png" alt="">
                    </div>
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