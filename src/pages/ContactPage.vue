<template>
    <div>
        <section class="relative border-b-2 bg-white">
            <div class="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-gray-50 z-0" style="z-index: -1"></div>
            <div class="container px-8 lg:px-12 mx-auto">
                <Header :mode="mode" />
            </div>
        </section>
        <section class="py-20 px-4 border-b-2">
            <div class="container px-8 lg:px-12 mx-auto">
                <div class="flex flex-wrap -mx-3">
                    <div class="align-middle w-full lg:w-1/2 px-3">
                        <div class="max-w-sm">
                            <span data-aos="fade-right" data-aos-delay="0" class="inline-block py-1 px-3 text-xs font-semibold bg-gray-50 text-primary rounded-xl">Contact Us</span>
                            <h2 data-aos="fade-right" data-aos-delay="200" class="mt-2 text-4xl font-bold font-heading">We will be glad to hear from you!</h2>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="400" class="mt-10 lg:mt-24">
                            <div class="mb-10 leading-relaxed">
                                <h3 class="text-sm text-blueGray-400">Phone</h3>
                                <p>+ 48 654-430-309</p>
                            </div>
                            <div class="mb-10 leading-relaxed">
                                <h4 class="text-sm text-blueGray-400">E-mail</h4>
                                <p>info@metis.com</p>
                            </div>
                            <div class="mb-10 leading-relaxed">
                                <h4 class="text-sm text-blueGray-400">Address</h4>
                                <p>11567 E Broadview Dr</p>
                                <p>Kiowa, Colorado(CO), 80117</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-center w-full lg:w-1/2 px-3">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Header from '@/views/Header.vue';
  import ContactForm from '@/components/forms/ContactForm.vue';
  
    // Initialize mode based on your logic
    const isDarkModeEnabled = false; // Replace with your logic to determine dark mode
    const mode = ref(isDarkModeEnabled ? 'light' : 'dark');
  </script>
  
  
<style scoped>
  
  </style>