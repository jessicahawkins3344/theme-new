<template>
    <div>
        <section class="relative border-b-2 bg-white">
            <div class="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-gray-50 z-0" style="z-index: -1"></div>
            <div class="container px-8 lg:px-12 mx-auto">
                <Header :mode="mode" />
            </div>
        </section>
        <section class="py-20 px-4 bg-gray-50">
            <div class="container px-8 lg:px-12 mx-auto">
                <div class="mx-auto">
                    <h2 class="mt-2 text-4xl font-bold font-heading">Privacy Policy</h2>
                    <p class="mb-6 leading-loose text-blueGray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo est eget consequat imperdiet. Suspendisse laoreet scelerisque lobortis. Mauris facilisis hendrerit nulla at vehicula. Suspendisse potenti. Ut in nulla a purus bibendum convallis. Suspendisse id nunc maximus, suscipit nte ac, vulputate massa. Sed ut nunc suscipit, bibendum arcu a, interdum elit. Nullam laoreet mollis dictum. Ut suscipit, magna at elementum iaculis, erat erat fermentum justo, sit amet ultrices enim leo sit amet purus. Nulla sed erat molestie, auctor mauris lobortis, iaculis justo.</p>
                    <p class="leading-loose text-blueGray-600">Duis hendrerit dui in dui ornare luctus. Nullam gravida tincidunt lorem cursus suscipit. Integer scelerisque sem et sem porta, eu volutpat mi tempor. Duis interdum sodales lacus non tempor. Nam mattis, sapien a commodo ultrices, nunc orci tincidunt ante, tempus tempus turpis metus laoreet lacus. Praesent condimentum, arcu ut fringilla tincidunt, augue diam pretium augue, sit amet vestibulum nunc felis vel metus. Duis dolor nulla, pellentesque non ultrices ut, convallis eu felis. Duis luctus tempor arcu, vitae elementum massa porta non. Morbi aliquet, neque ut volutpat sodales, dui enim facilisis enim, ut dictum lacus neque in urna. Nam metus elit, ullamcorper pretium nisi at, aliquet gravida lectus. Nullam id lectus pellentesque, suscipit dolor eget, consequat velit. Pellentesque finibus commodo nisl, id interdum leo. Maecenas aliquam felis justo, ut sagittis nunc maximus ut.</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from '@/views/Header.vue';

// Initialize mode based on your logic
const isDarkModeEnabled = false; // Replace with your logic to determine dark mode
const mode = ref(isDarkModeEnabled ? 'light' : 'dark');


</script>
  
  
<style scoped>
  
  </style>