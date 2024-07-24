<template>
    <section class="bg-zinc-800 overflow-hidden">
        <div class="flex flex-wrap -m-8 lg:-m-14">
            <div class="w-full md:w-5/12 p-8 lg:p-14">
                <div class="h-full overflow-hidden">
                    <img class="w-full h-full object-cover transform hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1647580425896-dd46f76331e1?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHw2MXx8YWdlbnR8ZW58MHwxfHx8MTcxODczMzE0MXww&ixlib=rb-4.0.3&q=85&w=1920" alt="" data-aos="fade-right" data-aos-delay="200">
                </div>
            </div>
            <div class="flex-1 md:w-1/2 p-16 px-8 lg:p-14">
                <div class="flex flex-col justify-center md:h-screen">
                    <div class="md:max-w-xl pb-16 py-0 md:py-16 px-8">
                        <span class="inline-block sub text-white mb-4" data-aos="fade-right" data-aos-delay="200">About Me</span>
                        <h2 class="mb-4 text-6xl md:text-7xl font-bold tracking-px-n leading-tight font-sans text-white" data-aos="fade-right" data-aos-delay="400">Who Is Mike Oddo?</h2>
                        <p class="mb-20 text-gray-300 tracking-tight text-lg" data-aos="fade-right" data-aos-delay="600">He has an extensive client base featuring those who seek the luxury lifestyle including titans of industry, celebrities, the royal families, major lending institutions and foreign investors. As a prominent figure in the luxury real estate market, Aaron has received International acclaim for record setting sales across Los Angeles and Southern California.</p>
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