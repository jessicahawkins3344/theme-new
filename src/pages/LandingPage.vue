<template>
    <div>
        <section class="">
            <div class="md:pb-20 bg-top bg-cover bg-no-repeat" style="background-image: url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;h=450&amp;q=80&amp;blend=1e293b&amp;sat=30&amp;blend-mode=multiply'); background-attachment: fixed;">
                <div class="container px-8 lg:px-12 mx-auto">
                    <Header :mode="mode" />
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