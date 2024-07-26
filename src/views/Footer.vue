<template>
    <section class="relative w-full sm:px-8">
        <div class="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-gray-50"></div>
        <div class="container px-6 mx-auto">
            <div class="relative flex flex-wrap -mx-4">
                <div class="w-full lg:w-1/2 pt-20 px-10 max-w-lg lg:max-w-full mx-auto lg:mx-0 text-center lg:text-left">
                    <a class="inline-block mx-auto lg:ml-0 text-3xl font-semibold leading-none" href="#">
                    <img class="h-10" src="../assets/images/metis.svg" alt="" width="auto"></a>
                    <div class="mt-12 mb-16 lg:my-24">
                        <p class="mb-4 text-base text-blueGray-800 text-center lg:text-left">Subscribe and get access to new listings first.</p>
                        <div class="flex flex-wrap lg:flex-nowrap items-center">
                            <div class="flex w-full lg:w-3/4 mb-3 lg:mb-0 rounded">
                                <div class="relative"><v-icon name="bi-envelope" scale="1.2" class="flex ml-4 absolute top-0 bottom-0 text-primary my-auto inline-block transition ease-in-out "/>
                                </div>
                                <input class="w-full rounded py-4 pl-12 text-xs text-blueGray-600 bg-gray-50 outline-none transition-all ease-in-out focus:ring-2 focus:ring-primary focus:ring-inset" type="text" placeholder="Type your e-mail">
                            </div>
                            <button class="w-full lg:w-auto py-4 px-8 lg:ml-6 text-xs text-white font-semibold leading-none bg-primary hover:brightness-120 rounded" type="submit">Subscribe</button>
                        </div> 
                    </div>
                    <div class="hidden lg:block">
                        <p class="text-xs text-blueGray-600">© 2024. All rights reserved.</p>
                        <SocialIcons />
                    </div>
                </div>
                <div class="relative w-full lg:w-1/2 px-4 py-6 lg:py-40 lg:pl-12">
                    <div class="flex flex-row flex-wrap justify-around mb-12">
                        <div class="w-1/2 lg:w-auto mb-12">
                            <h5 class="mb-6 text-lg font-berlin uppercase tracking-widest">Menu</h5>
                            <ul class="space-y-3">
                                <li><a class="text-sm text-blueGray-600 hover:text-blueGray-500" href="#">First Link</a></li>
                                <li><a class="text-sm text-blueGray-600 hover:text-blueGray-500" href="#">Second Link</a></li>
                                <li><a class="text-sm text-blueGray-600 hover:text-blueGray-500" href="#">Third Link</a></li>
                                <li><a class="text-sm text-blueGray-600 hover:text-blueGray-500" href="#">Fourth Link</a></li>
                            </ul>
                        </div>
                        <div class="w-1/2 lg:w-auto mb-12">
                            <h5 class="mb-6 text-lg font-berlin uppercase tracking-widest">Other</h5>
                            <ul class="space-y-3">
                                <li><a class="text-sm text-blueGray-600 hover:text-blueGray-500" href="/privacy-policy">Privacy Policy</a></li>
                                <li><a class="text-sm text-blueGray-600 hover:text-blueGray-500" href="/terms-of-service">Terms of Service</a></li>
                            </ul>
                        </div>
                        <div class="w-full lg:w-auto mb-4">
                            <h5 class="mb-6 text-lg font-berlin uppercase tracking-widest">Location</h5>
                            <div class="mb-4 leading-relaxed">
                                <h3 class="text-sm text-blueGray-600">Address</h3>
                                <p>123 Easy Street</p>
                                <p>Springfield, MO 65807</p>
                            </div>
                            <div class="mb-4 leading-relaxed">
                                <h3 class="text-sm text-blueGray-600">Phone</h3>
                                <p>+ 48 654-430-309</p>
                            </div>
                            <div class="leading-relaxed">
                                <h3 class="text-sm text-blueGray-600">Hours</h3>
                                <p>Mon-Sat: 9:00AM-5:00PM</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:hidden text-center">
                        <p class="text-xs text-blueGray-600">© 2020. All rights reserved.</p>
                        <SocialIcons />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import SocialIcons from '@/components/elements/SocialIcons.vue';
</script>

<style scoped>

</style>