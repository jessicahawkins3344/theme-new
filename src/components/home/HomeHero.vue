<template>
    <section class="relative">
        <div class="bg-top bg-cover bg-no-repeat" style="background-image: url('https://s3.us-central-1.wasabisys.com/house-jet/assets/images/hero-bg@2x.png'); background-attachment: fixed;">
            <div class="overlay "></div>
            <div class="container px-8 lg:px-12 mx-auto md:pb-20 ">
                <Header :mode="mode" class="z-50"/>
                <div class="py-12 text-center pt-48 relative">
                    <div class="mx-auto mb-8 aos-init aos-animate max-w-xxl z-30">
                        <span data-aos="fade-up" data-aos-delay="0" class="z-30 text-xs py-1 px-3 text-primary font-semibold bg-blue-50 rounded-xl">Local Market Expert</span>
                        <h2 data-aos="fade-up" class="leading-snug mb-4 text-white font-bold font-heading mt-4 text-4xl md:text-5xl lg:text-6xl">
                            <span>Top Real Estate Team In </span>
                            <br>
                            <span class="text-primary">Springfield, MO</span>
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="400" class="leading-relaxed text-white">Contact Our Experienced Team of Real Estate Agents When You're Ready to Buy or Sell in Your Local Market.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600" class="flex flex-wrap max-w-lg mx-auto aos-init">
                        <div class="flex w-full md:w-2/3 mb-3 md:mb-0 md:mr-2">
                                <div class="relative"><v-icon name="bi-search" scale="1.2" class="flex ml-4 absolute top-0 bottom-0 text-white my-auto inline-block transition ease-in-out "/>
                                </div>
                                <input class="w-full rounded py-4 pl-12 text-xs text-blueGray-600 bg-transparent outline-none transition-all ease-in-out
                                ring-2 ring-white ring-inset focus:ring-2 focus:ring-primary focus:ring-inset" type="text" placeholder="Search by Zip, City or County">
                            </div>
                        <button class="wow slideInUp w-full md:w-auto py-4 px-8 text-xs text-primary hover:text-white font-semibold leading-none border hover:border-primary bg-white hover:bg-primary rounded transition duration-300 ease-in-out" type="submit">Find Homes</button>
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
  background: linear-gradient(180deg, rgb(0 0 0 / 45%) 26.4%, rgb(2 15 23 / 59%) 54.63%, rgb(6 14 29 / 76%) 81.76%);
}
</style>