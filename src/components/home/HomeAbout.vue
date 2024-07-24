<template>
    <section class="bg-zinc-800 overflow-hidden">
        <div class="flex flex-wrap -m-4 lg:-m-14">
            <div class="w-full md:w-5/12 lg:p-10">
                <div class="h-full overflow-hidden">
                    <img class="w-auto h-full object-cover transform hover:scale-105 transition duration-500" src="https://s3.us-central-1.wasabisys.com/house-jet/assets/JHawkins/agent6.png" alt="" data-aos="fade-right" data-aos-delay="200">
                </div>
            </div>
            <div class="flex-1 md:w-1/2 py-4 pt-20 px-0 lg:pr-20 lg:py-20 ">
                <div class="flex flex-col justify-center md:h-screen">
                    <div class="md:max-w-xxl pb-16 px-16 md:py-16 lg:px-16">
                        <span class="inline-block sub text-white mb-4" data-aos="fade-right" data-aos-delay="200">About Me</span>
                        <h2 class="mb-4 text-6xl md:text-7xl font-bold tracking-px-n leading-tight font-sans text-white" data-aos="fade-right" data-aos-delay="400">Who Is Mike Oddo?</h2>
                        <p class="mb-10 text-gray-300 tracking-tight text-lg" data-aos="fade-right" data-aos-delay="600">He has an extensive client base featuring those who seek the luxury lifestyle including titans of industry, celebrities, the royal families, major lending institutions and foreign investors. As a prominent figure in the luxury real estate market, Aaron has received International acclaim for record setting sales across Los Angeles and Southern California.</p>
                        <div class="flex -m-1.5 mb-5 flex-grow">
                            <div class="p-1.5 w-full">
                                <a class="inline-block px-5 py-4 text-zinc-800 font-semibold tracking-tight bg-white hover:bg-zinc-300 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="/about" data-aos="fade-right" data-aos-delay="800">My Story</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script scoped>
import SocialIcons from '../elements/SocialIcons.vue';
</script>
<style scoped>

.sub {
    position: relative;
    letter-spacing: 0.275em;
    text-transform: uppercase;
    padding-left: 77px;
}

.sub::before {
    content: "";
    position: absolute;
    top: 12px;
    left: 0;
    width: 62px;
    height: 1px;
    background-color: #fff;
}
</style>