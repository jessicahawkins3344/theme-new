<template>
  <div data-aos="fade-down" data-aos-delay="600"  class="w-full pb-12 mb-12">
    <div class="flex flex-wrap -m-0 ml-2 xl:-m-12 mt-5 md:pr-6">
      <div class="w-full md:w-1/2 lg:w-auto p-4 pl-0 xl:p-10">
        <div class="max-w-xl mx-auto">
          <img :src="image" alt="" class="rounded-xl object-cover h-80 w-96">
        </div>
      </div>
      <div class="flex-1 md:flex-1 p-6 xl:p-6 md:pr-16">
        <div class="flex flex-col justify-around h-full">
          <div class="w-auto mb-9">
            <div class="">
                <span class="inline-block sub-dark mb-4 font-berlin">{{ category }}</span>
              <h4 class="font-calm mb-4 text-3xl font-semibold leading-tight"><a href="#" class="hover:opacity-40">{{ title }}</a></h4>
              <p class="text-lg text-gray-500 font-medium">
                {{ excerpt }}
              </p>
            </div>
          </div>
          <div class="w-auto">
            <div class="flex flex-wrap items-center -m-1.5">
              <div class="flex-1 p-1.5">
                <p class="text-sm text-gray-500 font-medium">{{ date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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