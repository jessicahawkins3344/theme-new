<template>
    <ul class="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
      <li v-for="item in navigationItems" :key="item.name" class="relative">
        <a :class="modeClass" :href="item.href"
           @mouseenter="openSubMenu(item.name)">
          {{ item.name }}
        </a>
        <ul v-if="item.subMenu && isSubMenuOpen(item.name)" class="absolute left-0 mt-2 w-40 bg-white border border-blueGray-500 rounded shadow-lg"
            @mouseenter="keepSubMenuOpen(item.name)"
            @mouseleave="closeSubMenu(item.name)">
          <li v-for="subItem in item.subMenu" :key="subItem.name" class="px-4 py-2 text-sm text-blueGray-700 hover:bg-blue-50">
            <a :href="subItem.href">{{ subItem.name }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const props = defineProps({
    navigationItems: {
      type: Array,
      required: true,
    },
    mode: {
      type: String,
      required: true,
    },
  });
  
  const subMenuOpen = ref({});
  
  const openSubMenu = (name) => {
    subMenuOpen.value[name] = true;
  };
  
  const closeSubMenu = (name) => {
    subMenuOpen.value[name] = false;
  };
  
  const keepSubMenuOpen = (name) => {
    subMenuOpen.value[name] = true;
  };
  
  const isSubMenuOpen = (name) => {
    return subMenuOpen.value[name];
  };
  
  const modeClass = computed(() => {
    return props.mode === 'light' ? 'text-sm text-white hover:text-blueGray-400' : 'text-sm text-blueGray-600 hover:text-blueGray-400';
  });
  </script>
  
  <style scoped>
  /* Scoped styles for DesktopNav component */
  </style>
  