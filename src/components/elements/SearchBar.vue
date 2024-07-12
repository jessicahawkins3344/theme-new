<template>
    <div data-aos="fade-up" data-aos-delay="600" class="flex flex-wrap max-w-lg mx-auto aos-init">
        <div class="flex w-full md:w-2/3 mb-3 md:mb-0 md:mr-2">
                <div class="relative"><v-icon name="bi-search" scale="1.2" class="flex ml-4 absolute top-0 bottom-0 text-white my-auto inline-block transition ease-in-out "/>
                </div>
                <input class="w-full rounded py-4 pl-12 text-xs text-blueGray-600 bg-transparent outline-none transition-all ease-in-out
                ring-2 ring-white ring-inset focus:ring-2 focus:ring-primary focus:ring-inset" type="text" placeholder="Search by Zip, City or County">
            </div>
        <button class="wow slideInUp w-full md:w-auto py-4 px-8 text-xs text-primary hover:text-white font-semibold leading-none border hover:border-primary bg-white hover:bg-primary rounded transition duration-300 ease-in-out" type="submit">Find Homes</button>
    </div>
</template>

<style scoped>
</style>