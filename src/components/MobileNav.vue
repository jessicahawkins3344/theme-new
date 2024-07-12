<template>
        <div v-if="isMenuOpen" class="ease-in-out navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
            <div @click="toggleMenu" class="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
            <nav class="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
                <div class="flex items-center mb-8">
                    <a class="mr-auto text-3xl font-semibold leading-none" href="/">
                    <img class="h-10 transition-opacity ease-in-out hover:opacity-50" src="../assets/images/metis.svg" alt="" width="auto">
                    </a>
                    <button @click="toggleMenu" class="navbar-close">
                        <svg class="h-6 w-6 text-blueGray-600 cursor-pointer hover:text-blueGray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div>
                    <ul>
                        <li v-for="item in navigationItems" :key="item.name" class="mb-1 relative">
                            <a class="block p-4 text-sm"
                                :class="{ 'text-primary': isSubMenuOpen(item.name), 'text-blueGray-500': !isSubMenuOpen(item.name) }"
                                :href="item.href"
                                @click.prevent="toggleSubMenu(item.name)">
                                <span class="inline-block align-middle">{{ item.name }}</span>
                                <svg v-if="item.subMenu" :class="[
                                    'transform transition-transform',
                                    { 'rotate-90 text-primary h-4 w-4 ml-1 inline-block': isSubMenuOpen(item.name), 'inline-block h-4 w-4 ml-1 rotate-0 text-blueGray-600': !isSubMenuOpen(item.name) }
                                    ]"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            <ul v-if="item.subMenu" class="submenu"
                                :class="{ 'submenu-open': isSubMenuOpen(item.name) }">
                                <li v-for="subItem in item.subMenu" :key="subItem.name"
                                    class="py-4 pl-6 text-sm text-blueGray-700 hover:bg-blue-50 hover:text-primary">
                                    <a :href="subItem.href">{{ subItem.name }}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div class="mt-4 pt-6 border-t border-blueGray-100">
                        <a class="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-primary hover:brightness-120 text-white rounded" href="#">Sign Up</a>
                        <a class="block px-4 py-3 mb-2 text-xs text-center text-primary hover:brightness-75700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded" href="#">Log In</a>
                    </div>
                </div>
                <div class="mt-auto">
                    <p class="my-4 text-xs text-blueGray-600">
                        <span>Get in Touch &nbsp;</span>
                        <a class="text-primary hover:text-primary underline" href="#">info@example.com</a>
                    </p>
                    <SocialIcons />
                </div>
            </nav>
        </div>
</template>
<script setup>
    import { ref } from 'vue';
    import SocialIcons from './elements/SocialIcons.vue';
    
    const props = defineProps({
      isMenuOpen: {
        type: Boolean,
        required: true,
      },
      navigationItems: {
        type: Array,
        required: true,
      },
    });
    
    const emit = defineEmits(['toggleMenu']);
    
    const toggleMenu = () => {
    emit('toggleMenu');
    };
    
    const subMenuOpen = ref('');
    
    const toggleSubMenu = (name) => {
      subMenuOpen.value = subMenuOpen.value === name ? '' : name;
    };
    
    const isSubMenuOpen = (name) => {
      return subMenuOpen.value === name;
    };
</script>
<style scoped>
    /* Scoped styles for MobileNav component */
    .submenu {
    display: none;
    position: relative;
    z-index: 1000;
    padding-left: 0;
    }
    .submenu-open {
    display: block;
    }
    .rotate-90 {
    transform: rotate(90deg);
    }
    .rotate-0 {
    transform: rotate(0deg);
    }
</style>