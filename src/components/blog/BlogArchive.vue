<template>
    <section class="py-20 px-4">
        <div class="container px-8 lg:px-12 mx-auto">
            <h2 data-aos="fade-down" data-aos-delay="400" v-if="isSingle" class="text-2xl lg:text-3xl mb-8 font-bold font-heading">More Articles</h2>
            <div class="flex flex-wrap -mx-3">
                <BlogCard
                    v-for="(blog, index) in blogs"
                    :key="index"
                    :image="blog.image"
                    :category="blog.category"
                    :date="blog.date"
                    :title="blog.title"
                    :excerpt="blog.excerpt"
                />
            </div>
            <div class="text-center">
                <a v-if="isSingle" class="inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-primary hover:brightness-120  rounded" href="#">Show all posts</a>
                <a v-else class="inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-primary hover:brightness-120 rounded" href="#">More Articles</a>
            </div>
        </div>
    </section>
</template>
<script>
import BlogCard from './BlogCard.vue';

export default {
  name: 'BlogArchive',
  props: {
    isSingle: {
      type: Boolean,
      required: true
    }
  },
  components: {
    BlogCard
  },
  data() {
    return {
      blogs: [
        {
          image: 'https://images.unsplash.com/photo-1602536100338-c7762727ddb7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80',
          category: 'Tech',
          date: 'Jan 24th, 2024',
          title: 'Vue 3: A Comprehensive Guide',
          excerpt: 'Learn all about Vue 3 and how it can improve your development workflow.'
        },
        {
          image: 'https://images.unsplash.com/photo-1603665330306-dd1a67e0cc4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80',
          category: 'Travel',
          date: 'Jan 24th, 2024',
          title: 'Top 10 Destinations for 2024',
          excerpt: 'Discover the most amazing places to visit in 2024.'
        },
        {
          image: 'https://images.unsplash.com/photo-1603665270146-bbdf9858ea55?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80',
          category: 'Food',
          date: 'Jan 24th, 2024',
          title: 'The Best Street Foods Around the World',
          excerpt: 'A culinary journey through the best street foods across the globe.'
        }
      ]
    };
  }
}

</script>
