<script setup>
import Footer from '@/views/Footer.vue'
</script>

<template>
  <div class="overflow-auto flex flex-col items-center justify-center top-0 left-0 right-0 bottom-0">
    <div class="grow w-full border-b-2">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style scoped>

</style>