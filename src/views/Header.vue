<template>
    <nav class="flex justify-between items-center py-6">
        <a class="z-30 text-3xl text-white font-semibold leading-none" href="/">
            <img class="h-10 transition-opacity ease-in-out hover:opacity-50" src="../assets/images/metis-light-name.svg" alt="" width="auto">
        </a>
        <div class="lg:hidden z-30">
            <button @click="toggleMenu" class="bg-white navbar-burger flex items-center py-2 px-3 text-primary hover:bg-white/50 rounded border border-blueGray-500 hover:border-blueGray-300">
                <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>
        </div>
        <DesktopNav class="relative" :navigationItems="navigationItems" :mode="mode" />
        <div class="hidden lg:block z-30">
            <a @click.prevent="showLoginPopup = true" class="mr-2 inline-block px-4 py-3 text-xs bg-white text-blueGray-700 hover:text-blueGray-400 font-semibold leading-none border border-blueGray-500 hover:border-blueGray-300 rounded" href="#">Log In</a>
            <a class="inline-block px-4 py-3 text-xs font-semibold leading-none bg-primary hover:brightness-120 text-white rounded" href="#">Sign Up</a>
            <LoginPopup :visible="showLoginPopup" @close="showLoginPopup = false" />
        </div>
    </nav>
    <MobileNav :isMenuOpen="isMenuOpen" :navigationItems="navigationItems" @toggleMenu="toggleMenu" />
</template>

<script setup>
    import LoginPopup from '@/components/LoginPopup.vue';
    import { ref } from 'vue';
    import DesktopNav from '@/components/DesktopNav.vue';
    import MobileNav from '@/components/MobileNav.vue';

    const showLoginPopup = ref(false);
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    };

    const navigationItems = [
        { name: 'Buy', href: '#' },
        { name: 'Sell', href: '#', subMenu: [{ name: 'Sub Sell 1', href: '#' }, { name: 'Sub Sell 2', href: '#' }] },
        { name: 'Blog', href: '/blog' },
        { name: 'Team', href: '/team' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const props = defineProps({
        mode: {
            type: String,
            required: true,
        },
    });
</script>

<style scoped>
/* Scoped styles for Header component */
</style>
