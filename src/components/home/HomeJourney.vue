<template>
    <section class="py-36 white overflow-hidden ">
        <div class="container px-12 md:px-4 mx-auto">
            <div class="flex flex-wrap -m-8">
                <div class="w-full md:w-1/2 xl:w-auto p-4">
                    <div class="flex flex-wrap justify-start -m-4">
                        <BuyerSearchCard data-aos="fade-left" data-aos-delay="200"/>
                        <HomeValueCard data-aos="fade-left" data-aos-delay="400"/>
                    </div>
                </div>
                <div class="order-first md:order-last w-full md:w-1/2 xl:w-1/3 p-8 px-6 self-center">
                    <div class="md:max-w-sm">
                        <span class="inline-block sub-dark mb-4 font-berlin" data-aos="fade-right" data-aos-delay="200">Get Started</span>
                        <h2 class="mb-4 text-6xl md:text-7xl tracking-px-n leading-tight font-calm" data-aos="fade-right" data-aos-delay="400">Finding your new home just got easier.</h2>
                        <p class="text-gray-900 font-medium tracking-tight text-lg" data-aos="fade-right" data-aos-delay="600">Explore Resources for Both Buyers & Sellers.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script scoped>
    import HomeValueCard from '../elements/HomeValueCard.vue';
    import BuyerSearchCard from '../elements/BuyerSearchCard.vue';
    
    export default {
      name: 'HomeJourney',
      components: {
        HomeValueCard,
        BuyerSearchCard,
      }
    }
</script>
<style scoped>
    .background-new {
    background-image: url("https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwzfHxob3VzZXxlbnwwfHx8fDE3MTQ0NDY4NTB8MA&ixlib=rb-4.0.3&q=85&w=1920");
    background-size: cover;
    background-color: rgba(37,40,41,0);
    background-repeat: no-repeat;
    border-radius: 20px
    }
</style>