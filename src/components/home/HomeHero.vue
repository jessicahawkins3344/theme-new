<template>
    <section class="relative pt-24 md:pb-28 lg:pb-0 overflow-hidden bg-primary">    
        <div class="relative z-10 container mx-auto px-8">    
          <div class="flex flex-wrap items-center -m-8">      
            <div class="w-full md:w-1/2 p-8">        
              <div class="md:max-w-lg">
                <span class="inline-block sub text-white mb-4" data-aos="fade-up" data-aos-delay="600">Springfield's Expert Agent</span>         
                <h1 class="mb-6 text-10xl text-white tracking-px-n leading-tight md:text-13xl font-calm font-semibold" data-aos="fade-up" data-aos-delay="800">Mike Oddo</h1>          
                <p class="mb-8 text-white text-opacity-70 font-medium md:max-w-md" data-aos="fade-up" data-aos-delay="1000">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>          
                <div class="mb-16 p-1.5 xl:pl-7 inline-block md:max-w-xl w-full border-2 border-white rounded-3xl focus-within:border-indigo-700 transition-all ease-in-out">            
                  <div class="flex flex-wrap items-center">              <div class="w-full xl:flex-1">                
                    <input class="p-3 xl:p-0 xl:pr-7 w-full text-gray-600 outline-none bg-transparent placeholder-white" id="headerInput3-1" type="text" placeholder="Find homes by city, zip, or county">              </div>              <div class="w-full xl:w-auto">                <div class="block">                  
                      <button class="py-4 px-7 w-full font-semibold rounded-xl focus:ring focus:ring-indigo-300 hover:bg-zinc-300 transition ease-in-out duration-200 bg-white text-slate-800" type="button">Search</button>                
                    </div>              
                  </div>            
                </div>          
              </div>        
            </div>      
          </div>      
          <div class="w-full md:w-1/2 pt-0 md:p-8">        
            <img class="mx-auto mt-8" src="../../assets/images/mike-no-bg-small.png" alt="">      
          </div>    
        </div>  
      </div>
    </section>
</template>
<script setup>
    import Header from '@/views/Header.vue';
    import { defineProps } from 'vue';
    
    const props = defineProps({
      mode: {
        type: String,
        required: true,
      },
    });
</script>
<style scoped>
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 1;
  transition: .5s ease;
  background: linear-gradient(180deg, rgb(0 0 0 / 45%) 26.4%, rgb(2 15 23 / 59%) 54.63%, rgb(6 14 29 / 76%) 81.76%);
}
</style>