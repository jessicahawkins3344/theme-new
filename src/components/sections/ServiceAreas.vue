<template>
    <section class="overflow-hidden">
        <div class="container px-8 mx-auto pt-24 text-center mb-16">
            <span data-aos="fade-down" data-aos-delay="200" class="inline-block sub-dark center mb-4 font-berlin">Expertise</span>
            <h2 data-aos="fade-down" data-aos-delay="400" class="mb-4 text-6xl md:text-7xl tracking-px-n leading-tight font-calm">Servicing Areas</h2>
            <p data-aos="fade-down" data-aos-delay="600" class="text-lg tracking-tight">Basko is the super simple way to connect over video of apps, downloads, or long meeting links.</p>
        </div>
        <div class="flex flex-wrap gap-0">
            <ServiceAreaCard data-aos="fade-up" data-aos-delay="800"
                v-for="(area, index) in areas"
                :key="index"
                :image="area.image"
                :type="area.type"
                :title="area.title"
            />
        </div>
    </section>
</template>

<script scoped>
import ServiceAreaCard from '../elements/ServiceAreaCard.vue';

export default {
  name: 'ServiceAreas',
  components: {
    ServiceAreaCard,
  },
  data() {
    return {
      areas: [
        {
          image: 'https://s3.us-central-1.wasabisys.com/house-jet/assets/JHawkins/base-img-ca2.png',
          type: 'city',
          title: 'Nixa, MO'
        },
        {
          image: 'https://s3.us-central-1.wasabisys.com/house-jet/assets/JHawkins/base-img-ca1.png',
          type: 'area',
          title: 'SW Springfield'
        },
        {
          image: 'https://s3.us-central-1.wasabisys.com/house-jet/assets/JHawkins/base-img.png',
          type: 'neighborhood',
          title: 'Southen Hills'
        }
      ]
    };
  }
}

</script>