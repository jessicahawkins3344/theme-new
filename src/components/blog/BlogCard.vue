<template>
    <div data-aos="fade-down" data-aos-delay="600" class="w-full lg:w-1/3 px-3 mb-12">
        <a class="hover:text-blueGray-500" href="#">
            <img class="h-80 w-full object-cover rounded" :src="image" alt="">
            <p class="mt-6 text-sm text-primary">
                <span>{{ category }}&nbsp;</span>
                <span class="text-blueGray-600">{{ date }}</span>
            </p>
            <h3 class="my-2 text-2xl font-bold font-heading">{{ title }}</h3>
            <p class="text-blueGray-600 leading-loose">{{ excerpt }}</p>
        </a>
    </div>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    image: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>