<template>
    <div class="w-full md:w-1/3 p-2">
        <a href="#" class="group relative block bg-black overflow-hidden">
            <img
            alt=""
            :src="image"
            class="absolute inset-0 h-full w-full object-cover opacity-35 transition-opacity group-hover:opacity-50"
            />
        
            <div class="relative p-4 sm:p-6 lg:p-8">
                <span class="inline-block sub text-white mb-2">{{ type }}</span>
        
            <p class="text-6xl font-bold text-white sm:text-6xl font-sans tracking-tight">{{ title }}</p>
        
            <div class="mt-32 sm:mt-48 lg:mt-64">
                <div
                class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                <a class="inline-flex items-center max-w-max text-white hover:text-gray-200" href="#">
                        <span class="mr-2 font-sans font-medium">Search Homes</span>
                        <svg width="19" height="18" viewbox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 3.75L16.25 9M16.25 9L11 14.25M16.25 9L2.75 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </a>
                </div>
            </div>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'ServiceAreaCard',
        props: {
            image: {
            type: String,
            required: true
            },
            type: {
            type: String,
            required: true
            },
            title: {
            type: String,
            required: true
            }
            
        }
    }
</script>