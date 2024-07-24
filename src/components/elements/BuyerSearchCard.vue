<template>
    <div class="w-full xl:w-auto p-4 pt-0">
        <div class="xl:max-w-sm h-full background-new rounded-xl">
            <div class="px-9 py-8 h-full rounded-xl shadow-xl overscroll-none bg-opacity-75 bg-zinc-800 hover:bg-opacity-35 transition-all ease-in-out">
                <div class="flex flex-col justify-between h-full">
                <div>
                    <v-icon name="bi-house-heart-fill" scale="2.5" class="transition ease-in-out mb-14 text-white"/>
                    <h3 class="mb-5 text-white leading-snug font-sans text-5xl">For Buyers</h3>
                    <p class="mb-24 text-blueGray-300 font-medium text-lg">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit.</p>
                </div>
                <a class="inline-flex items-center max-w-max text-white hover:text-gray-200" href="#">
                    <span class="mr-2 font-medium font-sans">Search Homes</span>
                    <svg width="19" height="18" viewbox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 3.75L16.25 9M16.25 9L11 14.25M16.25 9L2.75 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.background-new {
  background-image: url("https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwzfHxob3VzZXxlbnwwfHx8fDE3MTQ0NDY4NTB8MA&ixlib=rb-4.0.3&q=85&w=1920");
  background-size: cover;
  background-color: rgba(37,40,41,0);
  background-repeat: no-repeat;
}
</style>