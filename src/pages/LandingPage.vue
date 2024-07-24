<template>
    <div>
        <section class="relative border-b-2 bg-zinc-800">
            <div class="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-gray-50 z-0" style="z-index: -1"></div>
            <div class="container px-8 lg:px-12 mx-auto">
                <Header :mode="mode" />
            </div>
        </section>
    <section
      class="h-90 md:h-full overflow-hidden bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat md:bg-fixed"
    >
      <div class="h-90 md:h-full  bg-black/70 relative py-24 lg:py-28 lg:pb-36 overflow-hidden content-center">
        <div class="container px-8 lg:px-12 mx-auto">
                    <LandingForm 
                        :subheading="formSubheading"
                        :headline="formHeadline"
                        :description="formDescription"
                        class="mt-20 mb-20"
                        data-aos="fade-up" data-aos-delay="0"
                    />
                </div>
      </div>
    </section>
    </div>
</template>
<script setup>
    import { ref } from 'vue';
    import Header from '@/views/Header.vue';
    import LandingForm from '@/components/forms/LandingForm.vue';
    
    // Initialize mode based on your logic
    const isDarkModeEnabled = true; // Replace with your logic to determine dark mode
    const mode = ref(isDarkModeEnabled ? 'light' : 'dark');
    
    // Define reactive properties
    const formSubheading = ref('Your Subheadline');
    const formHeadline = ref('Your Landing Page Headline');
    const formDescription = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis. Quisque vitae nulla malesuada, auctor arcu vitae, luctus nisi.');

</script>
<style scoped>
</style>