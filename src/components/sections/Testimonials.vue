<template>
    <section class="relative py-24 lg:py-28 lg:pb-36 overflow-hidden border-b-2">
      <div class="container px-8 mx-auto">
        <span data-aos="fade-right" data-aos-delay="200" class="inline-block sub-dark mb-4">Testimonials</span>
        <h2 data-aos="fade-right" data-aos-delay="400" class="mb-4 text-6xl md:text-7xl font-bold tracking-px-n leading-tight font-sans">What our clients say</h2>
        <div class="flex flex-wrap items-center justify-between -m-2 mb-16">
          <div class="w-auto p-2">
            <p data-aos="fade-right" data-aos-delay="600" class="max-w-xl text-lg tracking-tight">Basko is the super simple way to connect over video of apps, downloads, or long meeting links.</p>
          </div>
          <div class="w-auto p-2">
            <div class="flex flex-wrap -m-1">
              <div class="w-auto p-1">
                <a class="flex items-center justify-center w-10 h-10 bg-zinc-800 hover:bg-zinc-500 rounded-full transition duration-200" @click="prevSlide">
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.41242 1.44434L1.85686 6.99989M1.85686 6.99989L7.41242 12.5554M1.85686 6.99989L16.1426 6.99989" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </a>
              </div>
              <div class="w-auto p-1">
                <a class="flex items-center justify-center w-10 h-10 bg-white hover:bg-gray-200 rounded-full transition duration-200" @click="nextSlide">
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5876 1.44434L16.1431 6.99989M16.1431 6.99989L10.5876 12.5554M16.1431 6.99989L1.85742 6.99989" stroke="#171A1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <swiper :slides-per-view="3" :space-between="20" :breakpoints="breakpoints" @swiper="onSwiper">
          <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
            <div class="p-6 bg-zinc-800 hover:bg-zinc-500 rounded-lg transition duration-200 min-h-80 content-center" data-aos="fade-up" data-aos-delay="400">
              <div class="flex flex-wrap -m-0.5 mb-6" >
                <div class="w-auto p-0.5" v-for="star in 5" :key="star">
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.35279 0.730779L11.9212 6.18903L17.6625 7.06451C17.8112 7.08761 17.9344 7.19674 17.9807 7.34619C18.027 7.49563 17.9884 7.65959 17.8809 7.7694L13.7272 12.0171L14.7079 18.0162C14.7337 18.1709 14.6731 18.3275 14.5517 18.4199C14.4302 18.5124 14.2691 18.5246 14.1362 18.4515L9.00059 15.6197L3.86502 18.4523C3.73217 18.5257 3.57094 18.5137 3.44943 18.4212C3.32793 18.3288 3.26734 18.1722 3.29327 18.0174L4.27397 12.0171L0.119103 7.7694C0.0116435 7.65959 -0.027039 7.49563 0.0192579 7.34619C0.0655548 7.19674 0.188839 7.08761 0.337471 7.06451L6.07884 6.18903L8.64838 0.730779C8.71377 0.589643 8.85058 0.5 9.00059 0.5C9.1506 0.5 9.28741 0.589643 9.35279 0.730779Z" fill="#FFBB29"></path>
                  </svg>
                </div>
              </div>
              <p class="mb-6 text-white tracking-tight text-lg">“{{ testimonial.text }}”</p>
              <div class="flex flex-wrap items-center -m-1.5">
                <div class="w-auto p-1.5">
                  <h3 class="text-white font-semibold tracking-tight font-sans">{{ testimonial.name }}</h3>
                  <span class="text-gray-400 text-sm tracking-tight">{{ testimonial.location }}</span>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  
  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperInstance: null,
        testimonials: [
          {
            text: "Our visual designer lets you quickly and of drag and drop your way to custom apps for both desktop, mobile & also tab for both of it.",
            name: "Dorthy W",
            location: "Springfield, MO"
          },
          {
            text: "This product has greatly improved our efficiency and productivity.",
            name: "John D",
            location: "Rogersville, MO"
          },
          {
            text: "Amazing tool with fantastic support!",
            name: "Jane S",
            location: "Nixa, MO"
          },
          {
            text: "It has revolutionized the way we manage our projects.",
            name: "Michael B",
            location: "Ozark, MO"
          },
          {
            text: "Highly recommend to anyone looking to streamline their workflow.",
            name: "Anna K",
            location: "Bolivar, MO"
          }
        ],
        breakpoints: {
        324: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      };
    },
    methods: {
      onSwiper(swiper) {
        this.swiperInstance = swiper;
      },
      nextSlide() {
        if (this.swiperInstance) {
          this.swiperInstance.slideNext();
        } else {
          console.error('Swiper instance not found');
        }
      },
      prevSlide() {
        if (this.swiperInstance) {
          this.swiperInstance.slidePrev();
        } else {
          console.error('Swiper instance not found');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styles if necessary */
  </style>
  