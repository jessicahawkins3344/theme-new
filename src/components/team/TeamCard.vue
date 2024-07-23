<template>
    <div data-aos="fade-left" data-aos-delay="100" class="w-full md:w-1/2 lg:w-1/4 p-3">
      <div class="relative max-w-max mx-auto h-full overflow-hidden rounded-3xl">
        <img class="h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000" :src="image" alt="">
        <div class="absolute bottom-0 left-0 w-full p-2">
          <div class="bg-black bg-opacity-80 w-full py-4 px-5 rounded-lg" style="backdrop-filter: blur(3px);">
            <h3 class="mb-1 text-lg text-white font-bold leading-snug">{{ name }}</h3>
            <p class="text-gray-400 font-medium">{{ title }}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TeamCard',
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>