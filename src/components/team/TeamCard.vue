<template>
    <div data-aos="fade-left" data-aos-delay="100" class="lg:w-1/2 flex flex-col md:flex-row px-3 mb-12">
        <img class="h-64 w-64 rounded object-cover" :src="image" alt="">
        <div class="pt-6 md:pt-2 md:pl-6">
            <p class="text-xl font-bold">{{ name }}</p>
            <p class="my-2 text-primary">{{ title }}</p>
            <p class="leading-loose text-blueGray-600">{{ bio }}</p>
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