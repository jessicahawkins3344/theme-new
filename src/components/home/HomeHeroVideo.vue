<template>
    <div class="bg-black/70 relative">
        <div class="container px-8 lg:px-12 mx-auto">
            <Header :mode="mode" class="z-50"/>
        </div>
        <VideoBackground class="-mt-20">
            <section class="relative pt-24 md:pb-28 lg:pb-0 overflow-hidden ">
                <div class="relative z-10 container text-center mx-auto px-8">
                    <div class="flex items-center px-0 md:max-w-xxl lg:px-32">
                        <div class="w-full md:p-8">
                            <span class="inline-block sub center text-white mb-4" data-aos="fade-up" data-aos-delay="600">Springfield's Expert Agent</span>         
                            <h1 class="mb-6 text-8xl text-white tracking-px-n leading-tight md:text-13xl font-sans font-semibold" data-aos="fade-up" data-aos-delay="800">Mike Oddo</h1>
                            <p class="mb-8 text-white text-lg font-medium" data-aos="fade-up" data-aos-delay="1000">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
                            <SearchBar data-aos="fade-down" data-aos-delay="600"/>
                        </div>
                    </div>
                </div>
            </section>
        </VideoBackground>
    </div>
</template>
<script setup>
    import { defineProps } from 'vue';
    import VideoBackground from '../elements/VideoBackground.vue';
    import SearchBar from '../elements/SearchBar.vue';
    
    import Header from '@/views/Header.vue';
        
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