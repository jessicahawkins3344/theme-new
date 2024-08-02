<template>
    <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 bg-white mt-6 mb-6">
        <div class="py-12 px-8 md:p-12 lg:px-16 lg:py-24 content-center">
            <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h2 data-aos="fade-left" data-aos-delay="200" class="mb-4 text-6xl md:text-7xl tracking-px-n leading-tight font-calm">
                    Get to Know Me
                </h2>
                <p data-aos="fade-left" data-aos-delay="400" class=" text-gray-500 md:mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
                    sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                    quisque ut interdum tincidunt duis.
                </p>
                <p data-aos="fade-left" data-aos-delay="400" class="text-gray-500 md:mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
                    sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                    quisque ut interdum tincidunt duis.
                </p>
                <SocialIcons data-aos="fade-right" data-aos-delay="400"/>
                <div data-aos="fade-left" data-aos-delay="600" class="gap-2 flex mt-4 md:mt-8 place-content-center">
                    <a
                        href="/contact"
                        class="inline-block px-5 py-4 text-white font-semibold tracking-tight bg-primary border-2 border-zinc-800 hover:opacity-80 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                        >
                    Get In Touch
                    </a>
                    <a
                        href="#"
                        class="inline-block px-5 py-4 text-primary font-semibold tracking-tight border-2 border-zinc-800 hover:opacity-80 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200 hover:text-white"
                        >
                    Search Homes
                    </a>
                </div>
            </div>
        </div>
        <img data-aos="fade-right" data-aos-delay="400"
            alt=""
            src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="h-56 w-full object-cover sm:h-full"
            />
    </section>
</template>
<script setup>
import SocialIcons from '../elements/SocialIcons.vue';
</script>

<style scoped></style>